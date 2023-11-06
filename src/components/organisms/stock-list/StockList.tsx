import StockListItem from "components/molecules/stock-list-item/StockListItem";
import { getTickerLogo } from "helpers/stocks.helper";
import { forwardRef, ComponentProps } from "react";

interface StockListProps
  extends Omit<ComponentProps<"ul">, "className" | "onSelect"> {
  stocks: string[];
  onSelect?: (symbolIdx: number) => void;
  selected: number;
}

const StockList = forwardRef<HTMLUListElement, StockListProps>(
  ({ stocks, onSelect, selected, ...rest }, ref) => {
    return (
      <ul
        {...rest}
        className={`bg-slate-800 flex flex-col rounded-lg cursor-pointer`}
        ref={ref}
      >
        {stocks.map((d, i) => (
          <StockListItem
            onClick={() => {
              onSelect && onSelect(i);
            }}
            isFirst={i == 0}
            isLast={i == stocks.length - 1}
            symbol={d}
            icon={getTickerLogo(d)}
            key={d}
            selected={i == selected}
          />
        ))}
      </ul>
    );
  }
);

export default StockList;
