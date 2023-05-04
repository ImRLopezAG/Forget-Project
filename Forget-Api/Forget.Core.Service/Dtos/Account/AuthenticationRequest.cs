namespace Forget.Core.Service.Dtos.Account;
public class AuthenticationRequest {
  public string User { get; set; } = null!;
  public string Password { get; set; } = null!;
}

