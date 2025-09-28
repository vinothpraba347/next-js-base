import { Lato } from "next/font/google";
import { ReactNode } from "react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // Choose the weights you need
  display: "swap", // Use font display swap for better performance
});

export default function HtmlLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-auto ${lato.className}`}>
        {children} <div id="portal-root" />
      </body>
    </html>
  );
}
