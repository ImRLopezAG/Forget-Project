using Forget.Core.Domain.Core;
using Forget.Core.Service.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace Forget.Core.Service.Core;

public interface IGenericController<TDto, TSaveDto, TEntity> where TDto : Base where TSaveDto : Base where TEntity : BaseEntity {
  Task<ActionResult> List();
  Task<ActionResult> GetById([FromQuery] string id);
  Task<ActionResult> Create([FromBody] TSaveDto dto);
  Task<ActionResult> Update([FromBody] TSaveDto dto);
  Task<ActionResult> Delete([FromQuery] string id);
}