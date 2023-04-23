using Forget.Core.Domain;
using Forget.Core.Service.Core;
using Forget.Core.Service.Dtos.Category;

namespace Forget.Core.Service.Controllers;

public interface ICategoryController: IGenericController<CategoryDto, SaveCategoryDto, Category>
{
  
}
