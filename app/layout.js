import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Dyxi — Learning should feel easier",
  description:
    "Dyxi helps children ages 3–12 build stronger learning skills through personalised activities, while giving parents a clearer view of their child's progress.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/cursor.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/slick-theme.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/vanilla-calendar.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <div id="body_wrap">
          <BackToTop />
          <Header />
          <main id="main_body">{children}</main>
          <Footer />
        </div>
        <SiteEffects />
      </body>
    </html>
  );
}
