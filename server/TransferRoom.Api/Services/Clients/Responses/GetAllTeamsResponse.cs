using System.Text.Json.Serialization;

namespace TransferRoom.Api.Services.Clients.Responses;

public class GetAllTeamsResponse
{
    [JsonPropertyName("content")]
    public required List<TeamDetails> TeamsDetails { get; set; }

    public class TeamDetails
    {
        public required string Name { get; init; }
        public required string TeamType { get; init; }
        public required string ShortName { get; init; }
        public double? Id { get; init; }

        [JsonPropertyName("altIds")]
        public required ImageDetails ImageDetails { get; init; }
    }
}

