import Link from "next/link";
import Image from "next/image";

const account = [
  {
    image: "/assets/icons/github.svg",
    alt: "Github",
    href: "https://github.com/nastarynaz",
  },
  {
    image: "/assets/icons/instagram.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/nastakhoirunas/",
  },
  {
    image: "/assets/icons/linkedin.svg",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/khoirunas/",
  },
  {
    image: "/assets/icons/gmail.svg",
    alt: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=khoirunasmuhammad@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col bg-linear-to-r from-white to-orange justify-center items-center w-full">
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
            return (
              <Link key={item.image} href={item.href}>
                <div className="relative aspect-square h-[15px]">
                  <Image
                    alt={item.alt}
                    src={item.image}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
