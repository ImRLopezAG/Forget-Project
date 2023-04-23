using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Forget.Core.Service.Core.Models;
using Microsoft.AspNetCore.Http;

namespace Forget.Core.Service.Dtos.Account;

public class SaveAccountDto : Base
{
  public string FirstName { get; set; } = null!;
  public string LastName { get; set; } = null!;
  public string UserName { get; set; } = null!;
  public string? Image { get; set; } = null!;
  public string PhoneNumber { get; set; } = null!;
  public string Email { get; set; } = null!;
  public string Password { get; set; } = null!;
  public string ConfirmPassword { get; set; } = null!;
  public int Role { get; set; }
  [DataType(DataType.Upload)]
  public IFormFile? ImageFile { get; set; } = null!;
}
