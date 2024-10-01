namespace TransferRoom.Api.Controllers.Responses;

public class GetAllTeamsResposne
{
    public double? Id { get; set; }
    public required string Name { get; set; }
    public required string TeamType { get; set; }
    public required string ShortName { get; set; }
    public required string ImageUrl { get; set; }
}
