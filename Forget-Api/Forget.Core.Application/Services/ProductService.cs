using AutoMapper;
using Forget.Core.Application.Core;
using Forget.Core.Domain;
using Forget.Core.Service.Contracts;
using Forget.Core.Service.Dtos.Product;
using Forget.Core.Service.Repositories;

namespace Forget.Core.Application.Services;

public class ProductService : GenericService<ProductDto, SaveProductDto, Product>, IProductService {
  private readonly IProductRepository _repository;
  private readonly IPhotoRepository _photoRepository;
  private readonly IMapper _mapper;
  public ProductService(IProductRepository repository, IMapper mapper, IPhotoRepository photoRepository) : base(repository, mapper) {
    _repository = repository;
    _mapper = mapper;
    _photoRepository = photoRepository;
  }

  public async Task SaveProductPhoto(Photo photo) => await _photoRepository.Save(photo);
}
