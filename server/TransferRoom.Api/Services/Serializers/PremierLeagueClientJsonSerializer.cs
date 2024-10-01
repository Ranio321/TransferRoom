using System.Text.Json;

namespace TransferRoom.Api.Services.Serializers;

public static class PremierLeagueClientJsonSerializer
{
    private static readonly JsonSerializerOptions _serializerOptions = new()
    {
        PropertyNameCaseInsensitive = true,
    };

    public static T? Deserialize<T>(Stream stream)
    {
        var deserializationResult = JsonSerializer.Deserialize<T>(stream, _serializerOptions);
        return deserializationResult;
    }
}
