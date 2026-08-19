
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [currency, setCurrency] = useState("NGN");

  const starterPrice = {
    NGN: "₦35,000",
    USD: "$40",
  };

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="hero_banner style_1">
        <div className="container">
          <div className="content_wrap">
            <div className="row align-items-center">

              {/* HERO TEXT */}
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
                  style={{ marginBottom: "0" }}
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

                {/* GOOGLE PLAY */}
                <div
                  className="hero_android_download"
                  style={{ marginTop: "30px" }}
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

              {/* HERO IMAGE */}
              <div className="col col-lg-5">
                <div
                  className="banner_image_1 decoration_wrap"
                  style={{
                    position: "relative",
                    padding: "20px",
                  }}
                >
                  <div
                    className="image_wrap"
                    style={{
                      position: "relative",
                      zIndex: 2,
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
                    }}
                  >
                    <img
                      src="/assets/images/about/herosec.jpg"
                      alt="Children learning with Dyxi"
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  {/* Floating learning badge */}
                  <div
                    style={{
                      position: "absolute",
                      zIndex: 4,
                      left: "0",
                      bottom: "45px",
                      background: "#ffffff",
                      padding: "14px 20px",
                      borderRadius: "14px",
                      boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
                    }}
                  >
                
                  </div>

                  {/* Decorative shapes */}
                  <div
                    className="deco_item shape_img_1"
                    data-parallax='{"y" : -130, "smoothness": 6}'
                  >
                 
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT IS DYXI
      ========================================================= */}
      <section className="expect_from_course section_space_lg">
        <div className="container">
          <div className="row">

            <div className="col col-lg-6">
              <div className="section_heading">
                <h2 className="heading_text">
                  What Is Dyxi?
                </h2>

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
                <img
                  src="/assets/images/about/aboutdyxi.jpg"
                  alt="Dyxi learning platform"
                />
              </div>
            </div>

            <div className="col col-lg-6">
              <div className="row">

                <div className="col col-md-6">
                  <div className="service_item" data-magnetic>
                    <div className="item_icon">
                      <img
                        src="/assets/images/service/icon_academic_cap.svg"
                        alt="Learning"
                      />
                    </div>

                    <div className="item_content">
                      <h3 className="item_title">
                        Built for Ages 3–9
                      </h3>

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
                        alt="Learning through play"
                      />
                    </div>

                    <div className="item_content">
                      <h3 className="item_title">
                        Learning Through Play
                      </h3>

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
                        alt="Personalised learning"
                      />
                    </div>

                    <div className="item_content">
                      <h3 className="item_title">
                        Personalised for Them
                      </h3>

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
                        alt="Progress tracking"
                      />
                    </div>

                    <div className="item_content">
                      <h3 className="item_title">
                        Clear Progress for Parents
                      </h3>

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

      {/* =========================================================
          HOW DYXI WORKS + VIDEO
      ========================================================= */}
      <section
        className="advertisement_section"
        style={{
          background: "linear-gradient(135deg, #18212b 0%, #263846 100%)",
          padding: "100px 0",
          overflow: "hidden",
        }}
      >
        <div className="container">

          <div className="row align-items-center">

            {/* VIDEO TEXT */}
            <div className="col col-lg-5">
              <div className="section_heading mb-lg-0">

                <span
                  style={{
                    display: "inline-block",
                    fontSize: "13px",
                    fontWeight: "700",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    marginBottom: "15px",
                    color: "#ffffff",
                    opacity: 0.75,
                  }}
                >
                  Discover Dyxi
                </span>

                <h2
                  className="heading_text text-white"
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  See How Dyxi Works
                </h2>

                <p
                  className="heading_description mb-0 text-white"
                  style={{
                    opacity: 0.82,
                    lineHeight: 1.8,
                  }}
                >
                  As your child plays and learns in the app, Dyxi observes
                  patterns like response timing, accuracy and repeated
                  attempts. These insights help personalise what comes next.
                </p>

                <p
                  className="text-white"
                  style={{
                    marginTop: "18px",
                    opacity: 0.82,
                    lineHeight: 1.8,
                  }}
                >
                  Parents and education consultants can then follow the
                  child&apos;s learning activity and progress through the
                  Dyxi web platform.
                </p>

                <div className="btn_wrap pb-0">
                  <Link
                    className="btn btn_primary"
                    href="/technology"
                  >
                    <span>
                      <small>Learn More</small>
                      <small>Learn More</small>
                    </span>
                  </Link>
                </div>

              </div>
            </div>

            {/* VIDEO */}
            <div className="col col-lg-7">
              <div
                className="dyxi_video_card"
                style={{
                  position: "relative",
                  marginTop: "30px",
                  padding: "12px",
                  borderRadius: "28px",
                  background: "rgba(255,255,255,0.12)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.28)",
                  backdropFilter: "blur(8px)",
                }}
              >

                <div
                  className="video_wrap"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "20px",
                    background: "#111",
                  }}
                >

                  <img
                    src="https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?w=1500&h=900&fit=crop&auto=format&q=85"
                    alt="How Dyxi Works"
                    style={{
                      width: "100%",
                      height: "440px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* Dark overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.38))",
                    }}
                  />

                  {/* Play button */}
                  <a
                    className="video_play_btn popup_video"
                    href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    aria-label="Play How Dyxi Works video"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "82px",
                      height: "82px",
                      borderRadius: "50%",
                      background: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 15px 45px rgba(0,0,0,0.28)",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      className="icon"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <i
                        className="fas fa-play"
                        style={{
                          fontSize: "22px",
                          marginLeft: "4px",
                        }}
                      ></i>
                    </span>
                  </a>

                </div>

                {/* Video caption */}
               

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          WHO DYXI IS FOR
      ========================================================= */}
      <section className="courses_info_section section_space_lg">
        <div className="container">

          <div className="section_heading text-center">
            <h2 className="heading_text">
              Who Dyxi Is For
            </h2>

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
                    alt="Parents"
                  />
                </div>

                <div className="item_content">
                  <h3 className="item_title">
                    Parents
                  </h3>

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
                    alt="Children"
                  />
                </div>

                <div className="item_content">
                  <h3 className="item_title">
                    Children
                  </h3>

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
                    alt="Education consultants"
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

      {/* =========================================================
          PRICING
      ========================================================= */}
      <section className="pricing_section section_space_lg">
        <div className="container decoration_wrap">

          <div className="section_heading text-center">

            <h2 className="heading_text">
              Simple Plans for Families
            </h2>

            <p className="heading_description mb-4">
              One simple monthly package to support your child&apos;s
              learning journey.
            </p>

            {/* Currency Switcher */}
            <div
              className="currency_switcher"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                marginBottom: "40px",
              }}
            >

              <button
                type="button"
                onClick={() => setCurrency("NGN")}
                className={currency === "NGN" ? "active" : ""}
                style={{
                  padding: "10px 22px",
                  border: "1px solid #222",
                  background:
                    currency === "NGN" ? "#222" : "transparent",
                  color:
                    currency === "NGN" ? "#fff" : "#222",
                  cursor: "pointer",
                  borderRadius: "4px",
                  fontWeight: "600",
                }}
              >
                ₦ Naira
              </button>

              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={currency === "USD" ? "active" : ""}
                style={{
                  padding: "10px 22px",
                  border: "1px solid #222",
                  background:
                    currency === "USD" ? "#222" : "transparent",
                  color:
                    currency === "USD" ? "#fff" : "#222",
                  cursor: "pointer",
                  borderRadius: "4px",
                  fontWeight: "600",
                }}
              >
                $ USD
              </button>

            </div>
          </div>

          <div className="row justify-content-center">

            {/* STARTER PLAN */}
            <div className="col col-lg-5 col-md-8">
              <div className="pricing_card text-center">

                <h3 className="card_heading">
                  Starter
                </h3>

                <div className="pricing_wrap">
                  <span className="price_value">
                    {starterPrice[currency]}
                  </span>

                  <small className="d-block">
                    per month
                  </small>
                </div>

                <hr />

                <ul className="info_list unordered_list_block text-start">

                  <li>
                    <i className="fas fa-caret-right"></i>
                    <span>
                      Access to Dyxi learning activities
                    </span>
                  </li>

                  <li>
                    <i className="fas fa-caret-right"></i>
                    <span>
                      Personalised learning experience
                    </span>
                  </li>

                  <li>
                    <i className="fas fa-caret-right"></i>
                    <span>
                      Child progress tracking
                    </span>
                  </li>

                  <li>
                    <i className="fas fa-caret-right"></i>
                    <span>
                      Parent dashboard
                    </span>
                  </li>

                  <li>
                    <i className="fas fa-caret-right"></i>
                    <span>
                      One child profile
                    </span>
                  </li>

                </ul>

                <div className="btn_wrap pb-0">
                  <Link
                    className="btn btn_primary"
                    href="/signup"
                  >
                    <span>
                      <small>Get Started</small>
                      <small>Get Started</small>
                    </span>
                  </Link>
                </div>

              </div>
            </div>

          </div>

          {/* Decorative shapes */}
          <div
            className="deco_item shape_img_1"
            data-parallax='{"y" : 130, "smoothness": 6}'
          >
            <img
              src="/assets/images/shape/shape_img_4.png"
              alt=""
            />
          </div>

          <div
            className="deco_item shape_img_2"
            data-parallax='{"y" : -130, "smoothness": 6}'
          >
            <img
              src="/assets/images/shape/shape_img_5.png"
              alt=""
            />
          </div>

        </div>
      </section>

      {/* =========================================================
          PRICING FAQ
      ========================================================= */}
      <section className="faq_section section_space_lg">
        <div className="container">

          <div className="section_heading text-center mb-3">
            <div className="row justify-content-center">
              <div className="col col-lg-7">

                <h2 className="heading_text">
                  Questions Before You Subscribe
                </h2>

                <p className="heading_description mb-0">
                  Have questions about the Dyxi monthly plan?
                  We&apos;re here to help.
                </p>

              </div>
            </div>
          </div>

          <div className="row justify-content-center">

            <div className="col col-lg-6">

              <div
                className="accordion"
                id="home_faq_accordion_1"
              >

                <div className="accordion-item">
                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#home_faq_one"
                    aria-expanded="true"
                  >
                    What&apos;s included in the monthly plan?
                  </div>

                  <div
                    id="home_faq_one"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#home_faq_accordion_1"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        The Dyxi Starter plan gives your child access
                        to learning activities, personalised learning,
                        progress tracking and a parent dashboard.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#home_faq_two"
                    aria-expanded="false"
                  >
                    How much does Dyxi cost?
                  </div>

                  <div
                    id="home_faq_two"
                    className="accordion-collapse collapse"
                    data-bs-parent="#home_faq_accordion_1"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        The Starter monthly package is{" "}
                        {currency === "NGN"
                          ? "₦35,000"
                          : "$40"}{" "}
                        per month.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#home_faq_three"
                    aria-expanded="false"
                  >
                    Can I change the currency?
                  </div>

                  <div
                    id="home_faq_three"
                    className="accordion-collapse collapse"
                    data-bs-parent="#home_faq_accordion_1"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        Yes. Use the Naira or USD buttons in the pricing
                        section to switch between ₦35,000 and $40.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col col-lg-6">

              <div
                className="accordion"
                id="home_faq_accordion_2"
              >

                <div className="accordion-item">
                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#home_faq_four"
                    aria-expanded="true"
                  >
                    Is Dyxi billed monthly?
                  </div>

                  <div
                    id="home_faq_four"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#home_faq_accordion_2"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        Yes. The Starter package is a monthly
                        subscription.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#home_faq_five"
                    aria-expanded="false"
                  >
                    How do I get started?
                  </div>

                  <div
                    id="home_faq_five"
                    className="accordion-collapse collapse"
                    data-bs-parent="#home_faq_accordion_2"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        Click the Get Started button and continue
                        through the signup process.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#home_faq_six"
                    aria-expanded="false"
                  >
                    Can I cancel my subscription?
                  </div>

                  <div
                    id="home_faq_six"
                    className="accordion-collapse collapse"
                    data-bs-parent="#home_faq_accordion_2"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        Subscription and cancellation options can be
                        managed through your Dyxi account.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
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
                    Ready to see Dyxi for your family?
                  </h2>

                  <p className="heading_description mb-0">
                    Leave your email and we&apos;ll reach out with
                    updates on Dyxi and how to get started.
                  </p>

                </div>

                <form action="#">
                  <div className="form_item m-0">

                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />

                    <button
                      type="submit"
                      className="btn btn_dark"
                    >
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
