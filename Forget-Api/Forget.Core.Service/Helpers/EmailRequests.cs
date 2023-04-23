namespace Forget.Core.Service.Helpers;

public static class EmailRequests {
  public static string ConfirmEmail(string name, string lastName, string verificationUri) {
    string body = $@"
    <section
                    style='
                      width: 100%;
                      max-width: 32rem;
                      background: #000000;
                      margin: .8rem auto;
                      padding: .8rem;
                      border-radius: 1rem;
                    '
                  >
                    <div style='text-align: center; color: #3789e7'>
                      <h1 style='font-size: 1.8rem; font-weight: 600'>Social Network App</h1>
                    </div>
                    <hr
                      style='margin: 1.2rem 0; border: 0; border-top: 0.2rem solid #413874'
                    />
                    <div style='padding: 0 1.2rem'>
                      <p style='font-size: 1rem; color: #ffffff;'>
                        Welcome to the Social Network App:<span style='color: #3789e7; font-weight: 500'> {name} {lastName}</span>
                      </p>
                      <div
                      style='display: flex; justify-content: center; align-items: center'
                    >
                      <a
                        style='
                          display: block;
                          width: 100%;
                          padding: 0.8rem;
                          border-radius: 5px;
                          text-decoration: none;
                          text-align: center;
                          color: #fff;
                          font-size: 1.8rem;
                          font-weight: 600;
                          background: linear-gradient(to right, #413874 0%, #6375db 100%);
                          transition: 0.5s;
                        'transition: 0.5s;                        
                        href='{verificationUri}'
                        >confirm your user</a
                      >
                    </div>
                  </div>
                </section>
    ";
    return body;
  }

  public static string ResetPassword(string userName, string verificationUri) {
    string body = $@"
    <section
                    style='
                      width: 100%;
                      max-width: 32rem;
                      background: #000000;
                      margin: .8rem auto;
                      padding: .8rem;
                      border-radius: 1rem;
                    '
                  >
                    <div style='text-align: center; color: #3789e7'>
                      <h1 style='font-size: 1.8rem; font-weight: 600'>Social Network App</h1>
                    </div>
                    <hr
                      style='margin: 1.2rem 0; border: 0; border-top: 0.2rem solid #413874'
                    />
                    <div style='padding: 0 1.2rem'>
                      <p style='font-size: 1rem; color: #ffffff;'>
                        Hi:<span style='color: #3789e7; font-weight: 500'> {userName}</span> you have requested to reset your password
                      </p>
                      <div
                      style='display: flex; justify-content: center; align-items: center'
                    >
                      <a
                        style='
                          display: block;
                          width: 100%;
                          padding: 0.8rem;
                          border-radius: 5px;
                          text-decoration: none;
                          text-align: center;
                          color: #fff;
                          font-size: 1.8rem;
                          font-weight: 600;
                          background: linear-gradient(to right, #413874 0%, #6375db 100%);
                          transition: 0.5s;
                        'transition: 0.5s;                        
                        href='{verificationUri}'
                        >Reset your password</a
                      >
                    </div>
                  </div>
                </section>
    ";
    return body;
  }
}