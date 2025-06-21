import { cn } from "@/utils/helpers/cn";
import Link from "next/link";

export const Button = ({
  className,
  children,
  link = "",
  download = false,
  ...props
}) => (
  <Link href={link} download={download ? true : undefined}>
    <button
      className={cn(
        "flex flex-row bg-red-500 text-[4vw] sm:text-lg hover:bg-red-400 gap-2 justify-center items-center cursor-pointer group group-hover:bg-red-200 px-3 py-2 text-white rounded-[10px]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  </Link>
);
