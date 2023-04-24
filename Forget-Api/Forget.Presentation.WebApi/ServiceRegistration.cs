using Forget.Core.Service.Controllers;
using Forget.Core.Service.Core;
using Forget.Presentation.WebApi.Controllers;
using Forget.Presentation.WebApi.Core;

namespace Forget.Presentation.WebApi;

public static class ServiceRegistration {
  public static void AddApiControllers(this IServiceCollection services) {
    #region Controllers
    services.AddTransient(typeof(IGenericController<,,>), typeof(GenericController<,,>));
    services.AddTransient<IProductController, ProductController>();
    services.AddTransient<ICategoryController, CategoryController>();
    #endregion
  }
}
