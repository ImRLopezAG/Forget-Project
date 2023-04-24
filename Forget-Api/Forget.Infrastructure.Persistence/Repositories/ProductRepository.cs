using Forget.Core.Domain;
using Forget.Core.Service.Repositories;
using Forget.Infrastructure.Persistence.Context;
using Forget.Infrastructure.Persistence.Core;

namespace Forget.Infrastructure.Persistence.Repositories;

public class ProductRepository : GenericRepository<Product>, IProductRepository {
  private readonly ForgetContext _context;
  public ProductRepository(ForgetContext context) : base(context) => _context = context;
}
