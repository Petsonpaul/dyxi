"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. We will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        role: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* =========================================================
          PAGE BANNER
      ========================================================= */}
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
                  Have questions about Dyxi, our learning platform, or
                  how Dyxi can support your child? We&apos;d love to
                  hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT INFORMATION
      ========================================================= */}
      <section className="contact_section section_space_lg">
        <div className="container">
          <div className="row align-items-center">

            {/* CONTACT DETAILS */}
            <div className="col col-lg-5">
              <div className="pe-lg-5">

                <div className="section_heading">
                  <h2 className="heading_text">
                    Contact Us
                  </h2>

                  <p className="heading_description mb-0">
                    Whether you&apos;re a parent, education consultant,
                    school, or organisation, our team is ready to help.
                  </p>
                </div>

                {/* EMAIL */}
                <div className="iconbox_item contact_info_iconbox">
                  <div className="item_icon">
                    <i className="fas fa-envelope"></i>
                  </div>

                  <div className="item_content">
                    <h3 className="item_title">
                      Email Address
                    </h3>

                    <p className="mb-0">
                      <a href="mailto:info@dyxi.site">
                        info@dyxi.site
                      </a>
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="iconbox_item contact_info_iconbox">
                  <div className="item_icon">
                    <i className="fas fa-phone"></i>
                  </div>

                  <div className="item_content">
                    <h3 className="item_title">
                      Call Us
                    </h3>

                    <p className="mb-0">
                      <a href="tel:+2349139990507">
                        +234 913 999 0507
                      </a>
                    </p>
                  </div>
                </div>

                {/* SUPPORT */}
                <div className="iconbox_item contact_info_iconbox">
                  <div className="item_icon">
                    <i className="fas fa-comments"></i>
                  </div>

                  <div className="item_content">
                    <h3 className="item_title">
                      We&apos;re Here to Help
                    </h3>

                    <p className="mb-0">
                      Contact us for questions, partnerships,
                      product information, or support.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* IMAGE */}
            <div className="col col-lg-7">
              <div className="image_widget">
                <img
                  src="/assets/images/about/contact.jpg"
                  alt="Contact Dyxi"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM
      ========================================================= */}
      <section className="contact_form_section section_space_lg bg_light decoration_wrap overflow-hidden">
        <div className="container decoration_wrap">

          <div className="row justify-content-center">
            <div className="col col-lg-7">

              <div className="section_heading text-center">
                <h2 className="heading_text mb-0">
                  Send Us a Message
                </h2>

                <p className="heading_description">
                  Fill in the form below and our team will get back
                  to you.
                </p>
              </div>

            </div>
          </div>

          {/* STATUS MESSAGE */}
          {status.message && (
            <div className="row justify-content-center mb-4">
              <div className="col col-lg-8">
                <div
                  style={{
                    padding: "15px 20px",
                    borderRadius: "8px",
                    background:
                      status.type === "success"
                        ? "#e8f7ee"
                        : "#fdecec",
                    color:
                      status.type === "success"
                        ? "#167c3a"
                        : "#b42318",
                    textAlign: "center",
                  }}
                >
                  {status.message}
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">

              <div className="col col-lg-8">

                <div className="row">

                  {/* NAME */}
                  <div className="col col-md-6">
                    <div className="form_item">
                      <label
                        htmlFor="input_name"
                        className="input_title"
                      >
                        Name
                      </label>

                      <input
                        id="input_name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="col col-md-6">
                    <div className="form_item">
                      <label
                        htmlFor="input_email"
                        className="input_title"
                      >
                        Email
                      </label>

                      <input
                        id="input_email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>

                  {/* ROLE */}
                  <div className="col col-md-6">
                    <div className="form_item">
                      <label
                        htmlFor="input_role"
                        className="input_title"
                      >
                        I am a...
                      </label>

                      <select
                        name="role"
                        id="input_role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Choose one
                        </option>

                        <option value="parent">
                          Parent / Guardian
                        </option>

                        <option value="consultant">
                          Education Consultant
                        </option>

                        <option value="school">
                          School / Organisation
                        </option>

                        <option value="other">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div className="col col-md-6">
                    <div className="form_item">
                      <label
                        htmlFor="input_subject"
                        className="input_title"
                      >
                        Subject
                      </label>

                      <input
                        id="input_subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="col">
                    <div className="form_item">
                      <label
                        htmlFor="input_message"
                        className="input_title"
                      >
                        Message
                      </label>

                      <textarea
                        id="input_message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type Your Message"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn_dark w-100"
                      disabled={loading}
                      style={{
                        opacity: loading ? 0.7 : 1,
                        cursor: loading
                          ? "not-allowed"
                          : "pointer",
                      }}
                    >
                      <span>
                        <small>
                          {loading
                            ? "Sending..."
                            : "Send Your Message"}
                        </small>

                        <small>
                          {loading
                            ? "Sending..."
                            : "Send Your Message"}
                        </small>
                      </span>
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </form>

          {/* DECORATIONS */}
          <div
            className="deco_item shape_img_1 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <img
              src="/assets/images/shape/shape_img_7.png"
              alt=""
            />
          </div>

          <div
            className="deco_item shape_img_2 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <img
              src="/assets/images/shape/shape_img_7.png"
              alt=""
            />
          </div>

        </div>

        <div
          className="deco_item shape_img_3 wow fadeInLeft"
          data-wow-delay=".2s"
        >
          <img
            src="/assets/images/shape/shape_img_7.png"
            alt=""
          />
        </div>

        <div
          className="deco_item shape_img_4 wow fadeInRight"
          data-wow-delay=".4s"
        >
          <img
            src="/assets/images/shape/shape_img_7.png"
            alt=""
          />
        </div>

      </section>
    </>
  );
}