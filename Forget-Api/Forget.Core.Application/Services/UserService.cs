using Forget.Core.Service.Contracts;
using Forget.Core.Service.Dtos.Account;
using Forget.Core.Service.Services;

namespace Forget.Core.Application.Services;

public class UserService : IUserService {
  private readonly IAccountService _accountService;

  public UserService(IAccountService accountService) {
    _accountService = accountService;
  }
  public async Task<AuthenticationResponse> AuthenticateAsync(AuthenticationRequest request) => await _accountService.AuthenticateAsync(request);

  public async Task ChangeStatus(string id) => await _accountService.ChangeStatus(id);

  public async Task<string> ConfirmAccountAsync(string userId, string token) => await _accountService.ConfirmAccountAsync(userId, token);

  public async Task Delete(string id) => await _accountService.Delete(id);

  public async Task<ForgotPasswordResponse> ForgotPasswordAsync(ForgotPasswordRequest request, string origin) => await _accountService.ForgotPasswordAsync(request, origin);

  public async Task<IEnumerable<AccountDto>> GetAll() => await _accountService.GetAll();
  public async Task<AccountDto> GetById(string id) => await _accountService.GetById(id);
  public async Task<SaveAccountDto> GetEntity(string id) => await _accountService.GetEntity(id);
  public async Task<RegisterResponse> RegisterUserAsync(RegisterRequest request, string origin) => await _accountService.RegisterUserAsync(request, origin);

  public async Task<ResetPasswordResponse> ResetPasswordAsync(ResetPasswordRequest request) => await _accountService.ResetPasswordAsync(request);

  public async Task SignOutAsync() => await _accountService.SignOutAsync();

  public async Task<RegisterResponse> UpdateUserAsync(RegisterRequest request) => await _accountService.UpdateUserAsync(request);

}
