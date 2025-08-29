"use client";

import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/helpers/cn";
import { usePathname } from "next/navigation";
import { B2 } from "@/components/Elements/Typography";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Journey",
    href: "/journey",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Achievements",
    href: "/achievements",
  },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSwitch = () => {
    setIsDark(!isDark);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const isActive = (href) => {
    if (!pathname) return false;

    if (href === "/") {
      return pathname === "/";
    } else {
      // Exact match or starts with href followed by a slash
      return pathname === href || pathname.startsWith(href + "/");
    }
  };

  return (
    <nav className="fixed inset-x-0 flex justify-center items-center font-jakarta-regular top-6 z-[99]">
      <div className="max-w-[90rem] w-[95%] lg:w-[80%] py-3 px-4 flex flex-col justify-between items-center transition-all duration-700 ease-in-out overflow-x-clip bg-white border-[1px] border-red-500 rounded-[10px]">
        {/* Nav */}
        <div className="flex flex-row justify-between items-center w-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-row items-end group cursor-pointer"
          >
            <p className="font-extrabold text-[6vw] sm:text-base lg:text-3xl">
              RR
            </p>
            <p className="text-[6vw] sm:text-base font-bold">developer</p>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row justify-evenly items-center w-[50%]">
            {navigation.map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href}>
                <div
                  className={cn(
                    "transition-all hover:underline duration-500 ease-in-out px-4 py-1 rounded-[10px]",
                    isActive(item.href) ? "underline font-bold" : ""
                  )}
                >
                  <B2>{item.label}</B2>
                </div>
              </Link>
            ))}
          </div>
          {/* Navigation */}
          <div className="flex flex-row justify-center items-center gap-4">
            {/* Dark - Light Mode Switch */}
            <button
              onClick={toggleSwitch}
              className="flex items-center justify-center p-2 rounded-[10px] bg-red-500 hover:bg-red-400 transition-all duration-300 group"
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDark ? (
                <Moon
                  className="text-white  transition-colors duration-300"
                  size={18}
                />
              ) : (
                <Sun
                  className="text-white  transition-colors duration-300"
                  size={18}
                />
              )}
            </button>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex items-center justify-center p-2 rounded-[10px] bg-gray-100 hover:bg-red-100 transition-all duration-300 group"
              onClick={toggleMobileMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X
                  className="text-gray-600 group-hover:text-red-500 transition-colors duration-300"
                  size={18}
                />
              ) : (
                <Menu
                  className="text-gray-600 group-hover:text-red-500 transition-colors duration-300"
                  size={18}
                />
              )}
            </button>
          </div>
        </div>
        <div
          className={cn(
            "w-full bg-white transition-all duration-700 ease-in-out text-center rounded-b-[10px] md:hidden",
            isOpen ? "block" : "hidden"
          )}
        >
          {navigation.map((item) => (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              onClick={closeMobileMenu}
            >
              <div
                className={cn(
                  "my-2 hover:underline w-full flex justify-center transition-all duration-300 ease-in-out px-2 py-1 rounded-[10px]",
                  isActive(item.href) ? "underline font-bold" : ""
                )}
              >
                <B2>{item.label}</B2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
