using Forget.Core.Service.Core.Models;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Forget.Core.Service.Dtos.Photo;

public class SavePhotoDto : Base {
  public string ImagePath { get; set; } = null!;
  public string ProductId { get; set; } = null!;
  [JsonIgnore]
  [DataType(DataType.Upload)]
  public IFormFile? ImageFile { get; set; } = null!;
}
