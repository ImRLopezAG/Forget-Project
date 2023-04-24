using Forget.Core.Service.Enums;
using Forget.Infrastructure.Identity.Entities;
using Microsoft.AspNetCore.Identity;

namespace Forget.Infrastructure.Identity.Seeds;
public static class DefaultDevUser {
  public static async Task SeedAsync(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager) {
    ApplicationUser defaultUser = new() {
      UserName = "Developer",
      Email = "dev@email.com",
      FirstName = "Dev",
      LastName = "eloper",
      EmailConfirmed = true,
      PhoneNumberConfirmed = true,
      Image = "https://img.favpng.com/2/6/10/computer-icons-user-interface-computer-programming-software-developer-png-favpng-KVWZcevpeKvpHCgxvibJupffc.jpg"
    };

    if (userManager.Users.All(u => u.Id != defaultUser.Id)) {
      var user = await userManager.FindByEmailAsync(defaultUser.Email);
      if (user == null) {
        await userManager.CreateAsync(defaultUser, "123Pa$$word!");
        await userManager.AddToRoleAsync(defaultUser, Roles.Dev.ToString());
      }
    }

  }
}

