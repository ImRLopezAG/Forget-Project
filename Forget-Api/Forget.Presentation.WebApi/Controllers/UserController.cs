using Forget.Core.Service.Contracts;
using Forget.Core.Service.Dtos.Account;
using Forget.Presentation.WebApi.Core;
using Forget.Presentation.WebApi.Helpers;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Forget.Presentation.WebApi.Controllers;
[SwaggerTag("User management")]
public class UserController : BaseApiController {
  private readonly IUserService _userService;

  public UserController(IUserService userService) {
    _userService = userService;
  }

  [HttpGet]
  [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<AccountDto>))]
  [ProducesResponseType(StatusCodes.Status401Unauthorized)]
  [ProducesResponseType(StatusCodes.Status403Forbidden)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  [SwaggerOperation(
    Summary = "Get all users",
    Description = "Get all users"
  )]
  public async Task<ActionResult> List() {
    var result = await _userService.GetAll();
    return Ok(result);
  }

  [HttpGet("{id}")]
  [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(AccountDto))]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  [SwaggerOperation(
    Summary = "Get user by id",
    Description = "Get user by id"
  )]
  public async Task<ActionResult> Get(string id) {
    var result = await _userService.GetById(id);
    return Ok(result);
  }

  [HttpPost]
  [ProducesResponseType(StatusCodes.Status201Created)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  [SwaggerOperation(
    Summary = "Create user",
    Description = "Create user"
  )]
  public async Task<ActionResult> Create([FromForm] RegisterRequest request) {
    var origin = Request.Headers["origin"];
    var result = await _userService.RegisterUserAsync(request, origin);
    var user = await _userService.GetEntity(result.UserId);
    user.Image = ManageFile.Upload(request.ImageFile, user.Id);
    return Ok(result);
  }

  [HttpPut]
  [ProducesResponseType(StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  [ProducesResponseType(StatusCodes.Status401Unauthorized)]
  [ProducesResponseType(StatusCodes.Status403Forbidden)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  [SwaggerOperation(
    Summary = "Update user",
    Description = "Update user"
  )]
  public async Task<ActionResult> Update([FromForm] RegisterRequest request) {
    var user = await _userService.GetEntity(request.Id);
    user.Image = ManageFile.Upload(request.ImageFile, user.Id, true, user.Image);
    var result = await _userService.UpdateUserAsync(request);
    return Ok(result);
  }

  [HttpDelete("{id}")]
  [ProducesResponseType(StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  [ProducesResponseType(StatusCodes.Status401Unauthorized)]
  [ProducesResponseType(StatusCodes.Status403Forbidden)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  [SwaggerOperation(
    Summary = "Delete user",
    Description = "Delete user"
  )]
  public async Task<ActionResult> Delete(string id) {
    await _userService.Delete(id);
    return Ok();
  }


}
