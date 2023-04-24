using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace Forget.Core.Service.Dtos.Account;
public class RegisterRequest {
  [JsonIgnore]
  public string? Id { get; set; } = null!;
  public string FirstName { get; set; } = null!;
  public string LastName { get; set; } = null!;
  public string Email { get; set; } = null!;
  public string UserName { get; set; } = null!;
  public string Password { get; set; } = null!;
  public string ConfirmPassword { get; set; } = null!;
  public int Role { get; set; }
  public string Image { get; set; } = null!;
  [JsonIgnore]
  [DataType(DataType.Upload)]
  public IFormFile? ImageFile { get; set; } = null!;
}

