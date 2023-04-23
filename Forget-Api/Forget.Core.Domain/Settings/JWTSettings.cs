namespace Forget.Core.Domain.Settings;

public class JWTSettings
{
  public string Key { get; set; } = null!;
  public string Issuer { get; set; } = null!;
  public string Audience { get; set; } = null!;
  public int DurationInMinutes { get; set; }
}

