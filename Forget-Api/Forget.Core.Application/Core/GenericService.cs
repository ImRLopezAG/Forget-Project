using AutoMapper;
using Forget.Core.Domain.Core;
using Forget.Core.Service.Core;
using Forget.Core.Service.Core.Models;

namespace Forget.Core.Application.Core;

public class GenericService<Entity, SaveEntity, TEntity> : IGenericService<Entity, SaveEntity, TEntity> where Entity : Base where SaveEntity : Base where TEntity : BaseEntity {
  private readonly IGenericRepository<TEntity> _repository;
  private readonly IMapper _mapper;

  public GenericService(IGenericRepository<TEntity> repository, IMapper mapper) {
    _repository = repository;
    _mapper = mapper;
  }

  public virtual async Task<IEnumerable<Entity>> GetAll() {
    var query = from entity in await _repository.GetAll()
                select _mapper.Map<Entity>(entity);

    return query.ToList();
  }

  public virtual async Task<Entity> GetById(string id) {
    var entity = await _repository.GetEntity(id);
    return _mapper.Map<Entity>(entity);
  }

  public virtual async Task<SaveEntity> GetEntity(string id) {
    var entity = await _repository.GetEntity(id);
    return _mapper.Map<SaveEntity>(entity);
  }

  public virtual async Task<SaveEntity> Save(SaveEntity model) {
    try {
      var entity = _mapper.Map<TEntity>(model);
      await _repository.Save(entity);
      return _mapper.Map<SaveEntity>(entity);
    } catch (Exception ex) {
      throw new Exception(ex.Message);
    }
  }

  public virtual async Task<SaveEntity> Edit(SaveEntity model) {
    try {
      var entity = _mapper.Map<TEntity>(model);
      var updated = await _repository.Update(entity);
      return _mapper.Map<SaveEntity>(updated);
    } catch (Exception ex) {
      throw new Exception(ex.Message);
    }
  }

  public virtual async Task Delete(string id) {
    try {
      var entity = await _repository.GetEntity(id);
      await _repository.Delete(entity);
    } catch (Exception ex) {
      throw new Exception(ex.Message);
    }
  }
}
