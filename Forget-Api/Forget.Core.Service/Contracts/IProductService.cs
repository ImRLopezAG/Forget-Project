using Forget.Core.Domain;
using Forget.Core.Service.Core;
using Forget.Core.Service.Dtos.Product;

namespace Forget.Core.Service.Contracts;

public interface IProductService : IGenericService<ProductDto, SaveProductDto, Product> {
  Task SaveProductPhoto(Photo photo);
}
