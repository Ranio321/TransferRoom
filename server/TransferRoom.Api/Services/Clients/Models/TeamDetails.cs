using System.Text.Json.Serialization;
using TransferRoom.Api.Services.Clients.Responses;

namespace TransferRoom.Api.Services.Clients.Models;

public class TeamDetails
{
    public required string Name { get; init; }
    public required string TeamType { get; init; }
    public required string ShortName { get; init; }
    public double? Id { get; init; }

    [JsonPropertyName("altIds")]
    public required ImageDetails ImageDetails { get; init; }
}
