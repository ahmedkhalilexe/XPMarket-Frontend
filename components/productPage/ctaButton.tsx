import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

export default function CtaButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn("p-2 font-semibold rounded-lg drop-shadow-md", className)}
      {...props}
    ></button>
  );
}
