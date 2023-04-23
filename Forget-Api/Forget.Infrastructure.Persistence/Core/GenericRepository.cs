using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forget.Core.Domain.Core;
using Forget.Core.Service.Core;
using Forget.Infrastructure.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace Forget.Infrastructure.Persistence.Core;

public class GenericRepository<TEntity>: IGenericRepository<TEntity> where TEntity : BaseEntity
{
  private readonly ForgetContext _context;

  public GenericRepository(ForgetContext context) {
    _context = context;
  }
    public virtual async Task<IEnumerable<TEntity>> GetAll() => await _context.Set<TEntity>().OrderByDescending(x => x.CreatedAt).ToListAsync();
  public virtual async Task<TEntity> GetEntity(string id) => await _context.Set<TEntity>().FindAsync(id);


  public virtual async Task<TEntity> Save(TEntity entity) {
    await _context.Set<TEntity>().AddAsync(entity);
    await _context.SaveChangesAsync();
    return entity;
  }

  public virtual async Task<TEntity> Update(TEntity entity) {
    var entry = await _context.Set<TEntity>().FindAsync(entity.Id);
    _context.Entry(entry).CurrentValues.SetValues(entity);
    await _context.SaveChangesAsync();
    return entry;
  }

  public virtual async Task Delete(TEntity entity) {
    _context.Set<TEntity>().Remove(entity);
    await _context.SaveChangesAsync();
  }
}
