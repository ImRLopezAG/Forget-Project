using Forget.Core.Service.Dtos.Account;

namespace Forget.Core.Service.Services;

public interface IAccountService {
  Task<AuthenticationResponse> AuthenticateAsync(AuthenticationRequest request);
  Task<RegisterResponse> RegisterUserAsync(RegisterRequest request, string origin);
  Task SignOutAsync();
  Task<RegisterResponse> UpdateUserAsync(RegisterRequest request);
  Task<SaveAccountDto> GetEntity(string id);
  Task ChangeStatus(string id);
  Task<IEnumerable<AccountDto>> GetAll();
  Task<AccountDto> GetById(string id);
  Task Delete(string id);
}