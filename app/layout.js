import "@/src/styles/global.css";
import Navbar from "@/src/modules/Navbar";
import Footer from "@/src/modules/Footer";

export const metadata = {
  title: "Portofolio",
  description: "Nasta Khoirunas Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
