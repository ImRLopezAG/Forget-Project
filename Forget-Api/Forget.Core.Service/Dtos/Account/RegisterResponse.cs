namespace Forget.Core.Service.Dtos.Account;
public class RegisterResponse
{
  public string UserId { get; set; } = null!;
  public bool HasError { get; set; }
  public string? Error { get; set; }
}

