namespace Forget.Core.Service.Dtos.Account;
public class AuthenticationRequest
{
  public string Email { get; set; } = null!;
  public string Password { get; set; } = null!;
}

