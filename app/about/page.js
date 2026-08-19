import Link from "next/link";

export const metadata = {
  title: "About Dyxi — Making learning more personal",
};

export default function About() {
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
                  <li>About Us</li>
                </ul>
                <h1 className="page_title">About Dyxi</h1>
                <p className="page_description">
                  We believe learning should feel easier — for children,
                  and for the parents supporting them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="courses_info_section section_space_lg pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-6">
              <div className="image_widget">
                <img
                  src="/assets/images/about/about1.jpg"
                  alt="Dyxi"
                />
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="content_wrap ps-lg-3">
                <div className="section_heading">
                  <h2 className="heading_text">Our Mission</h2>
                  <p className="heading_description mb-0">
                    Every child learns differently. For young children who
                    may need extra support with reading, attention or
                    general learning skills, that difference can be hard
                    for parents to see and even harder to support without
                    the right tools. Dyxi exists to make learning more
                    personal, and to give parents clearer visibility into
                    how their child is doing.
                  </p>
                </div>
                <ul className="info_list unordered_list_block">
                  <li>
                    <i className="fas fa-square"></i>
                    <span>
                      Making learning more personal to each child
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-square"></i>
                    <span>
                      Giving parents clearer visibility into progress
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-square"></i>
                    <span>
                      Supporting education professionals with useful,
                      ongoing insight
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="courses_info_section section_space_lg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-6 order-lg-2">
              <div className="image_widget">
                <img
                  src="/assets/images/about/about2.jpg"
                  alt="Dyxi"
                />
              </div>
            </div>
            <div className="col col-lg-6 order-lg-1">
              <div className="content_wrap pe-lg-3">
                <div className="section_heading">
                  <h2 className="heading_text">Our Approach</h2>
                  <p className="heading_description mb-0">
                    Dyxi helps children ages 3–9 build stronger learning
                    skills through personalised activities in our mobile
                    app. As a child plays and learns, Dyxi observes activity
                    and engagement patterns and uses them to shape what the
                    child sees next — so learning fits the child, rather
                    than the other way around. Parents and education
                    consultants can follow that progress over time through
                    the Dyxi web platform, making learning support more
                    accessible for every family.
                  </p>
                </div>
                <div className="btn_wrap pb-0">
                  <Link className="btn btn_dark" href="/technology">
                    <span>
                      <small>See How It Works</small>
                      <small>See How It Works</small>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="policy_section section_space_lg">
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
                    A clear, ongoing view of how your child is progressing
                    — without needing to be an expert in learning science.
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
                    A friendly, engaging mobile learning experience built
                    around how each child learns best.
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
                    Ongoing insight into a child&apos;s learning activity
                    through the web platform, alongside the family.
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
                    Want to bring Dyxi to your family?
                  </h2>
                  <p className="heading_description mb-0">
                    Leave your email and we&apos;ll reach out with updates on
                    Dyxi and how you can get involved.
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
