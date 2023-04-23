using Forget.Core.Service.Dtos.Account;
using Forget.Infrastructure.Identity.Entities;

namespace Forget.Infrastructure.Identity.Extensions;

public static class UserExtension
{
  public static AccountDto ToAccountDto(this ApplicationUser user, string role) => new()
  {

    Id = user.Id,
    Email = user.Email,
    EmailConfirmed = user.EmailConfirmed,
    FirstName = user.FirstName,
    LastName = user.LastName,
    FullName = $"{user.FirstName} {user.LastName}",
    PhoneNumber = user.PhoneNumber,
    UserName = user.UserName,
    Role = role,
    Image = user.Image
  };

  public static SaveAccountDto ToSaveVm(this ApplicationUser user, int role) => new()
  {
    Id = user.Id,
    Email = user.Email,
    FirstName = user.FirstName,
    LastName = user.LastName,
    PhoneNumber = user.PhoneNumber,
    UserName = user.UserName,
    Role = role,
    Image = user.Image
  };
}
