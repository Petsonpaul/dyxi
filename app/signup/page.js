import Link from "next/link";

export const metadata = {
  title: "Sign Up | Dyxi",
};

export default function SignupPage() {
  return (
    <>
<section className="register_section section_space_lg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col col-lg-5">
                <h1 className="register_heading text-center">Create Account</h1>
                <p className="register_heading_description text-center">
                  Already have account? <a href="/login">Login</a>
                </p>
                <form action="#">
                  <div className="register_form signup_login_form">
                    <div className="form_item">
                      <input type="email" name="email" placeholder="Email"/>
                    </div>
                    <div className="form_item">
                      <input type="password" name="createpassword" placeholder="Create Password"/>
                    </div>
                    <div className="form_item">
                      <input type="password" name="confirmpassword" placeholder="Confirm Password"/>
                    </div>
                    <button type="submit" className="btn btn_dark mb-5">
                      <span>
                        <small>Signup Now</small>
                        <small>Signup Now</small>
                      </span>
                    </button>

                    <p className="text-center">Or sign up with</p>

                    <div className="d-flex flex-column gap-3">
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
