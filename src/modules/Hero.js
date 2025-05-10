import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-screen">
      <div className="flex flex-row w-[70%] justify-center items-center">
        <div className="w-[70%] relative flex flex-col">
          <div>
            <p className="font-medium text-2xl">Hello, I&apos;m</p>
            <h1 className="font-bold text-6xl">Nasta Khoirunas</h1>
            <p className="py-3 text-black font-light">a.k.a RicoRynaz</p>
          </div>
          <div>
            <p className="text-grey_dark text-sm w-[60%]">
              In my life journey, I am not afraid to face difficult or even
              dangerous situations because I believe that every challenge is
              part of the process of gaining new experiences. I am ready to face
              any obstacles that may appear in front of me, and with faith and
              persistence, I believe that I will be able to overcome all
              obstacles and achieve success.
            </p>
          </div>
        </div>
        <div className="w-[30%] relative flex justify-center items-center">
          <div className="absolute aspect-[1/1] w-[237px]">
            <Image
              src="/assets/apple-me.png"
              alt="Nasta's illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute h-[15vw] w-[15vw] bg-orange rounded-full z-[-99] right-[18%] blur-[100px]"></div>
    </section>
  );
}
