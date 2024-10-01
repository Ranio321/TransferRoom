namespace TransferRoom.Api.Services.Clients.Models;

public class TeamDetails
{
    public double? Id { get; set; }
    public required string Name { get; set; }
    public required string ShortName { get; set; }
    public required string ImageUrl { get; set; }
}
