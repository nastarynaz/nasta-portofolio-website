import { cn } from "@/utils/helpers/cn";

export default function DefaultLayout({ className, children, ...props }) {
  return (
    <section
      className={cn(
        `flex relative w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 font-jakarta-regular gap-4 py-6 flex-col items-center`,
        className
      )}
      {...props}
    >
      <div className="relative max-w-[75rem] w-[85%] lg:w-[75%]">
        {children}
      </div>
    </section>
  );
}
