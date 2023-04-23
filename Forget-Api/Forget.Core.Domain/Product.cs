using Forget.Core.Domain.Core;

namespace Forget.Core.Domain;

public class Product : RegularEntity {
  public string? Portrait { get; set; } = null!;
  public string Description { get; set; } = null!;
  public double Price { get; set; }
  public string CategoryId { get; set; } = null!;
  
  public Category Category { get; set; } = null!;
  public ICollection<Photo> Photos { get; set; } = null!;
}
