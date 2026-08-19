"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SiteEffects() {
  const pathname = usePathname();
  const libsReady = useRef(false);

  // Sticky header + back-to-top, work with plain JS (no jQuery needed)
  useEffect(() => {
    const header = document.querySelector(".site_header");
    const backtotop = document.querySelector(".backtotop");

    const onScroll = () => {
      const scrolled = window.scrollY > 0;
      if (header) header.classList.toggle("sticky", scrolled);
      if (backtotop) {
        backtotop.style.display = window.scrollY > 200 ? "flex" : "none";
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Re-init WOW.js + jQuery-plugins (tilt, magnific popup, slick) after each
  // navigation, once the libraries have loaded.
  useEffect(() => {
    if (!libsReady.current) return;
    initLibs();
  }, [pathname]);

  function initLibs() {
    libsReady.current = true;
    const $ = window.jQuery;

    if (window.WOW) {
      new window.WOW({
        animateClass: "animated",
        offset: 100,
        mobile: true,
        duration: 400,
      }).init();
    }

    if (window.ParallaxScroll) {
      window.ParallaxScroll.init();
    }

    if ($) {
      // Dropdown menus (multi-level, hover-triggered like the original template)
      $(".dropdown")
        .off("mouseover.dyxi mouseout.dyxi")
        .on("mouseover.dyxi", function () {
          $(this).find("> .dropdown-menu").addClass("show");
        })
        .on("mouseout.dyxi", function () {
          $(this).find("> .dropdown-menu").removeClass("show");
        });

      if ($.fn.tilt) {
        $(".tilt").tilt({
          maxTilt: 12,
          perspective: 1000,
          scale: 1,
          speed: 1000,
          glare: false,
          maxGlare: 1,
        });
      }
      if ($.fn.magnificPopup) {
        $(".popup_video").magnificPopup({
          type: "iframe",
          preloader: false,
          removalDelay: 160,
          mainClass: "mfp-fade",
          fixedContentPos: false,
        });
      }
      if ($.fn.slick) {
        $(".common_carousel_1col").not(".slick-initialized").slick({
          dots: true,
          speed: 1000,
          arrows: true,
          infinite: true,
          autoplay: true,
          slidesToShow: 1,
          pauseOnHover: true,
          autoplaySpeed: 5000,
        });
      }
      if ($.fn.counterUp) {
        $(".counter_value_text").counterUp({ delay: 10, time: 1000 });
      }
    }
  }

  return (
    <>
      <Script src="/assets/js/jquery.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/popper.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script
        src="/assets/js/bootstrap-dropdown-ml-hack.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/cursor.js" strategy="afterInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/tilt.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/parallax.min.js" strategy="afterInteractive" />
      <Script
        src="/assets/js/parallax-scroll.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />
      <Script
        src="/assets/js/magnific-popup.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/counterup.min.js"
        strategy="afterInteractive"
        onLoad={initLibs}
      />
    </>
  );
}
