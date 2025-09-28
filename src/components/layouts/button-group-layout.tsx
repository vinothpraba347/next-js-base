import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

type ButtonGroupLayoutProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

function ButtonGroupLayout({
  children,
  className,
  ...props
}: ButtonGroupLayoutProps) {
  return (
    <div className={cn("flex space-x-2", className)} {...props}>
      {children}
    </div>
  );
}

export default ButtonGroupLayout;
