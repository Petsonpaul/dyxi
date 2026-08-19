import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero_banner style_1">
        <div className="container">
          <div className="content_wrap">
            <div className="row">
              <div className="col col-lg-7">
                <h1 className="banner_small_title">
                  Learning support for children ages 3–9
                </h1>
                <h2 className="banner_big_title">
                  Learning should feel easier.
                </h2>
                <p className="banner_description">
                  Dyxi helps children build stronger learning skills through
                  personalised activities, while giving parents a clearer
                  view of their child&apos;s progress.
                </p>
                <ul
  className="banner_btns_group unordered_list"
  style={{
    marginBottom: "0",
  }}
>
  <li>
    <Link className="btn btn_primary" href="/signup">
      <span>
        <small>Get Started</small>
        <small>Get Started</small>
      </span>
    </Link>
  </li>

  <li>
    <Link className="btn border_dark" href="/technology">
      <span>
        <small>See How It Works</small>
        <small>See How It Works</small>
      </span>
    </Link>
  </li>
</ul>

<div
  className="hero_android_download"
  style={{
    marginTop: "30px",
  }}
>
  <a
    href="#"
    aria-label="Get it on Google Play"
    style={{
      display: "inline-block",
      lineHeight: 0,
    }}
  >
    <img
      src="/assets/images/google.png"
      alt="Get it on Google Play"
      style={{
        width: "185px",
        maxWidth: "100%",
        height: "auto",
        display: "block",
      }}
    />
  </a>
