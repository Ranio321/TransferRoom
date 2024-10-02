using System.Text.Json.Serialization;

namespace TransferRoom.Api.Services.Clients.Responses;

public class GetTeamWithPlayersResponse
{
    public required List<PlayerDetails> Players { get; init; }
    public required TeamDetails Team { get; init; }

    public class TeamDetails
    {
        public required string Name { get; init; }
        [JsonPropertyName("altIds")]
        public required ImageDetails ImageDetails { get; init; }
    }

    public class PlayerDetails
    {
        [JsonPropertyName("latestPosition")]
        public required string Position { get; init; }
        public required NameDetails Name { get; init; }
        public required BirthDetails Birth { get; init; }

        [JsonPropertyName("altIds")]
        public required ImageDetails ImageDetails { get; init; }
    }

    public class NameDetails
    {
        public required string First { get; init; }
        public required string Last { get; init; }
    }

    public class BirthDetails
    {
        public required BirthDate Date { get; init; }

        public class BirthDate
        {
            [JsonPropertyName("millis")]
            public required long Miliseconds { get; init; }
            public DateTime BirthDateTime => DateTime.UnixEpoch.AddMilliseconds(Miliseconds);
        }
    }
}