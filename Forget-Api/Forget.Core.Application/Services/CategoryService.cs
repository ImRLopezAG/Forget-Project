using AutoMapper;
using Forget.Core.Application.Core;
using Forget.Core.Domain;
using Forget.Core.Service.Contracts;
using Forget.Core.Service.Core;
using Forget.Core.Service.Dtos.Category;
using Forget.Core.Service.Repositories;

namespace Forget.Core.Application.Services;

public class CategoryService: GenericService<CategoryDto, SaveCategoryDto, Category>, ICategoryService
{
  private readonly ICategoryRepository _repository;
  private readonly IMapper _mapper;
  public CategoryService(ICategoryRepository repository, IMapper mapper) : base(repository, mapper)
  {
    _repository = repository;
    _mapper = mapper;
  }
}