using Forget.Core.Service.Dtos.Account;
using Forget.Infrastructure.Identity.Entities;
using System.IdentityModel.Tokens.Jwt;

namespace Forget.Infrastructure.Identity.interfaces;

public interface IJwtService
{
  Task<JwtSecurityToken> GenerateJwToken(ApplicationUser user);
  RefreshToken GenerateRefreshToken();
}
