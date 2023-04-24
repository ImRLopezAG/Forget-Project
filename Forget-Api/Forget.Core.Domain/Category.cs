using Forget.Core.Domain.Core;

namespace Forget.Core.Domain;

public class Category : RegularEntity {
  public ICollection<Product> Products { get; set; } = null!;
}
