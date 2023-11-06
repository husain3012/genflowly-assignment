import HeadingNumeric from "components/molecules/heading-numeric/HeadingNumeric";
import { forwardRef, ComponentProps } from "react";
import { IStockSummary } from "src/types";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Logo from "components/atoms/logo/Logo";
import Heading from "components/atoms/heading/Heading";
import Card from "../card";

interface StockOverviewProps
  extends Omit<ComponentProps<"div">, "className" | "children"> {
  data: IStockSummary | null;
  loading: boolean;
}

const StockOverview = forwardRef<HTMLDivElement, StockOverviewProps>(
  (props, ref) => {
    return (
      <Card {...props} className={`bg-transparent  px-2 py-2 flex`} ref={ref}>
        {props.data && (
          <div className="w-1/2 flex flex-col">
            <HeadingNumeric symbol="$" value={props.data.high} />
            <div className="flex gap-2 text-xs items-center">
              <span
                className={`${
                  props.data.change < 0 ? "text-red-500" : "text-green-500"
                } `}
              >
                {props.data.change < 0 ? (
                  <ChevronDownIcon className="w-4 h-4" />
                ) : (
                  <ChevronUpIcon className="w-4 h-4" />
                )}
              </span>
              {props.data?.change.toFixed(2)}{" "}
              {`(${props.data?.changePercentage.toFixed(2)}%)`}
            </div>
          </div>
        )}
        {props.data && (
          <div className="w-1/2 flex">
            <div className="flex ml-auto gap-2 items-center">
              <div className="">
                <Logo src={props.data.icon || ""} />
              </div>
              <div className="flex flex-col items-center">
                <Heading.H2>{props.data.symbol}</Heading.H2>
                <span className="text-gray-400 text-sm">{props.data.name}</span>
              </div>
            </div>
          </div>
        )}
      </Card>
    );
  }
);

export default StockOverview;
