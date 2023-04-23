using Forget.Presentation.WebApi.Middleware;
using Swashbuckle.AspNetCore.SwaggerUI;

namespace Forget.Presentation.WebApi.Extensions;
public static class AppExtensions {
  public static void UseSwaggerExtension(this IApplicationBuilder app) {
    app.UseSwagger();
    app.UseSwaggerUI(options => {
      options.SwaggerEndpoint("/swagger/v1/swagger.json", "Forget API");
      options.DefaultModelRendering(ModelRendering.Model);
      options.DocumentTitle = "Forget API";
    });
  }
  public static void UseErrorHandlingMiddleware(this IApplicationBuilder app) {
    app.UseMiddleware<ErrorHandlerMiddleware>();
  }
}

