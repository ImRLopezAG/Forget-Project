using Forget.Core.Service.Core.Models;

namespace Forget.Core.Service.Dtos.Product;

public class ProductDto : BaseDto {
  public string? Portrait { get; set; } = null!;
  public double Price { get; set; }
  public string CategoryId { get; set; } = null!;
}
