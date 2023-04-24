using Forget.Core.Domain;
using Forget.Core.Service.Repositories;
using Forget.Infrastructure.Persistence.Context;
using Forget.Infrastructure.Persistence.Core;

namespace Forget.Infrastructure.Persistence.Repositories;

public class CategoryRepository : GenericRepository<Category>, ICategoryRepository {
  private readonly ForgetContext _context;
  public CategoryRepository(ForgetContext context) : base(context) => _context = context;
}