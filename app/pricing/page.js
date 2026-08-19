import Link from "next/link";

export const metadata = {
  title: "Pricing | Dyxi",
};

export default function PricingPage() {
  return (
    <>
<section className="page_banner">
          <div className="container">
            <div className="content_wrapper" style={{backgroundImage: "url('/assets/images/banner/page_banner_image.png')"}}>
              <div className="row align-items-center">
                <div className="col col-lg-6">
                  <ul className="breadcrumb_nav unordered_list">
                    <li><a href="/">Home</a></li>
                    <li><a href="#!">Pages</a></li>
                    <li>Pricing</li>
                  </ul>
                  <h1 className="page_title">Pricing Plans</h1>
                  <p className="page_description">
                    Simple monthly plans for families. Full pricing details are on their way — leave your email on our Contact page and we&apos;ll let you know as soon as they&apos;re live.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing_section section_space_lg pb-0">
          <div className="container decoration_wrap">
            <div className="section_heading text-center">
              <h2 className="heading_text mb-0">
                Premium Price Packages
              </h2>
            </div>

            <div className="pricing_cards_wrapper row align-items-center">
              <div className="col col-lg-4">
                <div className="pricing_card text-center tilt">
                  <h3 className="card_heading">Starter</h3>
                  <div className="pricing_wrap">
                    <span className="price_value">TBD</span>
                    <small className="d-block">per month</small>
                  </div>
                  <hr/>
                  <ul className="info_list unordered_list_block text-start">
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Full access to learning activities</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Ongoing progress tracking</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Parent dashboard access</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>1 child profile</span>
                    </li>
                  </ul>
                  <div className="btn_wrap pb-0">
                    <a className="btn border_dark" href="/signup">
                      <span>
                        <small>Get Started</small>
                        <small>Get Started</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4">
                <div className="pricing_card text-center bg_dark tilt">
                  <div className="card_badge">most popular</div>
                  <h3 className="card_heading">Family</h3>
                  <div className="pricing_wrap">
                    <span className="price_value">TBD</span>
                    <small className="d-block">per month</small>
                  </div>
                  <hr/>
                  <ul className="info_list unordered_list_block text-start">
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Everything in Starter</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Up to 3 child profiles</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Detailed progress reports</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <div className="btn_wrap pb-0">
                    <a className="btn btn_primary" href="/signup">
                      <span>
                        <small>Get Started</small>
                        <small>Get Started</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4">
                <div className="pricing_card text-center tilt">
                  <h3 className="card_heading">Annual</h3>
                  <div className="pricing_wrap">
                    <span className="price_value">TBD</span>
                    <small className="d-block">per year</small>
                  </div>
                  <hr/>
                  <ul className="info_list unordered_list_block text-start">
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Everything in Family</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Best value for the year</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Yearly progress summary</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <div className="btn_wrap pb-0">
                    <a className="btn border_dark" href="/signup">
                      <span>
                        <small>Get Started</small>
                        <small>Get Started</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="deco_item shape_img_1" data-parallax='{"y" : 130, "smoothness": 6}'>
              <img src="/assets/images/shape/shape_img_4.png" alt="Dyxi decorative shape"/>
            </div>
            <div className="deco_item shape_img_2" data-parallax='{"y" : -130, "smoothness": 6}'>
              <img src="/assets/images/shape/shape_img_5.png" alt="Dyxi decorative shape"/>
            </div>
          </div>
        </section>

        <section className="faq_section section_space_lg">
          <div className="container">
            <div className="section_heading text-center mb-3">
              <div className="row justify-content-center">
                <div className="col col-lg-7">
                  <h2 className="heading_text">
                    Questions Before You Subscribe
                  </h2>
                  <p className="heading_description mb-0">
                    Have more questions? Visit our full FAQ page or get in touch with us directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col col-lg-6">
                <div className="accordion" id="faq_accordion_1">
                  <div className="accordion-item">
                    <div className="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true">
                      What&apos;s included in every plan?
                    </div>
                    <div id="collapse_one" className="accordion-collapse collapse show" data-bs-parent="#faq_accordion_1">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Every Dyxi plan includes full access to the learning app for your child and the parent dashboard to track their progress over time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false">
                       When will pricing be available?
                    </div>
                    <div id="collapse_two" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_1">
                      <div className="accordion-body">
                        <p className="mb-0">
                          We&apos;re finalising pricing now. Sign up for updates and we&apos;ll notify you the moment plans go live.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false">
                      Can I add more than one child?
                    </div>
                    <div id="collapse_three" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_1">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Yes. Our Family and Annual plans support multiple child profiles under a single account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false">
                      Is there a free trial?
                    </div>
                    <div id="collapse_four" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_1">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Trial details will be confirmed alongside our final pricing. Check back soon or leave your email to be notified.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-lg-6">
                <div className="accordion" id="faq_accordion_2">
                  <div className="accordion-item">
                    <div className="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_one" aria-expanded="true">
                      Can I switch plans later?
                    </div>
                    <div id="a2_collapse_one" className="accordion-collapse collapse show" data-bs-parent="#faq_accordion_2">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Yes, you&apos;ll be able to move between plans as your family&apos;s needs change.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_two" aria-expanded="false">
                      Is my payment information secure?
                    </div>
                    <div id="a2_collapse_two" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_2">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Yes. Billing will be handled through a secure, industry-standard payment provider once subscriptions go live.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_three" aria-expanded="false">
                      Where can I go for help?
                    </div>
                    <div id="a2_collapse_three" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_2">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Visit our Contact page any time — we&apos;re happy to help with questions about plans, billing or the product itself.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_four" aria-expanded="false">
                      Can I cancel any time?
                    </div>
                    <div id="a2_collapse_four" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_2">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Yes, Dyxi is a monthly subscription and you can cancel whenever you like.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="newslatter_section">
          <div className="container">
            <div className="newslatter_box" style={{backgroundImage: "url('/assets/images/shape/shape_img_6.svg')"}}>
              <div className="row justify-content-center">
                <div className="col col-lg-6">
                  <div className="section_heading text-center">
                    <h2 className="heading_text">
                      Be First to Know When Dyxi Launches
                    </h2>
                    <p className="heading_description mb-0">
                      Leave your email and we&apos;ll let you know as soon as pricing and sign-ups are live.
                    </p>
                  </div>
                  <form action="#">
                    <div className="form_item m-0">
                      <input type="email" name="email" placeholder="Your Email"/>
                      <button type="submit" className="btn btn_dark">
                        <span>
                          <small>Subscribe</small>
                          <small>Subscribe</small>
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
