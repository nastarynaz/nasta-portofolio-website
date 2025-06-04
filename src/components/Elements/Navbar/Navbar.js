"use client";

import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/helpers/cn";

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

  const toggleSwitch = () => {
    setIsDark(!isDark);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
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
            <p className="font-extrabold text-base lg:text-3xl">RR</p>
            <p className="font-bold">developer</p>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row justify-evenly items-center w-[50%]">
            {navigation.map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href}>
                <div className=" hover:bg-grey-50 transition-all duration-300 ease-in-out px-2 py-1 rounded-xl">
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
          {/* Navigation */}
          <div className="flex flex-row justify-center items-center gap-4">
            {/* Dark - Light Mode Switch */}
            <div onClick={toggleSwitch}>
              {isDark && <Moon />}
              {!isDark && <Sun />}
            </div>
            {/* Mobile Menu Toggle */}
            <div className="md:hidden" onClick={toggleMobileMenu}>
              {isOpen ? <X /> : <Menu />}
            </div>
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
              <div className="my-2 hover:bg-grey-50 w-full flex justify-center transition-all duration-300 ease-in-out px-2 py-1 rounded-[10px]">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
