using Microsoft.AspNetCore.Identity;
using Forget.Core.Service.Enums;
using Forget.Infrastructure.Identity.Entities;

namespace Forget.Infrastructure.Identity.Seeds;
public static class DefaultRoles
{
  public static async Task SeedAsync(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
  {
    await roleManager.CreateAsync(new IdentityRole(Roles.Admin.ToString()));
    await roleManager.CreateAsync(new IdentityRole(Roles.Dev.ToString()));
    await roleManager.CreateAsync(new IdentityRole(Roles.Client.ToString()));
  }
}

