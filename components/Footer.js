import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site_footer">
      <div className="footer_widget_area">
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-sm-6">
              <div className="footer_widget">
                <div className="site_logo">
  <Link
    className="site_link"
    href="/"
    style={{
      display: "inline-flex",
      alignItems: "center",
    }}
  >
    <img
      src="/assets/images/dyxi_logo.png"
      alt="Dyxi"
      style={{
        width: "100px",
        height: "auto",
        display: "block",
      }}
    />
  </Link>
</div>
                <p>
                  Dyxi helps children ages 3–12 build stronger learning
                  skills through personalised activities, while giving
                  parents a clearer view of their progress.
                </p>
                <ul className="social_links unordered_list">
                  <li>
                    <a href="#!">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-5">
              <div className="row">
                <div className="col col-md-6 col-sm-6">
                  <div className="footer_widget">
                    <h3 className="footer_widget_title">Company</h3>
                    <ul className="page_list unordered_list_block">
                      <li>
                        <Link href="/about">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">About</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/technology">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">How It Works</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/who-its-for">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">Who It&apos;s For</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col col-md-6 col-sm-6">
                  <div className="footer_widget">
                    <h3 className="footer_widget_title">Support</h3>
                    <ul className="page_list unordered_list_block">
                      <li>
                        <Link href="/contact">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">Contact Us</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">FAQ</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-6">
              <div className="footer_widget">
                <h3 className="footer_widget_title">Get in touch</h3>
                <p>
                  Have a question about Dyxi or want to partner with us? Reach
                  out — we&apos;d love to hear from you.
                </p>
                <Link className="btn btn_dark" href="/contact">
                  <span>
                    <small>Contact Us</small>
                    <small>Contact Us</small>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_widget">
        <div className="container">
          <p className="copyright_text text-center mb-0">
            © <b>Dyxi</b> {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
