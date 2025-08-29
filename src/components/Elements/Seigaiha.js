import { cn } from "@/utils/helpers/cn";

export function Seigaiha({ className = "seigaiha-75", ...props }) {
  return (
    <div
      className={cn("absolute top-0 left-0 h-full w-full", className)}
      {...props}
    />
  );
}
