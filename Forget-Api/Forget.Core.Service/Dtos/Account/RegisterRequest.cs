using Newtonsoft.Json;

namespace Forget.Core.Service.Dtos.Account;
public class RegisterRequest
{
  public string? Id { get; set; } = null!;
  public string FirstName { get; set; } = null!;
  public string LastName { get; set; } = null!;
  public string Email { get; set; } = null!;
  public string UserName { get; set; } = null!;
  public string Password { get; set; } = null!;
  public string ConfirmPassword { get; set; } = null!;
  public string PhoneNumber { get; set; } = null!;
  public string DNI { get; set; } = null!;
  [JsonIgnore]
  public int Role { get; set; }
  public string Image { get; set; } = null!;
}

