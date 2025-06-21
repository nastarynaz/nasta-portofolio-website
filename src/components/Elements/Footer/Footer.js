import Link from "next/link";
import { Instagram, Github, Mail, Linkedin, Music, MapPin } from "lucide-react";
import { B1, B2, H4 } from "@/components/Elements/Typography";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Journey", href: "/journey" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
];

const contacts = [
  {
    icon: MapPin,
    alt: "Address",
    href: "https://maps.app.goo.gl/t1VF1s8ZjDzoLjkF8",
    color: "white",
  },
  {
    icon: Mail,
    alt: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=khoirunasmuhammad@gmail.com",
    color: "white",
  },
];

const socialMedia = [
  {
    icon: Linkedin,
    alt: "LinkedIn",
    caption: "linkedin.com/in/khoirunas",
    href: "https://www.linkedin.com/in/khoirunas/",
    color: "text-blue-400",
  },
  {
    icon: Github,
    alt: "Github",
    caption: "github.com/nastarynaz",
    href: "https://github.com/nastarynaz",
    color: "text-gray-300",
  },
  {
    icon: Instagram,
    alt: "Instagram",
    caption: "instagram.com/nastakhoirunas",
    href: "https://www.instagram.com/nastakhoirunas/",
    color: "text-pink-400",
  },
  {
    icon: Music,
    alt: "Spotify",
    caption: "spotify.com/nassry",
    href: "https://open.spotify.com/user/31wf7xoqpa2uarjqtmyibevitbma?si=850c3ca9f39a4c48",
    color: "text-green-400",
  },
];

export default function Footer() {
  return (
    <footer className="bg-red-500 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 group">
              <div className="flex items-end space-x-1">
                <span className="font-extrabold text-[6vw] sm:text-3xl lg:text-4xl">
                  RR
                </span>
                <span className="font-bold text-[6vw] sm:text-base">
                  developer
                </span>
              </div>
            </Link>
            <B1 className="text-red-100 leading-relaxed">
              Crafting digital experiences creativity and professionalism
            </B1>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <H4 className="mb-4 border-b-2 border-white pb-1 inline-block">
              Quick Links
            </H4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-red-100 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                  >
                    <B2>{link.name}</B2>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <H4 className=" mb-4 border-b-2 border-white pb-1 inline-block">
              Contact
            </H4>
            <div className="space-y-3">
              {contacts.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <div key={contact.alt} className="flex items-start space-x-2">
                    <IconComponent
                      className={`h-4 w-4 mt-1 flex-shrink-0 ${contact.color}`}
                    />
                    <div>
                      <Link
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-100 hover:text-white transition-colors duration-200 text-xs lg:text-sm break-words"
                      >
                        <B1>{contact.alt}</B1>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <H4 className=" mb-4 border-b-2 border-white pb-1 inline-block">
              Social Media
            </H4>
            <div className="space-y-3">
              {socialMedia.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.alt}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-red-100 hover:text-white transition-colors duration-200 group"
                  >
                    <IconComponent
                      className={`h-5 w-5 ${social.color} group-hover:scale-110 transition-transform duration-200`}
                    />
                    <B1>{social.alt}</B1>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-red-400 mt-8 pt-6">
          <B1 className="text-red-100 text-center lg:text-left">
            Copyright ©2025 Nasta Khoirunas. All rights reserved
          </B1>
        </div>
      </div>
    </footer>
  );
}
