import Link from "next/link";

export const metadata = {
  title: "Login | Dyxi",
};

export default function LoginPage() {
  return (
    <>
<section className="register_section section_space_lg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col col-lg-5">
                <h1 className="register_heading text-center">Account Login</h1>
                <p className="register_heading_description text-center">
                  Please enter your User/Email & Password
                </p>
                <form action="#">
                  <div className="register_form signup_login_form">
                    <div className="form_item">
                      <input type="email" name="email" placeholder="Username or Email"/>
                    </div>
                    <div className="form_item">
                      <input type="password" name="password" placeholder="**********"/>
                    </div>
                    <div className="remenber_forget row mb-3 align-items-center justify-content-between">
                      <div className="col col-6">
                        <div className="checkbox_item mb-0">
                          <input id="checkbox_remenber" type="checkbox"/>
                          <label htmlFor="checkbox_remenber">Remenber me</label>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="forget_password text-end">
                          <a href="#!">Forget Password</a>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn_dark mb-4">
                      <span>
                        <small>Login Now</small>
                        <small>Login Now</small>
                      </span>
                    </button>

                    <p className="text-center">Or continue with</p>

                    <div className="d-flex flex-column gap-3 mb-4">
                      <button type="button" className="btn border_dark w-100">
                        <span>
                          <small><i className="fab fa-google me-2"></i>Continue with Google</small>
                          <small><i className="fab fa-google me-2"></i>Continue with Google</small>
                        </span>
                      </button>
                      <button type="button" className="btn border_dark w-100">
                        <span>
                          <small><i className="fab fa-apple me-2"></i>Continue with Apple</small>
                          <small><i className="fab fa-apple me-2"></i>Continue with Apple</small>
                        </span>
                      </button>
                    </div>

                    <p className="mb-0 text-center">don't have an account? <a href="/signup">Register Here</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
