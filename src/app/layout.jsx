import "../styles/reset.css";
import "../styles/globals.css";
import Header from "@/components/Header";
import StyleElement from "@/components/StyleElement";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CV Krestine Haugaard",
  description:
    "This onepage site contains a overview of skills and assets from studying multimedia design at KEA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-theme="dark" className="content">
        <Header />
        <StyleElement
          outerBox="style_outer_box top"
          innerBox="style_inner_box top "
        />
        {children}
        <StyleElement
          outerBox="style_outer_box bottom"
          innerBox="style_inner_box bottom"
        />
        <Footer />
      </body>
    </html>
  );
}
