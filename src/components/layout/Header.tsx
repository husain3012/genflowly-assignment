import Heading from "components/atoms/heading/Heading";
import React, { forwardRef } from "react";

export interface HeaderProps {
  title: string;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  return (
    <div ref={ref} className="w-full py-2 px-4 bg-neutral-900 border-b-4 border-indigo-900">
      <Heading.H1>
      {props.title}
      </Heading.H1>
    </div>
  );
});

export default Header;
