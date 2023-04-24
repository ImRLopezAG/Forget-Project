using Forget.Core.Domain;
using Forget.Core.Service.Core;
using Forget.Core.Service.Dtos.Category;

namespace Forget.Core.Service.Contracts;

public interface ICategoryService : IGenericService<CategoryDto, SaveCategoryDto, Category> {

}
