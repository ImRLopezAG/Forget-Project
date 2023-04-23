using Forget.Core.Domain;
using Forget.Core.Service.Core;
using Forget.Core.Service.Dtos.Product;


namespace Forget.Core.Service.Controllers;

public interface IProductController: IGenericController<ProductDto, SaveProductDto, Product>
{
    
}
