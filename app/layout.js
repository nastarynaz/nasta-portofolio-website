import "@/styles/global.css";
import Navbar from "@/components/Elements/Navbar/Navbar";
import Footer from "@/components/Elements/Footer/Footer";
import { cn } from "@/utils/helpers/cn";
import { AnimationProvider } from "@/utils/hooks/AnimationProvider";

import {
  JakartaExtraBold,
  JakartaBold,
  JakartaSemiBold,
  JakartaLight,
  JakartaRegular,
  JakartaMedium,
} from "@/utils/helpers/font";

export const metadata = {
  title: "Nasta Footprint",
  description: "Portfolio of Nasta Khoirunas",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
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
        <AnimationProvider>{children}</AnimationProvider>
        <Footer />
      </body>
    </html>
  );
}
