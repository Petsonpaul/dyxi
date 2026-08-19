import Link from "next/link";

export const metadata = {
  title: "How It Works | Dyxi",
};

export default function Technology() {
  return (
    <>
      {/* Page banner */}
      <section className="page_banner">
        <div className="container">
          <div
            className="content_wrapper"
            style={{
              backgroundImage:
                "url('/assets/images/banner/page_banner_image.png')",
            }}
          >
            <div className="row align-items-center">
              <div className="col col-lg-8">
                <ul className="breadcrumb_nav unordered_list">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Pages</li>
                  <li>How It Works</li>
                </ul>
                <h1 className="page_title">
                  How Dyxi Works
                </h1>
                <p className="page_description">
                  A simple look at how Dyxi turns everyday play into
                  personalised learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ANTT */}
      <section className="courses_info_section section_space_lg pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-6">
              <div className="image_widget">
                <img
                  src="/assets/images/about/antt1.jpg"
                  alt="Dyxi"
                />
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="content_wrap ps-lg-3">
                <div className="section_heading">
                  <h2 className="heading_text">Personalised by ANTT</h2>
                  <p className="heading_description mb-0">
                    ANTT is the engine behind Dyxi&apos;s personalisation.
                    It observes how a child engages with learning
                    activities and uses those patterns to shape what they
                    see next — so the experience adapts to the child,
                    instead of the child having to adapt to it.
                  </p>
                </div>
                <ul className="info_list unordered_list_block">
                  <li>
                    <i className="fas fa-square"></i>
                    <span>Observes engagement and activity patterns</span>
                  </li>
                  <li>
                    <i className="fas fa-square"></i>
                    <span>
                      Personalises activities to how each child learns
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-square"></i>
                    <span>
                      Shares progress with parents and education
                      consultants
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="expect_from_course section_space_lg">
        <div className="container">
          <div className="section_heading text-center">
            <h2 className="heading_text">From First Play to Ongoing Progress</h2>
            <p className="heading_description mb-0">
              Four simple steps, from your child&apos;s first session to
              tracking their progress over time.
            </p>
          </div>
          <div className="row">
            <div className="col col-md-6 col-lg-3">
              <div className="service_item" data-magnetic>
                <div className="item_icon">
                  <img
                    src="/assets/images/service/icon_physics.svg"
                    alt="Dyxi"
                  />
                </div>
                <div className="item_content">
                  <h3 className="item_title">1. Learn Through Play</h3>
                  <p className="mb-0">
                    A child learns through friendly, engaging activities in
                    the Dyxi mobile app.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-md-6 col-lg-3">
              <div className="service_item" data-magnetic>
                <div className="item_icon">
                  <img
                    src="/assets/images/service/icon_communication.svg"
                    alt="Dyxi"
                  />
                </div>
                <div className="item_content">
                  <h3 className="item_title">2. Dyxi Observes</h3>
                  <p className="mb-0">
                    Dyxi observes how the child interacts with each
                    activity — timing, accuracy, repeated attempts and
                    engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-md-6 col-lg-3">
              <div className="service_item" data-magnetic>
                <div className="item_icon">
                  <img
                    src="/assets/images/service/icon_academic_cap.svg"
                    alt="Dyxi"
                  />
                </div>
                <div className="item_content">
                  <h3 className="item_title">3. Learning Is Personalised</h3>
                  <p className="mb-0">
                    These patterns help personalise the activities and
                    pacing your child sees next.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-md-6 col-lg-3">
              <div className="service_item" data-magnetic>
                <div className="item_icon">
                  <img
                    src="/assets/images/service/icon_diploma.svg"
                    alt="Dyxi"
                  />
                </div>
                <div className="item_content">
                  <h3 className="item_title">4. Parents See Progress</h3>
                  <p className="mb-0">
                    Parents and education consultants view progress
                    together through the web platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-lg-8">
              <p className="text-center mb-0" style={{ opacity: 0.75 }}>
                Dyxi observes learning and activity patterns to support and
                personalise learning. It is not a medical or diagnostic
                tool, and does not diagnose dyslexia, ADHD or any other
                condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="advertisement_section bg_dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-8">
              <div className="section_heading mb-lg-0">
                <h2 className="heading_text text-white">
                  Curious how Dyxi could work for your family?
                </h2>
                <p className="heading_description mb-0 text-white">
                  Get in touch and we&apos;ll walk you through it.
                </p>
                <div className="btn_wrap pb-0">
                  <Link className="btn btn_primary" href="/contact">
                    <span>
                      <small>Get in Touch</small>
                      <small>Get in Touch</small>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
