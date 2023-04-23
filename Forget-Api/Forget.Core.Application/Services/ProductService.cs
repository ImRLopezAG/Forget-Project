using AutoMapper;
using Forget.Core.Application.Core;
using Forget.Core.Domain;
using Forget.Core.Service.Contracts;
using Forget.Core.Service.Core;
using Forget.Core.Service.Dtos.Product;
using Forget.Core.Service.Repositories;

namespace Forget.Core.Application.Services;

public class ProductService : GenericService<ProductDto, SaveProductDto, Product>, IProductService
{
  private readonly IProductRepository _repository;
  private readonly IMapper _mapper;
  public ProductService(IProductRepository repository, IMapper mapper) : base(repository, mapper)
  {
    _repository = repository;
    _mapper = mapper;
  }
}
