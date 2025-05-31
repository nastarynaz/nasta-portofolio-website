import "@/styles/global.css";
import Navbar from "@/components/Elements/Navbar/Navbar";
import Footer from "@/components/Elements/Footer/Footer";
import { cn } from "@/utils/helpers/cn";

import {
  JakartaExtraBold,
  JakartaBold,
  JakartaSemiBold,
  JakartaLight,
  JakartaRegular,
  JakartaMedium,
} from "@/utils/helpers/font";

export const metadata = {
  title: "Portofolio",
  description: "Nasta Khoirunas Portofolio",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          JakartaExtraBold.variable,
          JakartaBold.variable,
          JakartaSemiBold.variable,
          JakartaLight.variable,
          JakartaMedium.variable,
          JakartaRegular.variable,
          "antialiased"
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
