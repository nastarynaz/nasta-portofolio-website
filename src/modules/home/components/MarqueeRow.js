import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/helpers/cn";

export const MarqueeRow = ({
  ref,
  reverse = false,
  speed,
  pauseOnHover,
  techItems,
}) => {
  const getSpeedClass = () => {
    switch (speed) {
      case "slow":
        return "animate-infiniteScrollSlow";
      case "fast":
        return "animate-infiniteScrollFast";
      default:
        return "animate-infiniteScroll";
    }
  };
  return (
    <div
      ref={ref}
      className={cn(
        "scroller bg-gradient-to-r from-white via-red-100 to-white py-2",
        reverse && "scroller-reverse"
      )}
    >
      <div
        className={cn(
          "scroller-inner flex space-x-8",
          getSpeedClass(),
          pauseOnHover && "hover:animation-paused"
        )}
      >
        {techItems.map((tech, index) => (
          <Link
            href={tech.url}
            key={`${tech.src}-${index}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 block hover:scale-110 group transition-transform duration-300"
          >
            <div className="relative aspect-auto h-12 w-24">
              <Image
                src={tech.src || "/placeholder.svg"}
                alt={tech.alt}
                fill
                className="object-contain grayscale-50 group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
