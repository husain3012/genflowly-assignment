import { forwardRef, ComponentProps } from "react";

interface ListItemProps
  extends ComponentProps<"li">{
    isFirst?: boolean;
    isLast?: boolean;
 
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {

  return (
    <li {...props} className={`bg-slate-800  px-4 py-3 transition-all hover:bg-slate-900 ${props.isLast?"rounded-b-lg":""} ${props.isFirst?"rounded-t-lg":""} ${props.className}`} ref={ref} >
      {props.children}
    </li>
  );
});

export default ListItem;
