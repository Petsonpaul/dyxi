import Link from "next/link";

export const metadata = {
  title: "Who It's For | Dyxi",
};

export default function WhoItsFor() {
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
                <h1 className="page_title">Who Dyxi Is For</h1>
                <p className="page_description">
                  Dyxi is built around three people: the child, the parent,
                  and the education consultant supporting them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parents */}
      <section className="courses_info_section section_space_lg pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-6">
              <div className="image_widget">
                <img
                  src="/assets/images/about/parent.jpg"
                  alt="Dyxi"
                />
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="content_wrap ps-lg-3">
                <div className="section_heading">
                  <h2 className="heading_text">For Parents</h2>
                  <p className="heading_description mb-0">
                    You don&apos;t need to be an expert in learning science
                    to understand how your child is doing. Dyxi gives
                    parents a clear, simple view of their child&apos;s
                    activity and progress over time, through the web
                    platform — no complicated educational terminology
                    required.
                  </p>
                </div>
                <ul className="info_list unordered_list_block">
                  <li>
                    <i className="fas fa-square"></i>
                    <span>A simple, ongoing view of progress</span>
                  </li>
                  <li>
                    <i className="fas fa-square"></i>
                    <span>Plain-language updates, not jargon</span>
                  </li>
                  <li>
                    <i className="fas fa-square"></i>
                    <span>Access anytime through the web platform</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Children */}
      <section className="courses_info_section section_space_lg pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-6 order-lg-2">
              <div className="image_widget">
                <img
                  src="/assets/images/about/children.jpg"
                  alt="Dyxi"
                />
              </div>
            </div>
            <div className="col col-lg-6 order-lg-1">
              <div className="content_wrap pe-lg-3">
                <div className="section_heading">
                  <h2 className="heading_text">For Children</h2>
                  <p className="heading_description mb-0">
                    Children interact with Dyxi through the mobile learning
                    app, built for ages 3–9. Activities are friendly,
                    engaging and designed to feel like play, while
                    quietly adapting to how each child learns.
                  </p>
                </div>
                <ul className="info_list unordered_list_block">
                  <li>
                    <i className="fas fa-square"></i>
                    <span>Friendly activities built for young learners</span>
                  </li>
                  <li>
                    <i className="fas fa-square"></i>
                    <span>Learning that feels like play</span>
                  </li>
                  <li>
                    <i className="fas fa-square"></i>
                    <span>Activities that adapt as they grow</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Consultants */}
      <section className="courses_info_section section_space_lg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-6">
              <div className="image_widget">
                <img
                  src="/assets/images/about/consultant.jpg"
                  alt="Dyxi"
                />
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="content_wrap ps-lg-3">
                <div className="section_heading">
                  <h2 className="heading_text">
                    For Education Consultants
                  </h2>
                  <p className="heading_description mb-0">
                    Education consultants can monitor a child&apos;s
                    learning activity and progress through the Dyxi web
                    platform, working alongside parents to support the
                    child&apos;s learning journey.
                  </p>
                </div>
                <ul className="info_list unordered_list_block">
                  <li>
                    <i className="fas fa-square"></i>
                    <span>Ongoing visibility into learning activity</span>
                  </li>
                  <li>
                    <i className="fas fa-square"></i>
                    <span>Shared view alongside parents</span>
                  </li>
                  <li>
                    <i className="fas fa-square"></i>
                    <span>Access through the web platform</span>
                  </li>
                </ul>
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
                    See how Dyxi fits your family
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
