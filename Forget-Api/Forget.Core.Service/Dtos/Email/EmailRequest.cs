namespace Forget.Core.Service.Dtos;

public class EmailRequest {
  public string To { get; set; } = null!;
  public string? Subject { get; set; } = null!;
  public string Body { get; set; } = null!;
}

