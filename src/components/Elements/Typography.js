import { cn } from "@/utils/helpers/cn";

export const H1 = ({ className, children, props }) => (
  <h1 className={cn("font-jakarta-bold text-3xl", className)} {...props}>
    {children}
  </h1>
);

export const H2 = ({ className, children, props }) => (
  <h2 className={cn("font-jakarta-bold text-2xl", className)} {...props}>
    {children}
  </h2>
);
export const H3 = ({ className, children, props }) => (
  <h3 className={cn("font-jakarta-semibold text-xl", className)} {...props}>
    {children}
  </h3>
);

export const B1 = ({ className, children, props }) => (
  <p className={cn("font-jakarta-regular text-lg", className)} {...props}>
    {children}
  </p>
);
export const B2 = ({ className, children, props }) => (
  <p className={cn("font-jakarta-regular text-sm", className)} {...props}>
    {children}
  </p>
);

export const B3 = ({ className, children, props }) => (
  <p className={cn("font-jakarta-light text-xs", className)} {...props}>
    {children}
  </p>
);
