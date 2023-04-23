using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Forget.Core.Domain.Settings;
using Forget.Core.Service.Dtos.Account;
using Forget.Infrastructure.Identity.Entities;
using Forget.Infrastructure.Identity.interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Forget.Infrastructure.Identity.Services;

public class JwtService : IJwtService
{
  private readonly JWTSettings _jwtSettings;
  private readonly UserManager<ApplicationUser> _userManager;

  public JwtService(IOptions<JWTSettings> jwtSettings, UserManager<ApplicationUser> userManager)
  {
    _jwtSettings = jwtSettings.Value;
    _userManager = userManager;
  }
  public async Task<JwtSecurityToken> GenerateJwToken(ApplicationUser user)
  {
    var userClaims = await _userManager.GetClaimsAsync(user);
    var roles = await _userManager.GetRolesAsync(user);

    List<Claim> roleClaims = new();

    foreach (var role in roles)
      roleClaims.Add(new Claim("roles", role));


    var claims = new[]{
      new Claim(JwtRegisteredClaimNames.Sub,user.UserName),
      new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
      new Claim(JwtRegisteredClaimNames.Email,user.Email),
      new Claim("uid", user.Id)
    }
    .Union(userClaims)
    .Union(roleClaims);

    SymmetricSecurityKey key = new(Encoding.UTF8.GetBytes(_jwtSettings.Key));
    SigningCredentials creds = new(key, SecurityAlgorithms.HmacSha256);
    var expires = DateTime.UtcNow.AddMinutes(_jwtSettings.DurationInMinutes);

    var token = new JwtSecurityToken(
      _jwtSettings.Issuer,
      _jwtSettings.Audience,
      claims,
      expires: expires,
      signingCredentials: creds
    );

    return token;
  }

  public RefreshToken GenerateRefreshToken() => new()
  {
    Token = RTokenString(),
    Expires = DateTime.UtcNow.AddMinutes(30),
    Created = DateTime.UtcNow
  };

  private string RTokenString()
  {
    var rng = RandomNumberGenerator.Create();
    byte[] tokenData = new byte[40];
    rng.GetBytes(tokenData);
    return Convert.ToBase64String(tokenData).Replace("-", "");
  }

}
