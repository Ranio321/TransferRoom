using Microsoft.AspNetCore.Mvc;
using TransferRoom.Api.Services.Clients;
using TransferRoom.Api.Services.Clients.Models;

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
    public async Task<List<TeamDetails>> GetAllTeams(CancellationToken cancellationToken)
    {
        var teamsDetails = await _client.GetAllTeamsForCurrentSeason(cancellationToken);
        return teamsDetails;
    }

    [HttpGet("team/{id}/players")]
    public async Task<List<PlayerDetails>> GetTeamPlayers([FromRoute] int id, CancellationToken cancellationToken)
    {
        var playersDetails = await _client.GetTeamPlayers(id, cancellationToken);
        return playersDetails;
    }
}
