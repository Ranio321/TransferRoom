﻿using Flurl;
using Microsoft.Extensions.Caching.Memory;
using TransferRoom.Api.Exceptions;
using TransferRoom.Api.Services.Clients.Models;
using TransferRoom.Api.Services.Clients.Responses;
using TransferRoom.Api.Services.Serializers;

namespace TransferRoom.Api.Services.Clients;

public interface IPremierLeagueClient
{
    Task<List<TeamDetails>> GetAllTeamsForCurrentSeason(CancellationToken cancellationToken);
    Task<List<PlayerDetails>> GetTeamPlayers(int teamId, CancellationToken cancellationToken);
}

internal class PremierLeagueClient : IPremierLeagueClient
{
    private const string BaseAddress = "https://footballapi.pulselive.com/football/";
    private const string CurrentSeasonName = "2024/25";
    private static readonly IReadOnlyDictionary<string, string> DefaultRequestHeaders = new Dictionary<string, string>
    {
        { "origin", "https://www.premierleague.com" },
        { "User-Agent", "Mozilla/5.0 (Windows NT; Windows NT 10.0; pl-PL) WindowsPowerShell/5.1.19041.4648" },
    };


    private readonly HttpClient _httpClient;
    private readonly IMemoryCache _memoryCache;

    public PremierLeagueClient(HttpClient httpClient, IMemoryCache memoryCache)
    {
        _httpClient = httpClient;
        _httpClient.BaseAddress = new Uri(BaseAddress);

        foreach (var header in DefaultRequestHeaders)
        {
            _httpClient.DefaultRequestHeaders.Add(header.Key, header.Value);
        }
        _memoryCache = memoryCache;
    }

    public async Task<List<TeamDetails>> GetAllTeamsForCurrentSeason(CancellationToken cancellationToken)
    {
        var currentSeasonId = await GetCurrentSeasonId(cancellationToken);

        var url = new Url("teams")
            .AppendQueryParam("pageSize", 30)
            .AppendQueryParam("comps", 1)
            .AppendQueryParam("altIds", true)
            .AppendQueryParam("page", 0)
            .AppendQueryParam("compSeasons", currentSeasonId);

        var response = await Get<GetAllTeamsResponse>(url, nameof(GetAllTeamsForCurrentSeason), cancellationToken);

        return response.TeamsDetails
            .Select(x => new TeamDetails
            {
                ShortName = x.ShortName,
                Id = x.Id,
                Name = x.Name,
                ImageUrl = $"https://resources.premierleague.com/premierleague/badges/50/{x.ImageDetails.Id}@x2.png"
            })
            .ToList(); ;
    }

    public async Task<List<PlayerDetails>> GetTeamPlayers(int teamId, CancellationToken cancellationToken)
    {
        var currentSeasonId = await GetCurrentSeasonId(cancellationToken);

        var url = new Url("teams")
            .AppendPathSegment(teamId)
            .AppendPathSegment("compseasons")
            .AppendPathSegment(currentSeasonId)
            .AppendPathSegment("staff")
            .AppendQueryParam("compSeasons", currentSeasonId)
            .AppendQueryParam("altIds", true)
            .AppendQueryParam("type", "player");

        var response = await Get<GetTeamPlayersResponse>(url, $"{nameof(GetTeamPlayers)}_{teamId}", cancellationToken);

        return response.Players
            .Select(x => new PlayerDetails
            {
                FirstName = x.Name.First,
                LastName = x.Name.Last,
                BirthDate = x.Birth.Date.BirthDateTime,
                Position = x.Position,
                ImageUrl = $"https://resources.premierleague.com/premierleague/photos/players/40x40/{x.ImageDetails.Id}.png"
            })
            .ToList();
    }

    private async Task<double> GetCurrentSeasonId(CancellationToken cancellationToken)
    {
        var url = new Url("competitions/1/compseasons")
            .AppendQueryParam("page", 0)
            .AppendQueryParam("pageSize", 100);

        var response = await Get<GetSeasonsResponse>(url, nameof(GetCurrentSeasonId), cancellationToken);

        return response.SeasonsDetails
            .Where(x => x.SeasonName.Equals(CurrentSeasonName, StringComparison.InvariantCultureIgnoreCase))
            .Select(x => x.Id)
            .First();
    }

    private async Task<T> Get<T>(string url, string cacheKey, CancellationToken cancellationToken)
        where T : class
    {
        var composedCacheKey = ComposeCacheKey(cacheKey);
        var cachedValue = GetCachedValue(composedCacheKey);

        if (cachedValue is not null)
            return cachedValue;

        var fetchResult = await _httpClient.GetAsync(url, cancellationToken);

        if (fetchResult.IsSuccessStatusCode)
        {
            var responseStream = await fetchResult.Content.ReadAsStreamAsync(cancellationToken);
            var parsedResponse = PremierLeagueClientJsonSerializer.Deserialize<T>(responseStream);

            if (parsedResponse is null)
                throw new DeserializationException(typeof(T));

            _memoryCache.Set(composedCacheKey, parsedResponse);
            return parsedResponse;
        }
        else
        {
            throw new InvalidResponseCodeException(nameof(GetCurrentSeasonId), fetchResult.StatusCode);
        }

        static string ComposeCacheKey(string cacheKey)
            => $"{nameof(PremierLeagueClient)}_{cacheKey}";

        T? GetCachedValue(string cacheKey)
        {
            if (_memoryCache.TryGetValue(cacheKey, out T? cachedValue) &&
                cachedValue is not null)
            {
                return cachedValue;
            }

            return null;
        }
    }
}
