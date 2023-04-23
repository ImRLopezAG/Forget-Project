using Forget.Core.Domain;
using Forget.Core.Service.Contracts;
using Forget.Core.Service.Controllers;
using Forget.Core.Service.Dtos.Product;
using Forget.Presentation.WebApi.Core;
using Swashbuckle.AspNetCore.Annotations;

namespace Forget.Presentation.WebApi.Controllers;

[SwaggerTag("Product Management")]
public class ProductController : GenericController<ProductDto, SaveProductDto, Product>, IProductController
{
  private readonly IProductService _service;

  public ProductController(IProductService service) : base(service)
  {
    _service = service;
  }
}