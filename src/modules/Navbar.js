import Link from "next/link";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Me",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Interactive",
    href: "/interactive",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed flex flex-row justify-center items-center w-full top-10 z-[99]">
      <div className="w-[80%] h-[60px] flex flex-row justify-evenly items-center bg-linear-to-r from-beige to-orange rounded-full shadow-lg">
        <Link href="/" className="flex flex-row items-end space-x-0.5 group">
          <p className="font-extrabold text-3xl text-shadow-lg">RR</p>
          <p className="font-bold">developer</p>
        </Link>
        <div className="flex flex-row justify-evenly items-center w-[50%]">
          {navigation.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.href}
                className="hover:scale-105 hover:text-white transition-all duration-300 ease-in-out"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="font-bold">Dark</div>
      </div>
    </nav>
  );
}
