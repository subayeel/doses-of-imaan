import React from "react";

import { ReactNode } from "react";

function Page({ children }: { children: ReactNode }) {
  return <main className="px-6 py-4">{children}</main>;
}

export default Page;
