using Forget.Core.Application.Exceptions;
using Forget.Core.Application.Wrappers;
using System.Net;
using System.Text.Json;

namespace Forget.Presentation.WebApi.Middleware;

public class ErrorHandlerMiddleware {
  private readonly RequestDelegate _next;

  public ErrorHandlerMiddleware(RequestDelegate next) {
    _next = next;
  }

  public async Task Invoke(HttpContext context) {
    try {
      await _next(context);
    } catch (Exception error) {
      var response = context.Response;
      response.ContentType = "application/json";
      var responseModel = new Response<string>() { Succeeded = false, Message = error?.Message };
      response.StatusCode = error switch {
        ApiException e => e.ErrorCode switch {
          ( int )HttpStatusCode.BadRequest => ( int )HttpStatusCode.BadRequest,
          ( int )HttpStatusCode.InternalServerError => ( int )HttpStatusCode.InternalServerError,
          ( int )HttpStatusCode.NotFound => ( int )HttpStatusCode.NotFound,
          _ => ( int )HttpStatusCode.InternalServerError,// unhandled error
        },// custom application error
        KeyNotFoundException => ( int )HttpStatusCode.NotFound,// not found error
        _ => ( int )HttpStatusCode.InternalServerError,// unhandled error
      };
      var result = JsonSerializer.Serialize(responseModel);
      await response.WriteAsync(result);
    }
  }
}
