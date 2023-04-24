using Forget.Infrastructure.Identity.Entities;
using Forget.Infrastructure.Identity.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using System.Text;

namespace Forget.Infrastructure.Identity.Services;

public class RequestService : IRequestService {
  private readonly UserManager<ApplicationUser> _userManager;

  public RequestService(UserManager<ApplicationUser> userManager) {
    _userManager = userManager;
  }


  public async Task<string> SendVerificationEmail(ApplicationUser user, string origin) {
    var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
    code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
    var route = "User/ConfirmEmail";
    var Uri = new Uri(string.Concat($"{origin}/", route));
    var verificationUri = QueryHelpers.AddQueryString(Uri.ToString(), "userId", user.Id);
    verificationUri = QueryHelpers.AddQueryString(verificationUri, "token", code);

    return verificationUri;
  }
  public async Task<string> SendForgotPassword(ApplicationUser user, string origin) {
    var code = await _userManager.GeneratePasswordResetTokenAsync(user);
    code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
    var route = "User/ResetPassword";
    var Uri = new Uri(string.Concat($"{origin}/", route));
    var verificationUri = QueryHelpers.AddQueryString(Uri.ToString(), "token", code);

    return verificationUri;
  }
}
