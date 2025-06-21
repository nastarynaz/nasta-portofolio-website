"use client";
import { useRef, useEffect, useState, useTransition } from "react";
import { sendEmail } from "@/utils/actions/send-email";
import { Loader } from "@googlemaps/js-api-loader";
import Link from "next/link";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import {
  Mail,
  Linkedin,
  Instagram,
  Github,
  Music,
  MapPinnedIcon,
} from "lucide-react";
import { B1, B2, H4 } from "@/components/Elements/Typography";

const contacts = [
  {
    icon: MapPinnedIcon,
    alt: "Location",
    caption:
      "Faculty of Engineering, Jl. Grafika No.2, Senolowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    href: "https://maps.app.goo.gl/t1VF1s8ZjDzoLjkF8",
    color: "text-blue-500",
  },
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
    caption: "github.com/nastarynaz",
    href: "https://github.com/nastarynaz",
    color: "text-gray-800",
  },
  {
    icon: Music,
    alt: "Spotify",
    caption: "spotify.com/nassry",
    href: "https://open.spotify.com/user/31wf7xoqpa2uarjqtmyibevitbma?si=850c3ca9f39a4c48",
    color: "text-green-500",
  },
];

export default function Contact() {
  const mapRef = useRef(null);
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState({
    success: false,
    message: "",
    errors: {},
  });

  // Load Google Maps and initialize the map
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

  // Function to send email
  const handleSubmit = async (formData) => {
    startTransition(async () => {
      const result = await sendEmail(formData);

      setFormState({
        success: result.success,
        message: result.message,
        errors: result.errors || {},
      });

      // Reset form on success
      if (result.success) {
        const form = document.getElementById("contact-form");
        form?.reset();
      }
    });
  };

  return (
    <DefaultLayout className="items-center gap-4">
      <div
        id="contact"
        className="lg:grid flex flex-col lg:grid-cols-[1.2fr_2fr] gap-8 w-full h-full"
      >
        {/* Map Section */}
        <div className="w-full h-64 lg:w-auto lg:h-full relative">
          <div
            ref={mapRef}
            className="w-full h-full bg-gray-400 rounded-sm border-[1px] border-red-500"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-8">
          {/* Contacts Section */}
          <div className="space-y-4">
            <H4 className="font-semibold text-gray-900">Contacts</H4>
            <div className="space-y-3">
              {contacts.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.alt} className="flex items-start gap-3">
                    <IconComponent
                      className={`block w-4 h-4 mt-0.5 flex-shrink-0 ${item.color}`}
                    />
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-red-500 hover:underline transition-colors inline-block"
                    >
                      <B1>{item.caption}</B1>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <H4 className="font-semibold text-gray-900">Social Media</H4>
            <div className="space-y-3">
              {socialMedia.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.alt} className="flex items-center gap-3">
                    <IconComponent
                      className={`block flex-shrink-0 w-4 h-4 ${item.color}`}
                    />
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-red-500 hover:underline transition-colors inline-block"
                    >
                      <B1>{item.caption}</B1>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-10 gap-4">
        <B1>Send me a message</B1>

        {/* Success/Error Messages */}
        {formState.message && (
          <div
            className={`p-3 rounded-md ${
              formState.success
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {formState.message}
          </div>
        )}

        {/* Contact Form */}
        <form id="contact-form" action={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={`w-full p-3 border text-base rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                  formState.errors.name ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isPending}
                required
              />
              {formState.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {formState.errors.name}
                </p>
              )}
            </div>

            <div className="flex-1">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={`w-full p-3 border text-base rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                  formState.errors.email ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isPending}
                required
              />
              {formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formState.errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              className={`w-full p-3 border rounded-md h-32 text-base resize-vertical focus:outline-none focus:ring-2 focus:ring-red-500 ${
                formState.errors.message ? "border-red-500" : "border-gray-300"
              }`}
              disabled={isPending}
              required
            />
            {formState.errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {formState.errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className={`w-full px-4 py-3 rounded-[10px] transition-colors ${
              isPending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-400 cursor-pointer"
            }`}
          >
            <B1 className="text-white font-medium">
              {isPending ? "Sending..." : "Send Message"}
            </B1>
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
}
