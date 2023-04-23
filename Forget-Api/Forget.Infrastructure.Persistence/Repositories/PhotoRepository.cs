using Forget.Core.Domain;
using Forget.Core.Service.Repositories;
using Forget.Infrastructure.Persistence.Context;
using Forget.Infrastructure.Persistence.Core;

namespace Forget.Infrastructure.Persistence.Repositories;

public class PhotoRepository : GenericRepository<Photo>, IPhotoRepository
{
  private readonly ForgetContext _context;
  public PhotoRepository(ForgetContext context) : base(context) => _context = context;

  public async Task DeleteRange(List<Photo> photos){
    _context.Photos.RemoveRange(photos);
    await _context.SaveChangesAsync();
  }
}