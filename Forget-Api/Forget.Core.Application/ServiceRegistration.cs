using Forget.Core.Application.Core;
using Forget.Core.Application.Services;
using Forget.Core.Service.Contracts;
using Forget.Core.Service.Core;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Forget.Core.Application;

public static class ServiceRegistration {
  public static void AddApplicationServices(this IServiceCollection services) {
    services.AddAutoMapper(Assembly.GetExecutingAssembly());
    #region Services
    services.AddTransient(typeof(IGenericService<,,>), typeof(GenericService<,,>));
    services.AddTransient<IUserService, UserService>();
    services.AddTransient<IProductService, ProductService>();
    services.AddTransient<ICategoryService, CategoryService>();
    #endregion
  }
}