import Link from "next/link";

export const metadata = {
  title: "Blog Details | Dyxi",
};

export default function BlogDetailsPage() {
  return (
    <>
<section className="page_banner">
          <div className="container">
            <div className="content_wrapper">
              <div className="row align-items-center">
                <div className="col col-lg-8">
                  <ul className="breadcrumb_nav unordered_list">
                    <li><a href="/">Home</a></li>
                    <li><a href="#!">Blogs</a></li>
                    <li>Blog Details</li>
                  </ul>
                  <h1 className="page_title mb-0">
                    Understanding Dyslexia: What Parents Should Know
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="details_section blog_details_section section_space_lg pb-0">
          <div className="container">
            <div className="row">
              <div className="col col-lg-8">
                <div className="details_image">
                  <img src="/assets/images/blog/blogdetails1.jpg" alt="Dyxi blog"/>
                </div>
                <div className="details_content">
                  <ul className="meta_info_list unordered_list">
                    <li>
                      <a href="#!">
                        <i className="fas fa-thumbtack"></i>
                        <span>Article</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fas fa-user"></i>
                        <span>by Dyxi Team</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fas fa-calendar-day"></i>
                        <span>Jun 03, 2026</span>
                      </a>
                    </li>
                  </ul>
                  <p>
                    Hearing the word &quot;dyslexia&quot; for the first time can feel
                    overwhelming. It&apos;s natural to have questions about what it
                    means for your child, and what — if anything — you should do
                    next. Here&apos;s a simple, practical starting point.
                  </p>
                  <blockquote>
                    <div className="blockquote_icon">
                      <img src="/assets/images/icon/icon_quote.svg" alt="Dyxi blog"/>
                    </div>
                    <div className="blockquote_content">
                      <p className="mb-0">
                        Dyslexia affects how a child processes written language —
                        it has nothing to do with intelligence or effort.
                      </p>
                    </div>
                  </blockquote>
                  <p>
                    Every child&apos;s experience with reading looks a little
                    different. Some children mix up similar-looking letters,
                    others read slowly and carefully, and some avoid reading
                    altogether because it feels harder than it should. None of
                    these signs alone mean a diagnosis — they&apos;re simply worth
                    paying attention to.
                  </p>
                  <h3 className="details_info_title">
                    Common signs parents notice
                  </h3>
                  <p>
                    Dyslexia can look different from child to child, and signs
                    often become clearer once a child starts learning to read.
                    Some parents notice their child struggles to sound out new
                    words, has trouble rhyming, or takes noticeably longer to
                    complete reading tasks than other children their age.
                  </p>
                  <div className="row mb-4">
                    <div className="col col-md-6">
                      <div className="details_image m-0">
                        <img src="/assets/images/blog/blogdetails2.jpg" alt="Dyxi blog"/>
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="details_image m-0">
                        <img src="/assets/images/blog/blogdetails3.jpg" alt="Dyxi blog"/>
                      </div>
                    </div>
                  </div>
                  <h3 className="details_info_title">
                    How Dyxi fits in
                  </h3>
                  <p>
                    Dyxi is not a diagnostic tool, and it does not diagnose
                    dyslexia. What it does is observe how your child engages with
                    reading-related activities over time — things like accuracy
                    and repeated attempts — and use those patterns to
                    personalise the activities they see next. If you have
                    specific concerns about your child&apos;s reading, a
                    qualified professional is always the right next step.
                  </p>
                  <div className="row mb-4">
                    <div className="col col-lg-6">
                      <ul className="info_list unordered_list_block">
                        <li>
                          <i className="fas fa-square"></i>
                          <span>Reading feels frustrating rather than fun</span>
                        </li>
                        <li>
                          <i className="fas fa-square"></i>
                          <span>Difficulty sounding out unfamiliar words</span>
                        </li>
                        <li>
                          <i className="fas fa-square"></i>
                          <span>Trouble rhyming or recognising letter sounds</span>
                        </li>
                        <li>
                          <i className="fas fa-square"></i>
                          <span>Reading noticeably slower than expected for age</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col col-lg-6">
                      <ol type="1">
                        <li>
                          <span>Keep reading time low-pressure and encouraging.</span>
                        </li>
                        <li>
                          <span>Celebrate effort, not just accuracy.</span>
                        </li>
                        <li>
                          <span>Talk to your child&apos;s teacher if concerns continue.</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <p className="mb-0">
                    Most importantly, remember that dyslexia is common, and
                    with the right support, children with dyslexia go on to
                    thrive in school and beyond. Understanding what&apos;s going
                    on is the first step toward helping your child feel more
                    confident with reading.
                  </p>
                  <hr/>
                  <div className="row">
                    <div className="col col-lg-6">
                      <ul className="item_category_list unordered_list">
                        <li><a href="#!">Learning</a></li>
                        <li><a href="#!">Reading</a></li>
                        <li><a href="#!">Dyslexia</a></li>
                      </ul>
                    </div>
                    <div className="col col-lg-6 d-lg-flex justify-content-lg-end">
                      <ul className="social_links unordered_list">
                        <li>
                          <a href="#!"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                          <a href="#!"><i className="fab fa-youtube"></i></a>
                        </li>
                        <li>
                          <a href="#!"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog_author">
                    <div className="blog_author_image">
                      <img src="/assets/images/blog/blogdetails4.jpg" alt="Dyxi team author"/>
                    </div>
                    <div className="blog_author_content position-relative">
                      <h3 className="author_name">The Dyxi Team</h3>
                      <h4 className="author_designation">Dyxi</h4>
                      <p className="mb-0">
                        We write about supporting early learners, understanding reading and attention, and what we&apos;re learning as we build Dyxi.
                      </p>
                      <a className="btn border_dark blog_author_link" href="/contact">
                        <span>
                          <small>Get in Touch</small>
                          <small>Get in Touch</small>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="prevnext_post_wrap">
                    <a className="post_item" href="#!">
                      <span>
                        <i className="far fa-arrow-left"></i>
                        <small>Previous Article</small>
                      </span>
                      <strong>
                        How Children Learn Differently
                      </strong>
                    </a>
                    <a className="post_item" href="#!">
                      <span>
                        <i className="far fa-arrow-right"></i>
                        <small>Next Article</small>
                      </span>
                      <strong>
                        Supporting Reading Skills at Home
                      </strong>
                    </a>
                  </div>

                  <div className="comments_list_wrap">
                    <h3 className="details_info_title">
                      2 Comments
                    </h3>
                    <ul className="comments_list unordered_list_block">
                      <li>
                        <div className="comment_item">
                          <div className="comment_author">
                            <div className="author_thumbnail">
                              <img src="/assets/images/meta/avatar1.jpg" alt="Dyxi blog"/>
                            </div>
                            <div className="author_content">
                              <h4 className="author_name">Carolyn Wallace</h4>
                              <span className="comment_date">January 27, 2023</span>
                            </div>
                          </div>
                          <p>
                            This is such a helpful explanation, thank you for breaking it down so clearly.
                          </p>
                          <a className="reply_btn" href="#!"><i className="fas fa-reply"></i> Reply</a>
                        </div>
                        <ul className="comments_list unordered_list_block">
                          <li>
                            <div className="comment_item">
                              <div className="comment_author">
                                <div className="author_thumbnail">
                                  <img src="/assets/images/meta/avatar2.jpg" alt="Dyxi blog"/>
                                </div>
                                <div className="author_content">
                                  <h4 className="author_name">Ray Cooper</h4>
                                  <span className="comment_date">January 27, 2023</span>
                                </div>
                              </div>
                              <p>
                                My daughter shows a couple of these signs — this gave me a good place to start.
                              </p>
                              <a className="reply_btn" href="#!"><i className="fas fa-reply"></i> Reply</a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment_item">
                          <div className="comment_author">
                            <div className="author_thumbnail">
                              <img src="/assets/images/meta/avatar3.jpg" alt="Dyxi blog"/>
                            </div>
                            <div className="author_content">
                              <h4 className="author_name">Marrion Willsoriam</h4>
                              <span className="comment_date">January 27, 2023</span>
                            </div>
                          </div>
                          <p>
                            Appreciate the reminder that this isn't about intelligence or effort.
                          </p>
                          <a className="reply_btn" href="#!"><i className="fas fa-reply"></i> Reply</a>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="comment_form_wrap">
                    <h3 className="details_info_title">
                      Leave a Reply
                    </h3>
                    <form action="#">
                      <div className="row">
                        <div className="col">
                          <div className="form_item mb-0">
                            <label htmlFor="input_message" className="input_title text-uppercase">Message</label>
                            <textarea id="input_message" name="comment" placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div className="col col-md-6">
                          <div className="form_item mb-0">
                            <label htmlFor="input_name" className="input_title">Name</label>
                            <input id="input_name" type="text" placeholder="Your Name"/>
                          </div>
                        </div>
                        <div className="col col-md-6">
                          <div className="form_item mb-0">
                            <label htmlFor="input_email" className="input_title">Email</label>
                            <input id="input_email" type="email" placeholder="Your Email"/>
                          </div>
                        </div>
                        <div className="col">
                          <div className="checkbox_item">
                            <input id="checkbox_remember" type="checkbox"/>
                            <label htmlFor="checkbox_remember">Save my name, email, and website in this browser for the next time I comment.</label>
                          </div>
                          <button type="submit" className="btn btn_dark">
                            <span>
                              <small>Submit Comment</small>
                              <small>Submit Comment</small>
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4">
                <aside className="sidebar ps-lg-4">
                  <div className="widget">
                    <div className="widget_title" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_category" aria-expanded="true" aria-controls="collapse_category">
                      Category
                    </div>
                    <div className="collapse show" id="collapse_category">
                      <div className="card card-body">
                        <div className="checkbox_item">
                          <input id="checkbox_design" type="checkbox"/>
                          <label htmlFor="checkbox_design"><span>Learning</span><span>(5)</span></label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_it_software" type="checkbox"/>
                          <label htmlFor="checkbox_it_software"><span>Attention</span><span>(2)</span></label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_development" type="checkbox"/>
                          <label htmlFor="checkbox_development"><span>Development</span><span>(2)</span></label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_marketing" type="checkbox"/>
                          <label htmlFor="checkbox_marketing"><span>Reading</span><span>(1)</span></label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_business" type="checkbox"/>
                          <label htmlFor="checkbox_business"><span>Progress</span><span>(1)</span></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <div className="widget_title" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_blog" aria-expanded="true" aria-controls="collapse_blog">
                      Related Articles
                    </div>
                    <div className="collapse show" id="collapse_blog">
                      <div className="card card-body">
                        <ul className="blog_small_group unordered_list_block">
                          <li>
                            <a className="blog_small" href="/blog-details">
                              <span className="item_image">
                                <img src="/assets/images/blog/article1.jpg" alt="Dyxi blog"/>
                              </span>
                              <span className="item_content">
                                <span className="item_author"><i className="fas fa-user-alt"></i> by Dyxi Team</span>
                                <strong className="item_title">How Children Learn Differently</strong>
                                <small className="item_post_date">May 27, 2026</small>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="blog_small" href="/blog-details">
                              <span className="item_image">
                                <img src="/assets/images/blog/article2.jpg" alt="Dyxi blog"/>
                              </span>
                              <span className="item_content">
                                <span className="item_author"><i className="fas fa-user-alt"></i> by Dyxi Team</span>
                                <strong className="item_title">Supporting Reading Skills at Home</strong>
                                <small className="item_post_date">Apr 28, 2026</small>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="blog_small" href="/blog-details">
                              <span className="item_image">
                                <img src="/assets/images/blog/article3.jpg" alt="Dyxi blog"/>
                              </span>
                              <span className="item_content">
                                <span className="item_author"><i className="fas fa-user-alt"></i> by Dyxi Team</span>
                                <strong className="item_title">Understanding Attention Without Labels</strong>
                                <small className="item_post_date">Apr 20, 2026</small>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <div className="widget_title" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_recent_comments" aria-expanded="true" aria-controls="collapse_recent_comments">
                      Recent Comments
                    </div>
                    <div className="collapse show" id="collapse_recent_comments">
                      <div className="card card-body">
                        <ul className="recent_comments_list unordered_list_block">
                          <li>
                            <a href="#!">
                              <i className="fas fa-comments"></i>
                              <strong>Irene Flores</strong>
                            </a>
                            <span>This really helped me understand what to expect</span>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fas fa-comments"></i>
                              <strong>Anthony Patterson</strong>
                            </a>
                            <span>Great tips for supporting reading at home</span>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fas fa-comments"></i>
                              <strong>Wendy Johnson</strong>
                            </a>
                            <span>Thanks for explaining this so clearly</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <div className="widget_title" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_tags_list" aria-expanded="true" aria-controls="collapse_tags_list">
                      Tags
                    </div>
                    <div className="collapse show" id="collapse_tags_list">
                      <div className="card card-body">
                        <ul className="tags_list style_2 unordered_list">
                          <li><a href="#!">Reading</a></li>
                          <li><a href="#!">Dyslexia</a></li>
                          <li><a href="#!">Attention</a></li>
                          <li><a href="#!">ADHD</a></li>
                          <li><a href="#!">Parenting</a></li>
                          <li><a href="#!">Early Learning</a></li>
                          <li><a href="#!">Progress</a></li>
                          <li><a href="#!">Play</a></li>
                          <li><a href="#!">Confidence</a></li>
                          <li><a href="#!">Screen Time</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <div className="widget_title" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_archives_month" aria-expanded="true" aria-controls="collapse_archives_month">
                      Archives
                    </div>
                    <div className="collapse show" id="collapse_archives_month">
                      <div className="card card-body">
                        <ul className="info_list unordered_list_block">
                          <li>
                            <a href="#!">
                              <i className="fas fa-square"></i>
                              <span>December</span>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fas fa-square"></i>
                              <span>January</span>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fas fa-square"></i>
                              <span>February</span>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fas fa-square"></i>
                              <span>March</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <div className="widget_title" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_calendar" aria-expanded="true" aria-controls="collapse_calendar">
                      Calendar
                    </div>
                    <div className="collapse show" id="collapse_calendar">
                      <div className="card card-body">
                        <div className="vanilla-calendar"></div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="blog_section section_space_lg">
          <div className="container">
            <div className="section_heading">
              <div className="row align-items-center">
                <div className="col col-lg-5">
                  <h2 className="heading_text mb-lg-0">
                    Articles
                  </h2>
                </div>
                <div className="col col-lg-7 d-none d-lg-flex justify-content-end">
                  <div className="btn_wrap p-0">
                    <a className="btn border_dark" href="/blog">
                      <span>
                        <small>All Articles</small>
                        <small>All Articles</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col col-lg-4">
                <div className="blog_item">
                  <ul className="item_category_list unordered_list">
                    <li><a href="#!">Learning</a></li>
                  </ul>
                  <div className="item_image">
                    <a href="/blog-details" data-cursor-text="View">
                      <img src="/assets/images/blog/blog_img_1.jpg" alt="Dyxi blog"/>
                    </a>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">
                      <a href="/blog-details">
                        Why Personalised Learning Matters
                      </a>
                    </h3>
                    <a className="btn_unfill" href="/blog-details">
                      <span className="btn_text">Read Articles</span>
                      <span className="btn_icon">
                        <i className="fas fa-long-arrow-right"></i>
                        <i className="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4">
                <div className="blog_item">
                  <ul className="item_category_list unordered_list">
                    <li><a href="#!">Learning</a></li>
                  </ul>
                  <div className="item_image">
                    <a href="/blog-details" data-cursor-text="View">
                      <img src="/assets/images/blog/blog_img_2.jpg" alt="Dyxi blog"/>
                    </a>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">
                      <a href="/blog-details">
                        Learning Through Play: Why It Works
                      </a>
                    </h3>
                    <a className="btn_unfill" href="/blog-details">
                      <span className="btn_text">Read Articles</span>
                      <span className="btn_icon">
                        <i className="fas fa-long-arrow-right"></i>
                        <i className="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4">
                <div className="blog_item">
                  <ul className="item_category_list unordered_list">
                    <li><a href="#!">Learning</a></li>
                  </ul>
                  <div className="item_image">
                    <a href="/blog-details" data-cursor-text="View">
                      <img src="/assets/images/blog/blog_img_3.jpg" alt="Dyxi blog"/>
                    </a>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">
                      <a href="/blog-details">
                        Building Confidence in Early Learners
                      </a>
                    </h3>
                    <a className="btn_unfill" href="/blog-details">
                      <span className="btn_text">Read Articles</span>
                      <span className="btn_icon">
                        <i className="fas fa-long-arrow-right"></i>
                        <i className="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn_wrap d-block d-lg-none pb-0 text-center">
              <a className="btn border_dark" href="/blog">
                <span>
                  <small>All Articles</small>
                  <small>All Articles</small>
                </span>
              </a>
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
                      Get New Articles in Your Inbox
                    </h2>
                    <p className="heading_description mb-0">
                      Practical tips for parents, sent straight to your email — no spam, unsubscribe any time.
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
