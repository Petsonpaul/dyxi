import Link from "next/link";

export const metadata = {
  title: "FAQ | Dyxi",
};

export default function FaqPage() {
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
                    <li>FAQ</li>
                  </ul>
                  <h1 className="page_title">FAQ</h1>
                  <p className="page_description">
                    Answers to the questions parents ask most often about Dyxi and how we support children ages 3–9 with their learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq_section section_space_lg">
          <div className="container">
            <div className="section_heading text-center mb-3">
              <div className="row justify-content-center">
                <div className="col col-lg-7">
                  <h2 className="heading_text">
                    Questions Parents Ask Us Most
                  </h2>
                  <p className="heading_description mb-0">
                    New to Dyxi? Here&apos;s what other parents want to know before they subscribe.
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col col-lg-6">
                <div className="accordion" id="faq_accordion_1">
                  <div className="accordion-item">
                    <div className="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true">
                      What is Dyxi?
                    </div>
                    <div id="collapse_one" className="accordion-collapse collapse show" data-bs-parent="#faq_accordion_1">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Dyxi is a learning platform for young children that personalises activities based on how each child learns, while giving parents a clear, ongoing view of their progress.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false">
                      Who is Dyxi for?
                    </div>
                    <div id="collapse_two" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_1">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Dyxi is built for young children, especially those who may need extra support with reading, attention or general learning skills — and for the parents and education consultants who support them.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false">
                      What age group is Dyxi designed for?
                    </div>
                    <div id="collapse_three" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_1">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Dyxi is designed for children roughly ages 3 to 9. Activities and pacing adjust as your child grows.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false">
                      How does Dyxi help children with learning?
                    </div>
                    <div id="collapse_four" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_1">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Dyxi observes how a child engages with activities — things like timing, accuracy and repeated attempts — and uses those patterns to personalise what they see next, so learning fits the child.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_five" aria-expanded="false">
                      Does my child use Dyxi on the web?
                    </div>
                    <div id="collapse_five" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_1">
                      <div className="accordion-body">
                        <p className="mb-0">
                          No. Children use the Dyxi mobile app. The web platform is for parents and education consultants to monitor activity and progress.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_six" aria-expanded="false">
                      Does my child use a mobile app?
                    </div>
                    <div id="collapse_six" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_1">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Yes. Your child learns through activities in the Dyxi mobile app on a standard phone or tablet — no special equipment needed.
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
                      Can parents monitor their child&apos;s progress?
                    </div>
                    <div id="a2_collapse_one" className="accordion-collapse collapse show" data-bs-parent="#faq_accordion_2">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Yes. Parents can log in to the Dyxi web platform to see a simple, ongoing view of their child&apos;s activity and progress over time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_two" aria-expanded="false">
                      Can education consultants monitor progress?
                    </div>
                    <div id="a2_collapse_two" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_2">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Yes. Education consultants can use the web platform to monitor a child&apos;s learning activity and progress alongside the parent.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_three" aria-expanded="false">
                      Does Dyxi diagnose dyslexia or ADHD?
                    </div>
                    <div id="a2_collapse_three" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_2">
                      <div className="accordion-body">
                        <p className="mb-0">
                          No. Dyxi is not a diagnostic or medical tool. It observes learning and activity patterns to personalise the experience and highlight areas where a child may need more support. Any concerns should be followed up with a qualified professional.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_four" aria-expanded="false">
                      How does the monthly subscription work?
                    </div>
                    <div id="a2_collapse_four" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_2">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Dyxi is a monthly subscription that includes access to the learning app for your child and the web platform for tracking progress. You can cancel any time. Full pricing details are coming soon.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_five" aria-expanded="false">
                      How do I get started?
                    </div>
                    <div id="a2_collapse_five" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_2">
                      <div className="accordion-body">
                        <p className="mb-0">
                          Sign up for a Dyxi account, download the mobile app for your child, and log in to the web platform to start following their progress.
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
                      Want Updates on Dyxi?
                    </h2>
                    <p className="heading_description mb-0">
                      Leave your email and we&apos;ll let you know when Dyxi is ready for your family.
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
