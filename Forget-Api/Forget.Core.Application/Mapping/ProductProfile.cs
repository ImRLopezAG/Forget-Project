using AutoMapper;
using Forget.Core.Domain;
using Forget.Core.Service.Dtos.Product;

namespace Forget.Core.Application.Mapping;

public class ProductProfile: Profile
{
  public ProductProfile()
  {
    CreateMap<Product, ProductDto>()
    .ReverseMap()
    .ForMember(ent => ent.Category, opt => opt.Ignore())
    .ForMember(ent => ent.Photos, opt => opt.Ignore());

    CreateMap<Product, SaveProductDto>()
    .ForMember(dto => dto.Id, opt => opt.Ignore())
    .ReverseMap()
    .ForMember(ent => ent.Category, opt => opt.Ignore())
    .ForMember(ent => ent.Photos, opt => opt.Ignore());
  }
}
