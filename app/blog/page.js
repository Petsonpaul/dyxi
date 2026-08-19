import Link from "next/link";

export const metadata = {
  title: "Blog | Dyxi",
};

export default function BlogPage() {
  return (
    <>
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
              <div className="col col-lg-6">
                <ul className="breadcrumb_nav unordered_list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#!">Blogs</a>
                  </li>
                  <li>Our Blogs</li>
                </ul>

                <h1 className="page_title">Articles</h1>

                <p className="page_description">
                  Simple, useful ideas for parents who want to better
                  understand their child&apos;s learning and support their
                  progress.
                </p>

               <form action="#">
  <div
    className="form_item mb-0"
    style={{
      display: "flex",
      alignItems: "center",
      width: "100%",
    }}
  >
    <input
      type="search"
      name="search"
      placeholder="What do you want to learn?"
      style={{
        flex: 1,
        minWidth: 0,
      }}
    />

    <button
      type="submit"
      className="btn btn_dark"
      style={{
        minWidth: "120px",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      <span>
        <small>Search</small>
        <small>Search</small>
      </span>
    </button>
  </div>
</form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_section section_space_lg">
        <div className="container">
          <div className="row">
            <div className="col col-lg-8">
              <div className="row">

                {/* Article 1 */}
                <div className="col col-lg-6">
                  <div className="blog_item">
                    <ul className="item_category_list unordered_list">
                      <li>
                        <a href="#!">How Dyxi Works</a>
                      </li>
                    </ul>

                    <div className="item_image">
                      <a
                        href="/blog-details"
                        data-cursor-text="View"
                      >
                        <img
                          src="/assets/images/blog/blog1.jpg"
                          alt="How Dyxi helps parents understand learning"
                        />
                      </a>
                    </div>

                    <div className="item_content">
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
                            <span>Aug 18, 2026</span>
                          </a>
                        </li>
                      </ul>

                      <h3 className="item_title">
                        <a href="/blog-details">
                          How Dyxi Helps Parents Understand Their Child&apos;s
                          Learning
                        </a>
                      </h3>

                      <a
                        className="btn_unfill"
                        href="/blog-details"
                      >
                        <span className="btn_text">Read Article</span>
                        <span className="btn_icon">
                          <i className="fas fa-long-arrow-right"></i>
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Article 2 */}
                <div className="col col-lg-6">
                  <div className="blog_item">
                    <ul className="item_category_list unordered_list">
                      <li>
                        <a href="#!">Personalised Learning</a>
                      </li>
                    </ul>

                    <div className="item_image">
                      <a
                        href="/blog-details"
                        data-cursor-text="View"
                      >
                        <img
                          src="/assets/images/blog/blog2.jpg"
                          alt="Personalised learning for children"
                        />
                      </a>
                    </div>

                    <div className="item_content">
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
                            <span>Aug 11, 2026</span>
                          </a>
                        </li>
                      </ul>

                      <h3 className="item_title">
                        <a href="/blog-details">
                          Why Every Child Needs a Learning Experience That
                          Fits Them
                        </a>
                      </h3>

                      <a
                        className="btn_unfill"
                        href="/blog-details"
                      >
                        <span className="btn_text">Read Article</span>
                        <span className="btn_icon">
                          <i className="fas fa-long-arrow-right"></i>
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Article 3 */}
                <div className="col col-lg-6">
                  <div className="blog_item">
                    <ul className="item_category_list unordered_list">
                      <li>
                        <a href="#!">Parents</a>
                      </li>
                    </ul>

                    <div className="item_image">
                      <a
                        href="/blog-details"
                        data-cursor-text="View"
                      >
                        <img
                          src="/assets/images/blog/blog3.jpg"
                          alt="Parents understanding learning progress"
                        />
                      </a>
                    </div>

                    <div className="item_content">
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
                            <span>Aug 04, 2026</span>
                          </a>
                        </li>
                      </ul>

                      <h3 className="item_title">
                        <a href="/blog-details">
                          What Parents Should Know About Their Child&apos;s
                          Learning Progress
                        </a>
                      </h3>

                      <a
                        className="btn_unfill"
                        href="/blog-details"
                      >
                        <span className="btn_text">Read Article</span>
                        <span className="btn_icon">
                          <i className="fas fa-long-arrow-right"></i>
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Article 4 */}
                <div className="col col-lg-6">
                  <div className="blog_item">
                    <ul className="item_category_list unordered_list">
                      <li>
                        <a href="#!">Learning</a>
                      </li>
                    </ul>

                    <div className="item_image">
                      <a
                        href="/blog-details"
                        data-cursor-text="View"
                      >
                        <img
                          src="/assets/images/blog/blog4.jpg"
                          alt="Children learning in different ways"
                        />
                      </a>
                    </div>

                    <div className="item_content">
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
                            <span>Jul 28, 2026</span>
                          </a>
                        </li>
                      </ul>

                      <h3 className="item_title">
                        <a href="/blog-details">
                          When Your Child Learns Differently, What Can You Do?
                        </a>
                      </h3>

                      <a
                        className="btn_unfill"
                        href="/blog-details"
                      >
                        <span className="btn_text">Read Article</span>
                        <span className="btn_icon">
                          <i className="fas fa-long-arrow-right"></i>
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Article 5 */}
                <div className="col col-lg-6">
                  <div className="blog_item">
                    <ul className="item_category_list unordered_list">
                      <li>
                        <a href="#!">How Dyxi Works</a>
                      </li>
                    </ul>

                    <div className="item_image">
                      <a
                        href="/blog-details"
                        data-cursor-text="View"
                      >
                        <img
                          src="/assets/images/blog/blog5.jpg"
                          alt="Dyxi parent dashboard"
                        />
                      </a>
                    </div>

                    <div className="item_content">
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
                            <span>Jul 21, 2026</span>
                          </a>
                        </li>
                      </ul>

                      <h3 className="item_title">
                        <a href="/blog-details">
                          What Parents Can See From the Dyxi Dashboard
                        </a>
                      </h3>

                      <a
                        className="btn_unfill"
                        href="/blog-details"
                      >
                        <span className="btn_text">Read Article</span>
                        <span className="btn_icon">
                          <i className="fas fa-long-arrow-right"></i>
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Article 6 */}
                <div className="col col-lg-6">
                  <div className="blog_item">
                    <ul className="item_category_list unordered_list">
                      <li>
                        <a href="#!">Reading</a>
                      </li>
                    </ul>

                    <div className="item_image">
                      <a
                        href="/blog-details"
                        data-cursor-text="View"
                      >
                        <img
                          src="/assets/images/blog/blog6.jpg"
                          alt="Supporting reading at home"
                        />
                      </a>
                    </div>

                    <div className="item_content">
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
                            <span>Jul 14, 2026</span>
                          </a>
                        </li>
                      </ul>

                      <h3 className="item_title">
                        <a href="/blog-details">
                          Simple Ways to Support Reading at Home
                        </a>
                      </h3>

                      <a
                        className="btn_unfill"
                        href="/blog-details"
                      >
                        <span className="btn_text">Read Article</span>
                        <span className="btn_icon">
                          <i className="fas fa-long-arrow-right"></i>
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Article 7 */}
                <div className="col col-lg-6">
                  <div className="blog_item">
                    <ul className="item_category_list unordered_list">
                      <li>
                        <a href="#!">Focus &amp; Attention</a>
                      </li>
                    </ul>

                    <div className="item_image">
                      <a
                        href="/blog-details"
                        data-cursor-text="View"
                      >
                        <img
                          src="/assets/images/blog/blog7.jpg"
                          alt="Helping children stay engaged during learning"
                        />
                      </a>
                    </div>

                    <div className="item_content">
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
                            <span>Jul 07, 2026</span>
                          </a>
                        </li>
                      </ul>

                      <h3 className="item_title">
                        <a href="/blog-details">
                          Helping Your Child Stay Engaged During Learning
                        </a>
                      </h3>

                      <a
                        className="btn_unfill"
                        href="/blog-details"
                      >
                        <span className="btn_text">Read Article</span>
                        <span className="btn_icon">
                          <i className="fas fa-long-arrow-right"></i>
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Article 8 */}
                <div className="col col-lg-6">
                  <div className="blog_item">
                    <ul className="item_category_list unordered_list">
                      <li>
                        <a href="#!">Learning Progress</a>
                      </li>
                    </ul>

                    <div className="item_image">
                      <a
                        href="/blog-details"
                        data-cursor-text="View"
                      >
                        <img
                          src="/assets/images/blog/blog8.jpg"
                          alt="Tracking learning progress"
                        />
                      </a>
                    </div>

                    <div className="item_content">
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
                            <span>Jun 30, 2026</span>
                          </a>
                        </li>
                      </ul>

                      <h3 className="item_title">
                        <a href="/blog-details">
                          Why Tracking Learning Progress Matters
                        </a>
                      </h3>

                      <a
                        className="btn_unfill"
                        href="/blog-details"
                      >
                        <span className="btn_text">Read Article</span>
                        <span className="btn_icon">
                          <i className="fas fa-long-arrow-right"></i>
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Article 9 */}
                <div className="col col-lg-6">
                  <div className="blog_item">
                    <ul className="item_category_list unordered_list">
                      <li>
                        <a href="#!">Parents</a>
                      </li>
                    </ul>

                    <div className="item_image">
                      <a
                        href="/blog-details"
                        data-cursor-text="View"
                      >
                        <img
                          src="/assets/images/blog/blog9.jpg"
                          alt="Parents using learning insights"
                        />
                      </a>
                    </div>

                    <div className="item_content">
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
                            <span>Jun 23, 2026</span>
                          </a>
                        </li>
                      </ul>

                      <h3 className="item_title">
                        <a href="/blog-details">
                          How Parents Can Turn Learning Insights Into Better
                          Support
                        </a>
                      </h3>

                      <a
                        className="btn_unfill"
                        href="/blog-details"
                      >
                        <span className="btn_text">Read Article</span>
                        <span className="btn_icon">
                          <i className="fas fa-long-arrow-right"></i>
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Article 10 */}
                <div className="col col-lg-6">
                  <div className="blog_item">
                    <ul className="item_category_list unordered_list">
                      <li>
                        <a href="#!">Learning</a>
                      </li>
                    </ul>

                    <div className="item_image">
                      <a
                        href="/blog-details"
                        data-cursor-text="View"
                      >
                        <img
                          src="/assets/images/blog/blog10.jpg"
                          alt="Personalised learning experience"
                        />
                      </a>
                    </div>

                    <div className="item_content">
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
                            <span>Jun 16, 2026</span>
                          </a>
                        </li>
                      </ul>

                      <h3 className="item_title">
                        <a href="/blog-details">
                          Making Learning More Personal for Every Child
                        </a>
                      </h3>

                      <a
                        className="btn_unfill"
                        href="/blog-details"
                      >
                        <span className="btn_text">Read Article</span>
                        <span className="btn_icon">
                          <i className="fas fa-long-arrow-right"></i>
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Article 11 */}
                <div className="col col-lg-6">
                  <div className="blog_item">
                    <ul className="item_category_list unordered_list">
                      <li>
                        <a href="#!">How Dyxi Works</a>
                      </li>
                    </ul>

                    <div className="item_image">
                      <a
                        href="/blog-details"
                        data-cursor-text="View"
                      >
                        <img
                          src="/assets/images/blog/blog11.jpg"
                          alt="Dyxi learning insights"
                        />
                      </a>
                    </div>

                    <div className="item_content">
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
                            <span>Jun 09, 2026</span>
                          </a>
                        </li>
                      </ul>

                      <h3 className="item_title">
                        <a href="/blog-details">
                          From Learning Activity to Useful Insights: How Dyxi
                          Works
                        </a>
                      </h3>

                      <a
                        className="btn_unfill"
                        href="/blog-details"
                      >
                        <span className="btn_text">Read Article</span>
                        <span className="btn_icon">
                          <i className="fas fa-long-arrow-right"></i>
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Article 12 */}
                <div className="col col-lg-6">
                  <div className="blog_item">
                    <ul className="item_category_list unordered_list">
                      <li>
                        <a href="#!">Parents</a>
                      </li>
                    </ul>

                    <div className="item_image">
                      <a
                        href="/blog-details"
                        data-cursor-text="View"
                      >
                        <img
                          src="/assets/images/blog/blog12.jpg"
                          alt="Questions parents should ask about learning"
                        />
                      </a>
                    </div>

                    <div className="item_content">
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
                            <span>Jun 02, 2026</span>
                          </a>
                        </li>
                      </ul>

                      <h3 className="item_title">
                        <a href="/blog-details">
                          Questions Every Parent Should Ask About Their
                          Child&apos;s Learning
                        </a>
                      </h3>

                      <a
                        className="btn_unfill"
                        href="/blog-details"
                      >
                        <span className="btn_text">Read Article</span>
                        <span className="btn_icon">
                          <i className="fas fa-long-arrow-right"></i>
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              <div className="pagination_wrap">
                <ul className="pagination_nav unordered_list">
                  <li>
                    <a href="#!">
                      <i className="fas fa-long-arrow-left"></i>
                    </a>
                  </li>

                  <li className="active">
                    <a href="#!">1</a>
                  </li>

                  <li>
                    <a href="#!">2</a>
                  </li>

                  <li>
                    <a href="#!">...</a>
                  </li>

                  <li>
                    <a href="#!">6</a>
                  </li>

                  <li>
                    <a href="#!">
                      <i className="fas fa-long-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col col-lg-4">
              <aside className="sidebar ps-lg-4">

                {/* Categories */}
                <div className="widget">
                  <div
                    className="widget_title"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_category"
                    aria-expanded="true"
                    aria-controls="collapse_category"
                  >
                    Categories
                  </div>

                  <div
                    className="collapse show"
                    id="collapse_category"
                  >
                    <div className="card card-body">

                      <div className="checkbox_item">
                        <input id="checkbox_dyxi" type="checkbox" />
                        <label htmlFor="checkbox_dyxi">
                          <span>How Dyxi Works</span>
                          <span>(3)</span>
                        </label>
                      </div>

                      <div className="checkbox_item">
                        <input id="checkbox_parents" type="checkbox" />
                        <label htmlFor="checkbox_parents">
                          <span>Parents</span>
                          <span>(3)</span>
                        </label>
                      </div>

                      <div className="checkbox_item">
                        <input
                          id="checkbox_personalised"
                          type="checkbox"
                        />
                        <label htmlFor="checkbox_personalised">
                          <span>Personalised Learning</span>
                          <span>(2)</span>
                        </label>
                      </div>

                      <div className="checkbox_item">
                        <input id="checkbox_learning" type="checkbox" />
                        <label htmlFor="checkbox_learning">
                          <span>Learning</span>
                          <span>(2)</span>
                        </label>
                      </div>

                      <div className="checkbox_item">
                        <input id="checkbox_reading" type="checkbox" />
                        <label htmlFor="checkbox_reading">
                          <span>Reading</span>
                          <span>(1)</span>
                        </label>
                      </div>

                      <div className="checkbox_item">
                        <input id="checkbox_focus" type="checkbox" />
                        <label htmlFor="checkbox_focus">
                          <span>Focus &amp; Attention</span>
                          <span>(1)</span>
                        </label>
                      </div>

                      <div className="checkbox_item">
                        <input id="checkbox_progress" type="checkbox" />
                        <label htmlFor="checkbox_progress">
                          <span>Learning Progress</span>
                          <span>(1)</span>
                        </label>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="widget">
                  <div
                    className="widget_title"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_blog"
                    aria-expanded="true"
                    aria-controls="collapse_blog"
                  >
                    Related Articles
                  </div>

                  <div
                    className="collapse show"
                    id="collapse_blog"
                  >
                    <div className="card card-body">
                      <ul className="blog_small_group unordered_list_block">

                        <li>
                          <a
                            className="blog_small"
                            href="/blog-details"
                          >
                            <span className="item_image">
                              <img
                                src="/assets/images/blog/smallblog1.jpg"
                                alt="Dyxi learning progress"
                              />
                            </span>

                            <span className="item_content">
                              <span className="item_author">
                                <i className="fas fa-user-alt"></i>{" "}
                                by Dyxi Team
                              </span>

                              <strong className="item_title">
                                How Dyxi Helps Parents Understand Their
                                Child&apos;s Learning
                              </strong>

                              <small className="item_post_date">
                                Aug 18, 2026
                              </small>
                            </span>
                          </a>
                        </li>

                        <li>
                          <a
                            className="blog_small"
                            href="/blog-details"
                          >
                            <span className="item_image">
                              <img
                                src="/assets/images/blog/smallblog2.jpg"
                                alt="Dyxi dashboard"
                              />
                            </span>

                            <span className="item_content">
                              <span className="item_author">
                                <i className="fas fa-user-alt"></i>{" "}
                                by Dyxi Team
                              </span>

                              <strong className="item_title">
                                What Parents Can See From the Dyxi Dashboard
                              </strong>

                              <small className="item_post_date">
                                Jul 21, 2026
                              </small>
                            </span>
                          </a>
                        </li>

                        <li>
                          <a
                            className="blog_small"
                            href="/blog-details"
                          >
                            <span className="item_image">
                              <img
                                src="/assets/images/blog/smallblog3.jpg"
                                alt="Personalised learning"
                              />
                            </span>

                            <span className="item_content">
                              <span className="item_author">
                                <i className="fas fa-user-alt"></i>{" "}
                                by Dyxi Team
                              </span>

                              <strong className="item_title">
                                Why Every Child Needs a Learning Experience
                                That Fits Them
                              </strong>

                              <small className="item_post_date">
                                Aug 11, 2026
                              </small>
                            </span>
                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

                {/* What Parents Are Asking */}
                <div className="widget">
                  <div
                    className="widget_title"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_recent_comments"
                    aria-expanded="true"
                    aria-controls="collapse_recent_comments"
                  >
                    What Parents Are Asking
                  </div>

                  <div
                    className="collapse show"
                    id="collapse_recent_comments"
                  >
                    <div className="card card-body">
                      <ul className="recent_comments_list unordered_list_block">

                        <li>
                          <a href="#!">
                            <i className="fas fa-question-circle"></i>
                            <strong>Learning Progress</strong>
                          </a>

                          <span>
                            How does Dyxi help parents understand their
                            child&apos;s progress?
                          </span>
                        </li>

                        <li>
                          <a href="#!">
                            <i className="fas fa-question-circle"></i>
                            <strong>Parent Dashboard</strong>
                          </a>

                          <span>
                            What can parents see from the Dyxi dashboard?
                          </span>
                        </li>

                        <li>
                          <a href="#!">
                            <i className="fas fa-question-circle"></i>
                            <strong>Personalised Learning</strong>
                          </a>

                          <span>
                            How does Dyxi support a more personalised learning
                            experience?
                          </span>
                        </li>

                        <li>
                          <a href="#!">
                            <i className="fas fa-question-circle"></i>
                            <strong>Getting Started</strong>
                          </a>

                          <span>
                            Who is Dyxi designed for and how can families get
                            started?
                          </span>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="widget">
                  <div
                    className="widget_title"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_tags_list"
                    aria-expanded="true"
                    aria-controls="collapse_tags_list"
                  >
                    Tags
                  </div>

                  <div
                    className="collapse show"
                    id="collapse_tags_list"
                  >
                    <div className="card card-body">
                      <ul className="tags_list style_2 unordered_list">

                        <li>
                          <a href="#!">Dyxi</a>
                        </li>

                        <li>
                          <a href="#!">Parents</a>
                        </li>

                        <li>
                          <a href="#!">Learning</a>
                        </li>

                        <li>
                          <a href="#!">Learning Progress</a>
                        </li>

                        <li>
                          <a href="#!">Personalised Learning</a>
                        </li>

                        <li>
                          <a href="#!">Reading</a>
                        </li>

                        <li>
                          <a href="#!">Focus</a>
                        </li>

                        <li>
                          <a href="#!">Education</a>
                        </li>

                        <li>
                          <a href="#!">Child Development</a>
                        </li>

                        <li>
                          <a href="#!">Learning Insights</a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

                {/* Archives */}
                <div className="widget">
                  <div
                    className="widget_title"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_archives_month"
                    aria-expanded="true"
                    aria-controls="collapse_archives_month"
                  >
                    Archives
                  </div>

                  <div
                    className="collapse show"
                    id="collapse_archives_month"
                  >
                    <div className="card card-body">
                      <ul className="info_list unordered_list_block">

                        <li>
                          <a href="#!">
                            <i className="fas fa-square"></i>
                            <span>August 2026</span>
                          </a>
                        </li>

                        <li>
                          <a href="#!">
                            <i className="fas fa-square"></i>
                            <span>July 2026</span>
                          </a>
                        </li>

                        <li>
                          <a href="#!">
                            <i className="fas fa-square"></i>
                            <span>June 2026</span>
                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

                {/* Calendar */}
                <div className="widget">
                  <div
                    className="widget_title"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_calendar"
                    aria-expanded="true"
                    aria-controls="collapse_calendar"
                  >
                    Calendar
                  </div>

                  <div
                    className="collapse show"
                    id="collapse_calendar"
                  >
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

      {/* Newsletter */}
      <section className="newslatter_section">
        <div className="container">
          <div
            className="newslatter_box"
            style={{
              backgroundImage:
                "url('/assets/images/shape/shape_img_6.svg')",
            }}
          >
            <div className="row justify-content-center">
              <div className="col col-lg-6">
                <div className="section_heading text-center">
                  <h2 className="heading_text">
                    Get New Articles in Your Inbox
                  </h2>

                  <p className="heading_description mb-0">
                    Practical tips and useful ideas for parents, sent straight
                    to your email. No spam, and you can unsubscribe anytime.
                  </p>
                </div>

                <form action="#">
                  <div className="form_item m-0">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />

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