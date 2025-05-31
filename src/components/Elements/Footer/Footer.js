import Link from "next/link";
import Image from "next/image";
import { Instagram, Github, Mail, Linkedin } from "lucide-react";

const account = [
  {
    icon: Instagram,
    alt: "Github",
    href: "https://github.com/nastarynaz",
  },
  {
    icon: Github,
    alt: "Instagram",
    href: "https://www.instagram.com/nastakhoirunas/",
  },
  {
    icon: Linkedin,
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/khoirunas/",
  },
  {
    icon: Mail,
    alt: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=khoirunasmuhammad@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col bg-red-500 justify-center items-center text-white w-full">
      <div className="w-[80%] h-[97px] flex flex-row justify-evenly items-center">
        <Link href="/" className="flex flex-row items-end space-x-0.5 group">
          <p className="font-extrabold text-3xl text-shadow-lg">RR</p>
          <p className="font-bold">developer</p>
        </Link>
        <div>
          <p>Copyright @2025 RicoRynaz</p>
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          {account.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={`${item.icon}-${item.href}-${item.alt}`}
                href={item.href}
                target="_blank"
              >
                <IconComponent
                  className="h-5 w-5 text-white hover:text-gray-200 transition-colors"
                  aria-label={item.alt}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
