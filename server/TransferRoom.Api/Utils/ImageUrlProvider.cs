namespace TransferRoom.Api.Utils;

public static class ImageUrlProvider
{
    public static string GetTeamImageUrl(string teamImageId)
        => $"https://resources.premierleague.com/premierleague/badges/50/{teamImageId}@x2.png";
}
