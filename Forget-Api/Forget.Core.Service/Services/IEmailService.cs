using Forget.Core.Service.Dtos;

namespace Forget.Core.Services.Services;

public interface IEmailService {
  Task SendEmail(EmailRequest request);
}
