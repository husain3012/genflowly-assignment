import Heading from "components/atoms/heading/Heading";
import React, { ComponentProps, forwardRef } from "react";

interface HeadingNumericProps extends ComponentProps<"h3"> {
  symbol?: React.ReactNode;
  value: number;
  animate?: boolean;
  localformat?: boolean;
}

const HeadingNumeric = forwardRef<HTMLHeadingElement, HeadingNumericProps>(
  (props, ref) => {
    return (
      <Heading.H3 {...props} ref={ref} >
        {props.symbol && <span className="mr-1">{props.symbol}</span>}

        {props.localformat
          ? props.value.toLocaleString()
          : props.value.toString()}
        {props.children}
      </Heading.H3>
    );
  }
);

export default HeadingNumeric;
