namespace TransferRoom.Api.Services.Clients.Models;

public class TeamWithPlayers
{
    public required TeamResource TeamDetails { get; init; }
    public required List<PlayerDetails> PlayersDetails { get; init; }

    public class TeamResource
    {
        public required string Name { get; init; }
        public required string ImageUrl { get; init; }
    }

    public class PlayerDetails
    {
        public required string FirstName { get; init; }
        public required string LastName { get; init; }
        public required string Position { get; init; }
        public required DateTime BirthDate { get; init; }
        public required string ImageUrl { get; init; }
    }
}
