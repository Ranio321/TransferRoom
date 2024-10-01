using System.Text.Json.Serialization;

namespace TransferRoom.Api.Services.Clients.Responses;

public class ImageDetails
{
    [JsonPropertyName("opta")]
    public required string Id { get; set; }
}