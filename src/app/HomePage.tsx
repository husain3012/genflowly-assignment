import { useEffect, useState } from "react";
import StockOverview from "components/organisms/stock-overview/StockOverview";
import { getTickSummary, SYMBOLS } from "helpers/stocks.helper";
import { IStockSummary } from "src/types";
import StockAreaChart from "components/organisms/stock-area-chart/StockAreaChart";
import Heading from "components/atoms/heading/Heading";
import StockList from "components/organisms/stock-list/StockList";

const HomePage = () => {
  const [selectedSymbol, setSelectedSymbol] = useState(0);

  const [stockData, setStockData] = useState<{
    loading: boolean;
    data: IStockSummary | null;
  }>({ loading: false, data: null });

  useEffect(() => {
    setStockData((prev) => ({ ...prev, loading: true }));
    getTickSummary(SYMBOLS[selectedSymbol]).then((d) => {
      setStockData({
        loading: false,
        data: d.data,
      });
    });
  }, [selectedSymbol]);

  const selectSymbolHandler = (symbolIdx: number) => {
    setSelectedSymbol(symbolIdx);
  };
  return (
    <div className="flex flex-wrap  ">
      <div className="sm:w-3/4 w-full px-4 mb-4">
        <div className="flex flex-col gap-4">
          <StockOverview data={stockData.data} loading={!stockData.data} />
          <StockAreaChart stock={stockData.data?.symbol} />
        </div>
      </div>

      <div className="sm:w-1/4 w-full flex flex-col gap-2 px-4">
        <Heading.H2>Watch List</Heading.H2>

        <StockList
          selected={selectedSymbol}
          onSelect={selectSymbolHandler}
          stocks={SYMBOLS}
        />
      </div>
    </div>
  );
};

export default HomePage;
