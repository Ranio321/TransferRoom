using Microsoft.AspNetCore.Mvc;
using TransferRoom.Api.Controllers.Responses;
using TransferRoom.Api.Services.Clients;
using TransferRoom.Api.Services.Clients.Models;
using TransferRoom.Api.Utils;

namespace TransferRoom.Api.Controllers;

[ApiController]
[Route("premier-league")]
public class PremierLeagueController : ControllerBase
{
    private readonly IPremierLeagueClient _client;

    public PremierLeagueController(IPremierLeagueClient client)
    {
        _client = client;
    }

    [HttpGet("teams")]
    public async Task<List<GetAllTeamsResposne>> GetAllTeams(CancellationToken cancellationToken)
    {
        var teamsDetails = await _client.GetAllTeamsForCurrentSeason(cancellationToken);

        return teamsDetails.Select(x => new GetAllTeamsResposne
        {
            Id = x.Id,
            ShortName = x.ShortName,
            ImageUrl = ImageUrlProvider.GetTeamImageUrl(x.ImageDetails.Id),
            Name = x.Name,
            TeamType = x.TeamType,
        })
        .ToList();
    }

    [HttpGet("team/{id}/players")]
    public async Task<List<PlayerDetails>> GetTeamPlayers([FromRoute] int id, CancellationToken cancellationToken)
    {
        var playersDetails = await _client.GetTeamPlayers(id, cancellationToken);
        return playersDetails;
    }
}
