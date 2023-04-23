using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forget.Core.Service.Contracts;
using Forget.Core.Service.Dtos.Account;
using Forget.Presentation.WebApi.Core;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Forget.Presentation.WebApi.Controllers;
[SwaggerTag("Authentication Management")]
public class AuthenticateController: BaseApiController
{
  private readonly IUserService _userService;

  public AuthenticateController(IUserService userService)
  {
    _userService = userService;
  }

  [HttpPost("LogIn")]
  [ProducesResponseType(StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  [SwaggerOperation(
    Summary = "Authenticates a user",
    Description = "Authenticates a user"
  )]
  public async Task<IActionResult> Auth([FromBody] AuthenticationRequest model)
  {
    var response = await _userService.AuthenticateAsync(model);

    if (response == null)
      return BadRequest(new { message = "Username or password is incorrect" });

    return Ok(response);
  }

  [HttpPost("Logout")]
  [ProducesResponseType(StatusCodes.Status204NoContent)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  [SwaggerOperation(
    Summary = "Logout a user",
    Description = "Logout a user"
  )]
  public async Task<IActionResult> Auth()
  {
    await _userService.SignOutAsync();
    HttpContext.Response.Cookies.Delete("token");
    HttpContext.Response.Cookies.Delete("Authorization");
    return NoContent();
  }
}

// Todo: Add the UserController with the  Create and update endpoint