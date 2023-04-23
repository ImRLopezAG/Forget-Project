using Forget.Core.Service.Contracts;
using Forget.Core.Service.Dtos.Account;
using Forget.Core.Service.Services;

namespace Forget.Core.Application.Services;

public class UserService : IUserService {
  public Task<AuthenticationResponse> AuthenticateAsync(AuthenticationRequest request) {
    throw new NotImplementedException();
  }

  public Task ChangeStatus(string id) {
    throw new NotImplementedException();
  }

  public Task<string> ConfirmAccountAsync(string userId, string token) {
    throw new NotImplementedException();
  }

  public Task<ForgotPasswordResponse> ForgotPasswordAsync(ForgotPasswordRequest request, string origin) {
    throw new NotImplementedException();
  }

  public Task<IEnumerable<AccountDto>> GetAll() {
    throw new NotImplementedException();
  }

  public Task<AccountDto> GetById(string id) {
    throw new NotImplementedException();
  }
  Task<SaveAccountDto> IAccountService.GetEntity(string id) {
    throw new NotImplementedException();
  }
  public Task<RegisterResponse> RegisterUserAsync(RegisterRequest request, string origin) {
    throw new NotImplementedException();
  }

  public Task<ResetPasswordResponse> ResetPasswordAsync(ResetPasswordRequest request) {
    throw new NotImplementedException();
  }

  public Task SignOutAsync() {
    throw new NotImplementedException();
  }

  public Task<RegisterResponse> UpdateUserAsync(RegisterRequest request) {
    throw new NotImplementedException();
  }


}
