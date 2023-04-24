using Forget.Core.Service.Core.Models;
using System.Text.Json.Serialization;

namespace Forget.Core.Service.Dtos.Account;

public class AccountDto : Base {
  [JsonIgnore]
  public string UserName { get; set; } = null!;
  public string Email { get; set; } = null!;
  [JsonIgnore]
  public string FullName { get; set; } = null!;
  public string FirstName { get; set; } = null!;
  public string LastName { get; set; } = null!;
  [JsonIgnore]
  public bool EmailConfirmed { get; set; }
  [JsonIgnore]
  public string Role { get; set; } = null!;
  public string Image { get; set; } = null!;
}
