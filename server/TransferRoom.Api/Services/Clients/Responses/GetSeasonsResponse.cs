using System.Text.Json.Serialization;

namespace TransferRoom.Api.Services.Clients.Responses;

public class GetSeasonsResponse
{
    [JsonPropertyName("content")]
    public required List<SeasonDetails> SeasonsDetails { get; set; }

    public class SeasonDetails
    {
        [JsonPropertyName("label")]
        public required string SeasonName { get; set; }
        public required double Id { get; set; }
    }
}

