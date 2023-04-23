using Forget.Core.Domain.Core;
using Forget.Core.Service.Core;
using Forget.Core.Service.Core.Models;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Forget.Presentation.WebApi.Core;
public class GenericController<TDto, TSaveDto, TEntity> : BaseApiController, IGenericController<TDto, TSaveDto, TEntity> where TDto : Base where TSaveDto : Base where TEntity : BaseEntity {
  private readonly IGenericService<TDto, TSaveDto, TEntity> _service;
  public GenericController(IGenericService<TDto, TSaveDto, TEntity> service) => _service = service;

  [HttpGet]
  [ProducesResponseType(StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status403Forbidden)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  [SwaggerOperation(
    summary: $"Get all entities",
    description: "This endpoint returns all the entities"
  )]
  public async Task<ActionResult> List() {
    var result = await _service.GetAll();
    if (result == null)
      return NotFound("There are no entities");

    return Ok(result);
  }

  [HttpGet("{id}")]
  [ProducesResponseType(StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status403Forbidden)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  [SwaggerOperation(
    summary: $"Get a entity by id",
    description: "The id must be a valid guid and must be in the route"
  )]
  public async Task<ActionResult> GetById([FromQuery] string id) {
    var result = await _service.GetById(id);
    if (result == null)
      return NotFound("There is no entity with this id");

    return Ok(result);
  }

  [HttpPost]
  [ProducesResponseType(StatusCodes.Status201Created)]
  [ProducesResponseType(StatusCodes.Status403Forbidden)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  [SwaggerOperation(
    summary: $"Create a entity",
    description: "The id in the body is not required"
  )]
  public async Task<ActionResult> Create([FromBody] TSaveDto dto) {
    if (!ModelState.IsValid)
      return BadRequest("Invalid data");

    var result = await _service.Save(dto);

    if (result == null)
      return BadRequest("The entity could not be created");

    return StatusCode(201, $"The entity with id {result.Id} was created");
  }

  [HttpPut("{id}")]
  [ProducesResponseType(StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status403Forbidden)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  [SwaggerOperation(
    summary: $"Update a entity",
    description: "The id in the route must be the same as the id in the body"
  )]
  public async Task<ActionResult> Update([FromBody] TSaveDto dto) {
    if (!ModelState.IsValid)
      return BadRequest("Invalid data");

    if (RouteData.Values["id"] == null)
      return BadRequest("The id is required");

    dto.Id = RouteData.Values["id"].ToString();

    var result = await _service.Edit(dto);

    return Ok(result);
  }

  [HttpDelete("{id}")]
  [ProducesResponseType(StatusCodes.Status204NoContent)]
  [ProducesResponseType(StatusCodes.Status403Forbidden)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  [SwaggerOperation(
    summary: $"Delete a entity",
    description: "The id must be a valid guid and must be in the route"
  )]
  public async Task<ActionResult> Delete([FromQuery] string id) {
    var result = await _service.GetEntity(id);
    if (result == null)
      return NotFound("There is no entity with this id");

    await _service.Delete(id);

    return NoContent();
  }
}
