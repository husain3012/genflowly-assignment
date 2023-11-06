import {
  forwardRef,
  ComponentProps,
 
} from "react";

export interface CardProps
  extends ComponentProps<"div"> {

}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    return (
      <div 
        ref={ref}
        className={`border-gray-800 rounded-md shadow p-4 ${props.className}`} {...props}
        >
        {props.children}
   
      </div>
    );
  }
);

export default Card;
