using Forget.Core.Service.Core.Models;

namespace Forget.Core.Service.Core;

public interface IBaseService<Entity> where Entity : Base {
  Task<IEnumerable<Entity>> GetAll();
  Task<Entity> GetById(string id);
}
