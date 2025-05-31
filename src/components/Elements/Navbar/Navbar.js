"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

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
  const toggleSwitch = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="fixed flex flex-row justify-center items-center w-full font-jakarta-regular top-6 z-[99]">
      <div className="w-[80%] py-3 flex flex-row justify-evenly items-center bg-white border-[1px] border-red-500 rounded-[10px]">
        <Link href="/" className="flex flex-row items-end space-x-0.5 group">
          <p className="font-extrabold text-3xl">RR</p>
          <p className="font-bold">developer</p>
        </Link>
        <div className="flex flex-row justify-evenly items-center w-[50%]">
          {navigation.map((item) => {
            return (
              <Link key={`${item.label}-${item.href}`} href={item.href}>
                <div className=" hover:bg-grey-50 transition-all duration-300 ease-in-out px-2 py-1 rounded-xl">
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>
        <div onClick={toggleSwitch}>
          {isDark && <Moon />}
          {!isDark && <Sun />}
        </div>
      </div>
    </nav>
  );
}
