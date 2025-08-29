"use client";

import { B1, B2, B3 } from "@/components/Elements/Typography";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export default function CareerCard({
  position,
  company,
  period,
  description,
  index,
  isLast = false,
  className,
  ...props
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardDelay = index * 0.2; // Staggered animation delay
  const iconDelay = cardDelay + 0.1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : -50,
      }}
      transition={{ duration: 0.6, delay: cardDelay }}
      className={cn(
        "relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6",
        !isLast ? "mb-4 sm:mb-0" : "",
        className
      )}
      {...props}
    >
      {/* Period - Desktop */}
      <motion.div
        className="max-w-[100px] hidden sm:flex flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.4, delay: cardDelay + 0.1 }}
      >
        <div className="flex items-center gap-2">
          <B2 className="text-red-500 font-semibold">{period}</B2>
        </div>
      </motion.div>

      {/* Timeline Circle */}
      <div className="flex flex-col items-center absolute left-4 top-4 sm:relative sm:left-0 sm:top-0">
        <motion.div
          className="w-6 h-6 sm:w-6 sm:h-6 bg-red-500 rounded-full flex justify-center items-center z-10 relative shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isInView ? 1 : 0,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            delay: iconDelay,
            type: "spring",
            bounce: 0.3,
          }}
        >
          <Briefcase className="text-white" size={12} />
        </motion.div>
      </div>

      {/* Career Card */}
      <motion.div
        className="bg-white border-red-200 border-[1px] p-4 sm:p-6 w-full rounded-[15px] sm:rounded-[20px] hover:bg-red-50 hover:border-red-400 transition-all duration-300 group ml-8 sm:ml-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 0.6, delay: cardDelay + 0.2 }}
      >
        {/* Mobile Period */}
        <div className="flex sm:hidden items-center gap-2 mb-3">
          <B3 className="text-red-500 font-semibold">{period}</B3>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Content Section */}
          <div className="flex flex-col">
            {/* Title and Company */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
              <B1 className="group-hover:text-red-600 transition-colors duration-300 text-sm sm:text-base">
                {position}
              </B1>
              <div className="hidden sm:block rounded-full h-[2px] w-[2px] aspect-square bg-red-500" />
              <B2 className="text-red-500 font-medium text-xs sm:text-sm">
                {company}
              </B2>
            </div>

            {/* Description */}
            <B3 className="text-gray-600 leading-relaxed text-xs sm:text-sm">
              {description}
            </B3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
