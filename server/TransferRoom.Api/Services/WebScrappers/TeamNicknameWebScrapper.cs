using HtmlAgilityPack;
using Microsoft.Extensions.Caching.Memory;

namespace TransferRoom.Api.Services.Scrappers;

public interface ITeamNicknameWebScrapper
{
    Task<string?> GetTeamNickname(string teamName, CancellationToken cancellationToken);
}

public class TeamNicknameWebScrapper : ITeamNicknameWebScrapper
{
    private const string Url = "https://www.givemesport.com/football-premier-league-club-nickname-origins/";

    private readonly IMemoryCache _memoryCache;

    public TeamNicknameWebScrapper(IMemoryCache memoryCache)
    {
        _memoryCache = memoryCache;
    }

    public async Task<string?> GetTeamNickname(string teamName, CancellationToken cancellationToken)
    {
        var teamsNicknames = await GetTeamsNicknames(cancellationToken);

        var teamNickname = teamsNicknames
            .Where(x => x.TeamName.Equals(teamName, StringComparison.InvariantCultureIgnoreCase))
            .Select(x => x.TeamNickname)
            .FirstOrDefault();

        return teamNickname;
    }

    private async Task<List<TeamNicknameResource>> GetTeamsNicknames(CancellationToken cancellationToken)
    {
        var cacheKey = $"Cache_{nameof(GetTeamsNicknames)}";
        var teamsNicknames = await _memoryCache.GetOrCreateAsync(cacheKey, (_) => GetNicknames(cancellationToken));

        return teamsNicknames!;

        static async Task<List<TeamNicknameResource>> GetNicknames(CancellationToken cancellationToken)
        {
            var document = await new HtmlWeb().LoadFromWebAsync(Url, cancellationToken);

            var tableWithNicknames = document
                .DocumentNode
                .SelectSingleNode("//table[thead/tr/th/p[contains(text(),'Premier League Nicknames')]]");

            if (tableWithNicknames is null)
                return [];

            var teamsNicknames = new List<TeamNicknameResource>();

            var rows = tableWithNicknames.SelectNodes(".//tbody/tr");

            for (int i = 1; i < rows.Count; i++)
            {
                var columns = rows[i].SelectNodes("td");

                if (columns != null && columns.Count == 3)
                {
                    var teamName = columns[0].InnerText.Trim();
                    var teamNickname = columns[2].InnerText.Trim();
                    var teamNicknameResource = new TeamNicknameResource(teamName, teamNickname);

                    teamsNicknames.Add(teamNicknameResource);
                }
            }

            return teamsNicknames;
        }
    }

    private sealed record TeamNicknameResource(string TeamName, string TeamNickname);
}