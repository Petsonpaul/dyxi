"use client";

export default function BackToTop() {
  return (
    <div className="backtotop" style={{ display: "none" }}>
      <a
        href="#"
        className="scroll"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <i className="far fa-arrow-up"></i>
      </a>
    </div>
  );
}
