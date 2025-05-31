import { cn } from "@/utils/helpers/cn";

export const Button = ({ className, children, ...props }) => (
  <button
    className={cn(
      "flex flex-row bg-red-500 text-[12px] group group-hover:bg-red-200 text-white rounded-[10px]",
      className
    )}
    {...props}
  >
    {children}
  </button>
);
