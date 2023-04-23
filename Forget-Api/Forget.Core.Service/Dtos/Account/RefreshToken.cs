using Forget.Core.Service.Core.Models;

namespace Forget.Core.Service.Dtos.Account;

public class RefreshToken : Base
{
  public string Token { get; set; } = null!;
  public DateTime Expires { get; set; }
  public bool IsExpired => DateTime.UtcNow >= Expires;
  public DateTime Created { get; set; }
  public DateTime? Revoked { get; set; }
  public bool IsActive => Revoked == null && !IsExpired;
}
