import React from "react";

import { ReactNode } from "react";

const Page = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default Page;
