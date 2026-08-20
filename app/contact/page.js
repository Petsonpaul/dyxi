import Link from "next/link";

export const metadata = {
  title: "Contact Dyxi",
};

export default function Contact() {
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
                <h1 className="page_title">Get in Touch</h1>
                <p className="page_description">
                  Want to bring Dyxi to your school or practice? We&apos;d love
                  to hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="contact_section section_space_lg">
        <div className="container">
          <div className="row">
            <div className="col col-lg-5">
              <div className="pe-lg-5">
                <div className="section_heading">
                  <h2 className="heading_text">Contact Us</h2>
                  <p className="heading_description mb-0">
                    Reach out with questions about Dyxi, partnership
                    opportunities, or to get involved.
                  </p>
                </div>
                <div className="iconbox_item contact_info_iconbox">
                  <div className="item_icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">Email Address</h3>
                    <p className="mb-0">hello@dyxi.example</p>
                  </div>
                </div>
                <div className="iconbox_item contact_info_iconbox">
                  <div className="item_icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">Call Us</h3>
                    <p className="mb-0">Add your phone number</p>
                  </div>
                </div>
                <div className="iconbox_item contact_info_iconbox">
                  <div className="item_icon">
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">Reach Us</h3>
                    <p className="mb-0">Add your address</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-7">
              <div className="image_widget">
                <img
                  src="/assets/images/about/contact.jpg"
                  alt="Dyxi"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="contact_form_section section_space_lg bg_light decoration_wrap overflow-hidden">
        <div className="container decoration_wrap">
          <div className="row justify-content-center">
            <div className="col col-lg-7">
              <div className="section_heading text-center">
                <h2 className="heading_text mb-0">
                  Send Us a Message
                </h2>
              </div>
            </div>
          </div>

          <form action="#">
            <div className="row justify-content-center">
              <div className="col col-lg-8">
                <div className="row">
                  <div className="col col-md-6">
                    <div className="form_item m-0">
                      <label htmlFor="input_name" className="input_title">
                        Name
                      </label>
                      <input
                        id="input_name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form_item m-0">
                      <label htmlFor="input_email" className="input_title">
                        Email
                      </label>
                      <input
                        id="input_email"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form_item m-0">
                      <label htmlFor="input_role" className="input_title">
                        I am a...
                      </label>
                      <select name="role" id="input_role" defaultValue="role">
                        <option value="role" disabled>
                          Choose one
                        </option>
                        <option value="parent">Parent / Guardian</option>
                        <option value="consultant">Education Consultant</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form_item m-0">
                      <label htmlFor="input_subject" className="input_title">
                        Subject
                      </label>
                      <input
                        id="input_subject"
                        type="text"
                        name="subject"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form_item">
                      <label htmlFor="input_message" className="input_title">
                        Message
                      </label>
                      <textarea
                        id="input_message"
                        name="message"
                        placeholder="Type Your Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn_dark w-100 b-block">
                      <span>
                        <small>Send Your Message</small>
                        <small>Send Your Message</small>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="deco_item shape_img_1 wow fadeInUp" data-wow-delay=".2s">
            <img src="/assets/images/shape/shape_img_7.png" alt="Dyxi" />
          </div>
          <div className="deco_item shape_img_2 wow fadeInUp" data-wow-delay=".4s">
            <img src="/assets/images/shape/shape_img_7.png" alt="Dyxi" />
          </div>
        </div>

        <div className="deco_item shape_img_3 wow fadeInLeft" data-wow-delay=".2s">
          <img src="/assets/images/shape/shape_img_7.png" alt="Dyxi" />
        </div>
        <div className="deco_item shape_img_4 wow fadeInRight" data-wow-delay=".4s">
          <img src="/assets/images/shape/shape_img_7.png" alt="Dyxi" />
        </div>
      </section>
    </>
  );
}
