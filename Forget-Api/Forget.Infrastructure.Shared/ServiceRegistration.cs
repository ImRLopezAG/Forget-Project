using Forget.Core.Domain.Settings;
using Forget.Core.Services.Services;
using Forget.Infrastructure.Shared.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Forget.Infrastructure.Shared;
public static class ServiceRegistration {
  public static void AddSharedInfrastructure(this IServiceCollection services, IConfiguration configuration) {
    services.Configure<MailSettings>(configuration.GetSection("MailSettings"));
    services.AddTransient<IEmailService, EmailService>();
  }
}