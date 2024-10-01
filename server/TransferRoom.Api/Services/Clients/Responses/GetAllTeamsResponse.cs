using System.Text.Json.Serialization;
using TransferRoom.Api.Services.Clients.Models;

namespace TransferRoom.Api.Services.Clients.Responses;

public class GetAllTeamsResponse
{
    [JsonPropertyName("content")]
    public required List<TeamDetails> TeamsDetails { get; set; }
}

