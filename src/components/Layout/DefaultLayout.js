import { cn } from "@/utils/helpers/cn";

export default function DefaultLayout({ className, children, ...props }) {
  return (
    <section
      className={cn(
        `flex relative w-full mx-auto px-6 sm:px-8 md:px-20 lg:px-24 xl:px-28 2xl:px-36 font-jakarta-regular bg-white`,
        className
      )}
      {...props}
    >
      <div className="relative max-w-7xl w-full mx-auto py-8 lg:py-12">
        <div className="py-4 sm:px-8 sm:py-6 md:px-16 md:py-6 lg:px-20 lg:py-4 xl:px-24 xl:py-6">
          {children}
        </div>
      </div>
    </section>
  );
}
