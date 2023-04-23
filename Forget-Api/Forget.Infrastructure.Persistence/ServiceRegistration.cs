using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forget.Core.Service.Core;
using Forget.Core.Service.Repositories;
using Forget.Infrastructure.Persistence.Context;
using Forget.Infrastructure.Persistence.Core;
using Forget.Infrastructure.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Forget.Infrastructure.Persistence;

public static class ServiceRegistration {
    public static void AddPersistenceInfrastructure(this IServiceCollection services, IConfiguration configuration) {
      #region DbContext
      if (configuration.GetValue<bool>("UseInMemoryDatabase")) {
        services.AddDbContext<ForgetContext>(options => options.UseInMemoryDatabase("ApplicationDb"));
      } else {
        services.AddDbContext<ForgetContext>(options =>
        options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"),
        m => m.MigrationsAssembly(typeof(ForgetContext).Assembly.FullName)));
      }
      #endregion
      #region Repositories
      services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
      services.AddScoped<IProductRepository, ProductRepository>();
      services.AddScoped<ICategoryRepository, CategoryRepository>();
      services.AddScoped<IPhotoRepository, PhotoRepository>();
      #endregion
    }
  }