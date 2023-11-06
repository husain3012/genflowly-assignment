import { HTMLAttributes, forwardRef } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}


const H1 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  return (
    <h1 ref={ref} className={`text-3xl ${props.className}`} {...props}>
      {props.children}
    </h1>
  );
});

const H2 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  return (
    <h2 ref={ref} className={`text-xl ${props.className}`} {...props}>
      {props.children}
    </h2>
  );
});

const H3 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  return (
    <h3 ref={ref} className={`text-lg ${props.className}`} {...props}>
      {props.children}
    </h3>
  );
});

const Heading = { H1, H2, H3 };
export default Heading;
