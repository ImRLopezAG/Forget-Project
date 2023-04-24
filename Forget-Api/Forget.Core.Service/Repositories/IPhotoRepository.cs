using Forget.Core.Domain;
using Forget.Core.Service.Core;

namespace Forget.Core.Service.Repositories;

public interface IPhotoRepository : IGenericRepository<Photo> {
  Task DeleteRange(List<Photo> photos);
}
