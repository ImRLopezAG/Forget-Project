using Forget.Core.Service.Core.Models;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Forget.Core.Service.Dtos.Product;

public class SaveProductDto : BaseDto {
  public string? Portrait { get; set; } = null!;
  public double Price { get; set; }
  public string CategoryId { get; set; } = null!;
  public string Description { get; set; } = null!;
  [JsonIgnore]
  [DataType(DataType.Upload)]
  public IFormFile? ImageFile { get; set; } = null!;
  [JsonIgnore]
  [DataType(DataType.Upload)]
  public ICollection<IFormFile>? ImagesFile { get; set; } = null!;
}
