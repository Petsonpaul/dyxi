"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   REACT TILT CARD
   - No tilt.min.js
   - No jQuery
   - No TypeScript
   - Works safely in Next.js
========================================================= */

function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const frameRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsTouchDevice(
        window.matchMedia("(hover: none), (pointer: coarse)").matches
      );
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event) => {
    if (isTouchDevice) return;

    const card = cardRef.current;

    if (!card) return;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 7;
      const rotateX = ((centerY - y) / centerY) * 7;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(8px)
      `;
    });
  };

  const handleMouseLeave = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    const card = cardRef.current;

    if (!card) return;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0)
    `;
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform:
          "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)",
        transformStyle: "preserve-3d",
        transition: "transform 180ms ease-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   PRICING PAGE
========================================================= */

export default function PricingPage() {
  const [currency, setCurrency] = useState("NGN");

  const pricing = {
    NGN: {
      starter: "₦35,000",
      family: "₦60,000",
    },
    USD: {
      starter: "$40",
      family: "$70",
    },
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
              <div className="col col-lg-6">
                <h1 className="page_title">Pricing Plans</h1>

                <p className="page_description">
                  Simple monthly plans designed to give your child
                  personalised learning support while helping you follow
                  their progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRICING
      ========================================================= */}

      <section className="pricing_section section_space_lg pb-0">
        <div className="container decoration_wrap">

          {/* HEADING */}

          <div className="section_heading text-center">
            <h2 className="heading_text mb-3">
              Premium Price Packages
            </h2>

            <p className="heading_description mb-4">
              Choose the monthly plan that works best for your family.
            </p>

            {/* CURRENCY SWITCHER */}

            <div
              className="currency_switcher"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                marginBottom: "45px",
              }}
            >
              <button
                type="button"
                onClick={() => setCurrency("NGN")}
                className={`btn ${
                  currency === "NGN" ? "btn_dark" : "border_dark"
                }`}
              >
                <span>
                  <small>₦ Naira</small>
                  <small>₦ Naira</small>
                </span>
              </button>

              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`btn ${
                  currency === "USD" ? "btn_dark" : "border_dark"
                }`}
              >
                <span>
                  <small>$ USD</small>
                  <small>$ USD</small>
                </span>
              </button>
            </div>
          </div>

          {/* =====================================================
              PRICING CARDS
          ===================================================== */}

          <div className="pricing_cards_wrapper row align-items-center">

            {/* ===================================================
                STARTER
            =================================================== */}

            <div className="col col-lg-6">
              <TiltCard className="pricing_card text-center">

                <h3 className="card_heading">
                  Starter
                </h3>

                <div className="pricing_wrap">
                  <span className="price_value">
                    {pricing[currency].starter}
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
                      Full access to learning activities
                    </span>
                  </li>

                  <li>
                    <i className="fas fa-caret-right"></i>

                    <span>
                      Ongoing progress tracking
                    </span>
                  </li>

                  <li>
                    <i className="fas fa-caret-right"></i>

                    <span>
                      Parent dashboard access
                    </span>
                  </li>

                  <li>
                    <i className="fas fa-caret-right"></i>

                    <span>
                      1 child profile
                    </span>
                  </li>

                </ul>

                <div className="btn_wrap pb-0">
                  <Link
                    className="btn border_dark"
                    href="/signup"
                  >
                    <span>
                      <small>Get Started</small>
                      <small>Get Started</small>
                    </span>
                  </Link>
                </div>

              </TiltCard>
            </div>

            {/* ===================================================
                FAMILY
            =================================================== */}

            <div className="col col-lg-6">
              <TiltCard className="pricing_card text-center bg_dark">

                <div className="card_badge">
                  most popular
                </div>

                <h3 className="card_heading">
                  Family
                </h3>

                <div className="pricing_wrap">
                  <span className="price_value">
                    {pricing[currency].family}
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
                      Everything in Starter
                    </span>
                  </li>

                  <li>
                    <i className="fas fa-caret-right"></i>

                    <span>
                      Up to 3 child profiles
                    </span>
                  </li>

                  <li>
                    <i className="fas fa-caret-right"></i>

                    <span>
                      Detailed progress reports
                    </span>
                  </li>

                  <li>
                    <i className="fas fa-caret-right"></i>

                    <span>
                      Priority support
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

              </TiltCard>
            </div>

          </div>

          {/* =====================================================
              MONTHLY NOTE
          ===================================================== */}

          <div
            className="text-center"
            style={{
              marginTop: "35px",
            }}
          >
            <p className="mb-0">
              All Dyxi plans are billed monthly. You can change or
              cancel your subscription at any time.
            </p>
          </div>

          {/* =====================================================
              DECORATIVE SHAPES
          ===================================================== */}

          <div
            className="deco_item shape_img_1"
            data-parallax='{"y" : 130, "smoothness": 6}'
          >
            <img
              src="/assets/images/shape/shape_img_4.png"
              alt="Dyxi decorative shape"
            />
          </div>

          <div
            className="deco_item shape_img_2"
            data-parallax='{"y" : -130, "smoothness": 6}'
          >
            <img
              src="/assets/images/shape/shape_img_5.png"
              alt="Dyxi decorative shape"
            />
          </div>

        </div>
      </section>

      {/* =========================================================
          FAQ
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
                  Everything you need to know about Dyxi pricing
                  and subscriptions.
                </p>

              </div>

            </div>

          </div>

          <div className="row justify-content-center">

            {/* LEFT FAQ */}

            <div className="col col-lg-6">

              <div
                className="accordion"
                id="faq_accordion_1"
              >

                {/* FAQ 1 */}

                <div className="accordion-item">

                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_one"
                    aria-expanded="true"
                  >
                    What&apos;s included in every plan?
                  </div>

                  <div
                    id="collapse_one"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faq_accordion_1"
                  >

                    <div className="accordion-body">

                      <p className="mb-0">
                        Every Dyxi plan includes access to learning
                        activities for your child and a parent dashboard
                        for following progress over time.
                      </p>

                    </div>

                  </div>

                </div>

                {/* FAQ 2 */}

                <div className="accordion-item">

                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_two"
                    aria-expanded="false"
                  >
                    How much is the Starter plan?
                  </div>

                  <div
                    id="collapse_two"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq_accordion_1"
                  >

                    <div className="accordion-body">

                      <p className="mb-0">
                        The Starter plan is ₦35,000 per month when
                        paying in Naira, or $40 per month when paying
                        in US Dollars.
                      </p>

                    </div>

                  </div>

                </div>

                {/* FAQ 3 */}

                <div className="accordion-item">

                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_three"
                    aria-expanded="false"
                  >
                    Can I add more than one child?
                  </div>

                  <div
                    id="collapse_three"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq_accordion_1"
                  >

                    <div className="accordion-body">

                      <p className="mb-0">
                        Yes. The Family plan supports up to three
                        child profiles under one account.
                      </p>

                    </div>

                  </div>

                </div>

                {/* FAQ 4 */}

                <div className="accordion-item">

                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_four"
                    aria-expanded="false"
                  >
                    Is Dyxi billed monthly?
                  </div>

                  <div
                    id="collapse_four"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq_accordion_1"
                  >

                    <div className="accordion-body">

                      <p className="mb-0">
                        Yes. Dyxi is a monthly subscription service.
                        There is no annual plan displayed at this time.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT FAQ */}

            <div className="col col-lg-6">

              <div
                className="accordion"
                id="faq_accordion_2"
              >

                {/* FAQ 5 */}

                <div className="accordion-item">

                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#a2_collapse_one"
                    aria-expanded="true"
                  >
                    Can I switch plans later?
                  </div>

                  <div
                    id="a2_collapse_one"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faq_accordion_2"
                  >

                    <div className="accordion-body">

                      <p className="mb-0">
                        Yes. You can move between available plans
                        as your family&apos;s needs change.
                      </p>

                    </div>

                  </div>

                </div>

                {/* FAQ 6 */}

                <div className="accordion-item">

                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#a2_collapse_two"
                    aria-expanded="false"
                  >
                    Can I pay in Naira or US Dollars?
                  </div>

                  <div
                    id="a2_collapse_two"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq_accordion_2"
                  >

                    <div className="accordion-body">

                      <p className="mb-0">
                        Yes. Use the currency switcher above to view
                        the available pricing in Naira or US Dollars.
                      </p>

                    </div>

                  </div>

                </div>

                {/* FAQ 7 */}

                <div className="accordion-item">

                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#a2_collapse_three"
                    aria-expanded="false"
                  >
                    Where can I go for help?
                  </div>

                  <div
                    id="a2_collapse_three"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq_accordion_2"
                  >

                    <div className="accordion-body">

                      <p className="mb-0">
                        Visit our Contact page if you have questions
                        about plans, billing, or the Dyxi platform.
                      </p>

                    </div>

                  </div>

                </div>

                {/* FAQ 8 */}

                <div className="accordion-item">

                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#a2_collapse_four"
                    aria-expanded="false"
                  >
                    Can I cancel at any time?
                  </div>

                  <div
                    id="a2_collapse_four"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq_accordion_2"
                  >

                    <div className="accordion-body">

                      <p className="mb-0">
                        Yes. Dyxi is a monthly subscription, so you
                        can cancel whenever you choose.
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
                    Ready to Get Started With Dyxi?
                  </h2>

                  <p className="heading_description mb-0">
                    Choose your plan and start giving your child
                    personalised learning support.
                  </p>

                </div>

                <div
                  className="btn_wrap justify-content-center"
                  style={{
                    display: "flex",
                  }}
                >

                  <Link
                    className="btn btn_dark"
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

        </div>

      </section>
    </>
  );
}