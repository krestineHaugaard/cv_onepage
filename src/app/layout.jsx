import "../styles/reset.css";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CV Krestine Haugaard",
  description:
    "This onepage site contains a overview of skills and assets from studying multimedia design at KEA",
};

export default function RootLayout({ children }) {
  const theme = (e) => {
    console.log("is this working", e);
  };
  return (
    <html lang="en">
      <body data-theme="">
        <Header onChange={theme} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
