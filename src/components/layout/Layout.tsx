import React, { forwardRef } from "react";
import Header from "./Header";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>((props, ref) => {
  return (
    <div ref={ref} className="h-screen w-screen bg-neutral-900 text-gray-100">
      <div className="">
        <Header title="Stonks" />
      </div>
      <div className="p-2 sm:p-4">{props.children}</div>
    </div>
  );
});

export default Layout;
