import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    image: "/assets/icons/gmail-color.svg",
    alt: "Gmail",
    caption: "khoirunasmuhammad@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=khoirunasmuhammad@gmail.com",
  },
  {
    image: "/assets/icons/linkedin-color.svg",
    alt: "LinkedIn",
    caption: "linkedin.com/in/khoirunas",
    href: "https://www.linkedin.com/in/khoirunas/",
  },
  {
    image: "/assets/icons/instagram-color.svg",
    alt: "Instagram",
    caption: "instagram.com/nastakhoirunas",
    href: "https://www.instagram.com/nastakhoirunas/",
  },
];

export default function Contact() {
  return (
    <section className="relative flex flex-col justify-center items-center w-full min-h-screen">
      <div className="w-[80%] flex flex-row justify-center gap-[10vw] items-center">
        <div className="flex justify-center items-center">
          <div className="relative flex justify-center items-end aspect-[4/5] h-[320px] md:h-[400px]">
            <Image
              src="/assets/foto-diri 1.png"
              alt="Foto Nasta"
              fill
              className="object-cover z-20"
            />
            <div className="absolute bg-grey_light w-[80%] h-[85%] z-10 rounded-[36px]" />
          </div>
        </div>
        <div className="relative flex flex-col justify-start gap-y-5 items-start">
          <div className="flex flex-col">
            <h2 className="font-bold">
              Thanks for spend a time to know about me.
            </h2>
            <p>For more detailed, check About Me page.</p>
          </div>
          <div className="flex flex-col">
            {contacts.map((item) => {
              return (
                <Link
                  key={item.alt}
                  href={item.href}
                  className="flex flex-row justify-start gap-2"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={10}
                    height={10}
                  />
                  <p>{item.caption}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
