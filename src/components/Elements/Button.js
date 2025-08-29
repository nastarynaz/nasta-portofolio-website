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
        "flex flex-row items-center min-w-[170px] justify-center rounded-[10px] whitespace-nowrap cursor-pointer bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white border-none px-[20px] py-[6px] font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105",
        className
      )}
      {...props}
    >
      {children}
    </button>
  </Link>
);
