using Forget.Core.Service.Enums;
using Forget.Infrastructure.Identity.Entities;
using Microsoft.AspNetCore.Identity;

namespace Forget.Infrastructure.Identity.Seeds;
public static class DefaultAdminUser {
  public static async Task SeedAsync(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager) {
    ApplicationUser defaultUser = new() {
      UserName = "adminUser",
      Email = "admin@email.com",
      FirstName = "Admin",
      LastName = "Admin",
      EmailConfirmed = true,
      PhoneNumberConfirmed = true,
      Image = "https://www.lansweeper.com/wp-content/uploads/2018/05/ASSET-USER-ADMIN.png"
    };

    if (userManager.Users.All(u => u.Id != defaultUser.Id)) {
      var user = await userManager.FindByEmailAsync(defaultUser.Email);
      if (user == null) {
        await userManager.CreateAsync(defaultUser, "123Pa$$word!");
        await userManager.AddToRoleAsync(defaultUser, Roles.Admin.ToString());
      }
    }

  }
}

