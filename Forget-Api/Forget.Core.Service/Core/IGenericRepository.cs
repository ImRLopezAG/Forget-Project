using Forget.Core.Domain.Core;

namespace Forget.Core.Service.Core;

public interface IGenericRepository<TEntity> where TEntity : BaseEntity {
  Task<IEnumerable<TEntity>> GetAll();
  Task<TEntity> GetEntity(string Id);
  Task<TEntity> Save(TEntity Entity);
  Task<TEntity> Update(TEntity Entity);
  Task Delete(TEntity Entity);
}
