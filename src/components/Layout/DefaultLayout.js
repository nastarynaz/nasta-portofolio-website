import { cn } from "@/utils/helpers/cn";

export default function DefaultLayout({ className, children, ...props }) {
  return (
    <section
      className={cn(
        `flex w-full px-[10vw] font-jakarta-regular gap-4 sm:px-10 py-10 md:px-40 xl:px-60 2xl:px-80 flex-col`,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
