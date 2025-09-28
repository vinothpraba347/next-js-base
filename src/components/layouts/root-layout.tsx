import { cn } from "@/lib/utils";
import React from "react";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function RootLayoutMain({
  children,
  className,
  ...props
}: React.ComponentPropsWithRef<"main">) {
  return (
    <main className={cn("bg-body font-lato text-[#333]", className)} {...props}>
      {children}
    </main>
  );
}
