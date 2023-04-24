using Forget.Core.Domain;
using Forget.Core.Service.Contracts;
using Forget.Core.Service.Controllers;
using Forget.Core.Service.Dtos.Category;
using Forget.Presentation.WebApi.Core;
using Swashbuckle.AspNetCore.Annotations;

namespace Forget.Presentation.WebApi.Controllers;
[SwaggerTag("Category Management")]
public class CategoryController : GenericController<CategoryDto, SaveCategoryDto, Category>, ICategoryController {
  private readonly ICategoryService _service;

  public CategoryController(ICategoryService service) : base(service) {
    _service = service;
  }
}
