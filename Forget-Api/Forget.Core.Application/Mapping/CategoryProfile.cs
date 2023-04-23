using AutoMapper;
using Forget.Core.Domain;
using Forget.Core.Service.Dtos.Category;

namespace Forget.Core.Application.Mapping;

public class CategoryProfile : Profile{
  public CategoryProfile(){
    CreateMap<Category, CategoryDto>()
    .ReverseMap()
    .ForMember(ent => ent.Products, opt => opt.Ignore());

    CreateMap<Category, SaveCategoryDto>()
    .ReverseMap()
    .ForMember(ent => ent.Products, opt => opt.Ignore());

  }
}
