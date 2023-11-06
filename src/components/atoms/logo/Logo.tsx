import { ComponentProps, forwardRef } from "react";

interface LogoProps extends ComponentProps<"img"> {}

const Logo = forwardRef<HTMLImageElement, LogoProps>((props, ref) => {
  return <img ref={ref} {...props} className={`rounded-full w-8 ${props.className}`} />;
});

export default Logo;
