import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: ReactNode;
  title: ReactNode;
  eyebrowClassName?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  eyebrowClassName,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <>
      <span
        className={cn(
          "font-mono text-xs uppercase tracking-[2px] text-primary",
          eyebrowClassName,
        )}
      >
        {eyebrow}
      </span>
      <h2 className={cn("mt-2.5 font-display text-4xl", titleClassName)}>
        {title}
      </h2>
    </>
  );
}
