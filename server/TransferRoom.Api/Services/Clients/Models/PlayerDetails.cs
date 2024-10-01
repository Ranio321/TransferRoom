namespace TransferRoom.Api.Services.Clients.Models;

public class PlayerDetails
{
    public required string FirstName { get; init; }
    public required string LastName { get; init; }
    public required DateTime BirthDate { get; init; }
    public required string ImageUrl { get; init; }
}
