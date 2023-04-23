using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forget.Core.Domain.Core;
using Forget.Core.Service.Core.Models;

namespace Forget.Core.Service.Core;

public interface IGenericService<Entity, SaveEntity, TEntity> : IBaseService<Entity> where Entity : Base where SaveEntity : Base where TEntity : BaseEntity {
  Task<SaveEntity> GetEntity(string id);
  Task<SaveEntity> Save(SaveEntity model);
  Task<SaveEntity> Edit(SaveEntity model);
  Task Delete(string id);
}