</div>
              </div>
              <div className="col col-lg-5">
                <div className="banner_image_1 decoration_wrap">
                  <div className="image_wrap">
                    <img
                      src="/assets/images/logo/dyxi-logo.jpg"
                      alt="Dyxi"
                    />
                  </div>
                  <div className="deco_item shape_img_1" data-parallax='{"y" : -130, "smoothness": 6}'>
                    <img src="/assets/images/shape/shape_img_1.png" alt="Dyxi" />
                  </div>
                  <div className="deco_item shape_img_2" data-parallax='{"y" : 160, "smoothness": 6}'>
                    <img src="/assets/images/shape/shape_img_2.png" alt="Dyxi" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Dyxi */}
      <section className="expect_from_course section_space_lg">
        <div className="container">
          <div className="row">
            <div className="col col-lg-6">
              <div className="section_heading">
                <h2 className="heading_text">What Is Dyxi?</h2>
                <p className="heading_description mb-0">
                  Dyxi is a learning platform for young children, especially
                  those who may need extra support with reading, attention
                  or general learning skills. Children learn through
                  activities in the Dyxi mobile app, while parents and
                  education consultants follow their progress through the
                  web platform.
                </p>
              </div>

              <div className="image_widget">
                <img src="/assets/images/about/aboutdyxi.jpg" alt="Dyxi" />
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="row">
                <div className="col col-md-6">
                  <div className="service_item" data-magnetic>
                    <div className="item_icon">
                      <img
                        src="/assets/images/service/icon_academic_cap.svg"
                        alt="Dyxi"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Built for Ages 3–9</h3>
                      <p className="mb-0">
                        Activities and pacing are designed for early
                        learners and adjust as your child grows.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className="service_item" data-magnetic>
                    <div className="item_icon">
                      <img
                        src="/assets/images/service/icon_physics.svg"
                        alt="Dyxi"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Learning Through Play</h3>
                      <p className="mb-0">
                        Children learn through engaging activities in the
                        Dyxi mobile app, built around how they respond and
                        engage.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className="service_item" data-magnetic>
                    <div className="item_icon">
                      <img
                        src="/assets/images/service/icon_communication.svg"
                        alt="Dyxi"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Personalised for Them</h3>
                      <p className="mb-0">
                        Activities adapt to each child&apos;s learning
                        patterns, so the experience fits the child.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className="service_item" data-magnetic>
                    <div className="item_icon">
                      <img
                        src="/assets/images/service/icon_diploma.svg"
                        alt="Dyxi"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Clear Progress for Parents</h3>
                      <p className="mb-0">
                        Follow your child&apos;s activity and progress over
                        time through the Dyxi web platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="advertisement_section bg_dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-6">
              <div className="section_heading mb-lg-0">
                <h2 className="heading_text text-white">
                  How Dyxi Works
                </h2>
                <p className="heading_description mb-0 text-white">
                  As your child plays and learns in the app, Dyxi observes
                  patterns — like response timing, accuracy and repeated
                  attempts — and uses them to personalise what comes next.
                  Parents and education consultants can follow the results
                  through the web platform.
                </p>
                <div className="btn_wrap pb-0">
                  <Link className="btn btn_primary" href="/technology">
                    <span>
                      <small>Learn More</small>
                      <small>Learn More</small>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="row images_group decoration_wrap">
                <div className="col col-md-6 col-sm-6">
                  <div className="image_wrap">
                    <img
                      src="/assets/images/advertisement/advert1.jpg"
                      alt="Dyxi"
                    />
                  </div>
                  <div className="image_wrap">
                    <img
                      src="/assets/images/advertisement/advert2.jpg"
                      alt="Dyxi"
                    />
                  </div>
                </div>
                <div className="col col-md-6 col-sm-6">
                  <div className="image_wrap">
                    <img
                      src="/assets/images/advertisement/advert3.jpg"
                      alt="Dyxi"
                    />
                  </div>
                  <div className="image_wrap">
                    <img
                      src="/assets/images/advertisement/advert4.jpg"
                      alt="Dyxi"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="courses_info_section section_space_lg">
        <div className="container">
          <div className="section_heading text-center">
            <h2 className="heading_text">Who Dyxi Is For</h2>
            <p className="heading_description mb-0">
              Built for children, and for the parents and education
              consultants who support them.
            </p>
          </div>
          <div className="row">
            <div className="col col-md-4">
              <div className="service_item" data-magnetic>
                <div className="item_icon">
                  <img
                    src="/assets/images/service/icon_academic_cap.svg"
                    alt="Dyxi"
                  />
                </div>
                <div className="item_content">
                  <h3 className="item_title">Parents</h3>
                  <p className="mb-0">
                    Understand how your child is progressing, without
                    needing to untangle complicated educational
                    terminology.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-md-4">
              <div className="service_item" data-magnetic>
                <div className="item_icon">
                  <img
                    src="/assets/images/service/icon_communication.svg"
                    alt="Dyxi"
                  />
                </div>
                <div className="item_content">
                  <h3 className="item_title">Children</h3>
                  <p className="mb-0">
                    Your child learns through friendly, engaging activities
                    in the Dyxi mobile app.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-md-4">
              <div className="service_item" data-magnetic>
                <div className="item_icon">
                  <img
                    src="/assets/images/service/icon_diploma.svg"
                    alt="Dyxi"
                  />
                </div>
                <div className="item_content">
                  <h3 className="item_title">
                    Education Consultants
                  </h3>
                  <p className="mb-0">
                    Monitor a child&apos;s learning activity and progress
                    through the Dyxi web platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="newslatter_section">
        <div className="container">
          <div
            className="newslatter_box"
            style={{
              backgroundImage: "url('/assets/images/shape/shape_img_6.svg')",
            }}
          >
            <div className="row justify-content-center">
              <div className="col col-lg-6">
                <div className="section_heading text-center">
                  <h2 className="heading_text">
                    Ready to see Dyxi for your family?
                  </h2>
                  <p className="heading_description mb-0">
                    Leave your email and we&apos;ll reach out with updates on
                    Dyxi and how to get started.
                  </p>
                </div>
                <form action="#">
                  <div className="form_item m-0">
                    <input type="email" name="email" placeholder="Your Email" />
                    <button type="submit" className="btn btn_dark">
                      <span>
                        <small>Notify Me</small>
                        <small>Notify Me</small>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}