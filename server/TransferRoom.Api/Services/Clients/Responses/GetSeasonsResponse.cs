using System.Text.Json.Serialization;

namespace TransferRoom.Api.Services.Clients.Responses;

public class GetSeasonsResponse
{
    [JsonPropertyName("content")]
    public required List<SeasonDetails> SeasonsDetails { get; init; }

    public class SeasonDetails
    {
        [JsonPropertyName("label")]
        public required string SeasonName { get; init; }
        public required double Id { get; init; }
    }
}

