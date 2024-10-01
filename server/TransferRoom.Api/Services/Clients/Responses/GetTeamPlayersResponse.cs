using System.Text.Json.Serialization;

namespace TransferRoom.Api.Services.Clients.Responses;

public class GetTeamPlayersResponse
{
    public required List<PlayerDetails> Players { get; set; }

    public class PlayerDetails
    {
        [JsonPropertyName("latestPosition")]
        public required string Position { get; set; }
        public required NameDetails Name { get; set; }
        public required BirthDetails Birth { get; set; }

        [JsonPropertyName("altIds")]
        public required ImageDetails ImageDetails { get; init; }
    }

    public class NameDetails
    {
        public required string First { get; set; }
        public required string Last { get; set; }
    }

    public class BirthDetails
    {
        public required BirthDate Date { get; set; }

        public class BirthDate
        {
            [JsonPropertyName("millis")]
            public required long Miliseconds { get; init; }
            public DateTime BirthDateTime => DateTime.UnixEpoch.AddMilliseconds(Miliseconds);
        }
    }
}