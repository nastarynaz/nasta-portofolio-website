"use client";
import { useRef, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { Mail, Linkedin, Instagram, Github, Music } from "lucide-react";
import { B1 } from "@/components/Elements/Typography";

const contacts = [
  {
    icon: Mail,
    alt: "Gmail",
    caption: "khoirunasmuhammad@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=khoirunasmuhammad@gmail.com",
    color: "text-red-500",
  },
];

const socialMedia = [
  {
    icon: Linkedin,
    alt: "LinkedIn",
    caption: "linkedin.com/in/khoirunas",
    href: "https://www.linkedin.com/in/khoirunas/",
    color: "text-blue-600",
  },
  {
    icon: Instagram,
    alt: "Instagram",
    caption: "instagram.com/nastakhoirunas",
    href: "https://www.instagram.com/nastakhoirunas/",
    color: "text-pink-500",
  },
  {
    icon: Github,
    alt: "GitHub",
    caption: "github",
    href: "https://github.com/nastarynaz",
    color: "text-gray-800",
  },
  {
    icon: Music,
    alt: "Spotify",
    caption: "spotify",
    href: "#",
    color: "text-green-500",
  },
];

export default function Contact() {
  const mapRef = useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
        libraries: ["marker"],
      });

      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");

      const locationInMap = {
        lat: -7.765249643091827,
        lng: 110.37251692944315,
      };

      if (mapRef.current) {
        const map = new Map(mapRef.current, {
          center: locationInMap,
          zoom: 15,
          mapId: "NEXT_MAPS_TUTS",
          mapTypeId: "roadmap",
        });

        new AdvancedMarkerElement({
          map,
          position: locationInMap,
          title: "Fakultas Teknik UGM!",
        });
      }
    };
    initializeMap();
  }, []);

  return (
    <DefaultLayout className="items-center gap-4">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Map Section */}
        <div>
          <div
            ref={mapRef}
            className="w-80 h-80 bg-gray-400 rounded-sm border-[1px] border-red-500"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Thanks for letting know me.
            </h1>
          </div>

          {/* Contacts Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Contacts</h2>
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed">
                Faculty of Engineering, Jl. Grafika No.2, Senolowo, Sinduadi,
                Kec. Mlati,
                <br />
                Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
              </p>

              {contacts.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.alt}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <IconComponent className={`w-4 h-4 ${item.color}`} />
                    <span className="text-gray-700">{item.caption}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Social Media
            </h2>
            <div className="space-y-3">
              {socialMedia.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.alt}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <IconComponent className={`w-4 h-4 ${item.color}`} />
                    <span className="text-gray-700">{item.caption}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-8 flex-col w-full gap-4">
        <B1 className="font-jakarta-bold">Send me a message</B1>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="ml-4 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="ml-4 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="relative w-full">
          <textarea
            placeholder="Your Message"
            className="ml-4 p-2 border border-gray-300 rounded-md w-full h-32"
          />
        </div>
        <div className="w-full relative">
          <button className="bg-red-500 w-full px-4 py-2 rounded-[10px] hover:bg-red-400 cursor-pointer transition-colors">
            <B1 className="text-white font-jakarta-bold">Send Message</B1>
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
}
