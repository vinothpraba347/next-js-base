/***
 * combines all the providers for the root application
 */

import { ReactNode } from "react";
import QueryProvider from "./query-provider";

export default function RootProvider({ children }: { children: ReactNode }) {
  return <QueryProvider>{children}</QueryProvider>;
}
