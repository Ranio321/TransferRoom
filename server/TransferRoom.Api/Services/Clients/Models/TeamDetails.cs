namespace TransferRoom.Api.Services.Clients.Models;

public class TeamDetails
{
    public double? Id { get; init; }
    public required string Name { get; init; }
    public required string? Nickname { get; init; }
    public required string ImageUrl { get; init; }
}
