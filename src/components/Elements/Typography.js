import { cn } from "@/utils/helpers/cn";

export const H1 = ({ className, children, ...props }) => (
  <h1
    className={cn("font-jakarta-bold text-[8vw] sm:text-4xl", className)}
    {...props}
  >
    {children}
  </h1>
);

export const H2 = ({ className, children, ...props }) => (
  <h2
    className={cn("font-jakarta-bold text-[6vw] sm:text-3xl", className)}
    {...props}
  >
    {children}
  </h2>
);

export const H3 = ({ className, children, ...props }) => (
  <h3
    className={cn("font-jakarta-semibold text-[5vw] sm:text-2xl", className)}
    {...props}
  >
    {children}
  </h3>
);

export const H4 = ({ className, children, ...props }) => (
  <h4
    className={cn("font-jakarta-semibold text-[4vw] sm:text-xl", className)}
    {...props}
  >
    {children}
  </h4>
);

export const B1 = ({ className, children, ...props }) => (
  <p
    className={cn("font-jakarta-regular text-[4vw] sm:text-lg", className)}
    {...props}
  >
    {children}
  </p>
);

export const B2 = ({ className, children, ...props }) => (
  <p
    className={cn("font-jakarta-regular text-[3.5vw] sm:text-base", className)}
    {...props}
  >
    {children}
  </p>
);

export const B3 = ({ className, children, ...props }) => (
  <p
    className={cn("font-jakarta-light text-[3vw] sm:text-sm", className)}
    {...props}
  >
    {children}
  </p>
);

export const Caption = ({ className, children, ...props }) => (
  <p
    className={cn("font-jakarta-light text-[2.5vw] sm:text-xs", className)}
    {...props}
  >
    {children}
  </p>
);
