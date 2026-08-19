"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="site_header site_header_1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-3 col-5">
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
 </div>
          <div className="col col-lg-6 col-2">
            <nav className="main_menu navbar navbar-expand-lg">
              <div
                className="main_menu_inner collapse navbar-collapse justify-content-center"
                id="main_menu_dropdown"
              >
                <ul className="main_menu_list unordered_list_center">
                  <li className="active">
                    <Link className="nav-link" href="/">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link className="nav-link" href="/about">
                      About
                    </Link>
                  </li>

                  <li className="dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      id="product_submenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Product
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="product_submenu">
                      <li>
                        <Link href="/technology">How It Works</Link>
                      </li>
                      <li>
                        <Link href="/who-its-for">Who It&apos;s For</Link>
                      </li>
                      <li>
                        <Link href="/faq">F.A.Q.</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link className="nav-link" href="/blog">
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link className="nav-link" href="/pricing">
                      Pricing
                    </Link>
                  </li>

                  <li>
                    <Link className="nav-link" href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col col-lg-3 col-5">
            <ul className="header_btns_group unordered_list_end">
              <li>
                <button
                  className="mobile_menu_btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main_menu_dropdown"
                  aria-controls="main_menu_dropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-bars"></i>
                </button>
              </li>
              <li>
                <Link className="btn border_dark" href="/login">
                  <span>
                    <small>Login</small>
                    <small>Login</small>
                  </span>
                </Link>
              </li>
              <li>
                <Link className="btn btn_dark" href="/signup">
                  <span>
                    <small>Sign Up</small>
                    <small>Sign Up</small>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
