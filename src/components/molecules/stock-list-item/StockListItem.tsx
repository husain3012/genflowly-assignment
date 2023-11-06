import Heading from "components/atoms/heading/Heading";
import ListItem from "components/atoms/listItem/ListItem";
import Logo from "components/atoms/logo/Logo";
import { ComponentProps, forwardRef } from "react";

interface StockListItemProps extends Omit<ComponentProps<"li">, "className"> {
  symbol: string;
  icon: string | null;
  isFirst?: boolean;
  isLast?: boolean;
  selected: boolean;
}

const StockListItem = forwardRef<HTMLLIElement, StockListItemProps>(
  (props, ref) => {
    return (
      <ListItem
        isFirst={props.isFirst}
        isLast={props.isLast}
        className={`flex gap-4 ${props.selected?"bg-purple-700":""}`}
        {...props}
        ref={ref}
      >
        <div>{props.icon && <Logo src={props.icon} alt={props.symbol} />}</div>
        <div>
          <Heading.H3>{props.symbol}</Heading.H3>
        </div>
      </ListItem>
    );
  }
);

export default StockListItem;
