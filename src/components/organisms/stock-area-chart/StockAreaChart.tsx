import { ITimeSeriesData, ITimeSeriesInterval } from "src/types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { getTimeSeriesData } from "helpers/stocks.helper";
import dayjs from "dayjs";
import SelectGroup from "components/molecules/select-group/SelectGroup";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface StockAreaChartProps {
  stock?: string;
}

const intervalOptions = [
  {
    name: "5 m",
    value: "5min",
  },
  {
    name: "4 h",
    value: "4h",
  },
  {
    name: "1 D",
    value: "1day",
  },
  {
    name: "1 W",
    value: "1week",
  },
  {
    name: "1 M",
    value: "1month",
  },
];

const getDataFormat = (interval: ITimeSeriesInterval) => {
  switch (interval) {
    case "5min" || "4h":
      return "hh:mm, DD/MM";
  }
  return "DD/MM";
};

const StockAreaChart = (props: StockAreaChartProps) => {
  const [timeSeriesData, setTimeSeriesData] = useState<ITimeSeriesData | null>(
    null
  );
  const [selectedInterval, setSelectedInterval] =
    useState<ITimeSeriesInterval>("1month");

  useEffect(() => {
    if (!props.stock) return;
    getTimeSeriesData(props.stock, selectedInterval).then((d) => {
      setTimeSeriesData(d.data);
    });
  }, [props.stock, selectedInterval]);

  const dateFormat = getDataFormat(selectedInterval);
  const labels = timeSeriesData?.values.map((v) =>
    dayjs(v.datetime).format(dateFormat)
  );
  const data: ChartData<"line", string[] | undefined, string> = {
    labels,
    datasets: [
      {
        fill: false,
        label: "High",
        data: timeSeriesData?.values.map((v) => v.high.toLocaleString()),
        borderColor: "rgb(109, 252, 114)",
      },
      {
        fill: false,

        label: "Low",
        data: timeSeriesData?.values.map((v) => v.low.toLocaleString()),
        borderColor: "rgb(247, 99, 99)",
      },
      {
        fill: false,

        label: "Open",
        data: timeSeriesData?.values.map((v) => v.open.toLocaleString()),
        borderColor: "rgb(97, 168, 240)",
      },
    ],
  };

  return (
    <div className="">
      <SelectGroup
        className="mx-auto"
        options={intervalOptions}
        onSelect={(v) => setSelectedInterval(v as ITimeSeriesInterval)}
      />

      <Line
        options={{
          elements: { point: { radius: 0 }, line: { borderWidth: 1.5 } },
          responsive: true,
          scales:{
            x:{
              ticks:{
               autoSkip:true,
               autoSkipPadding:20,
               maxRotation:0
               
              }
              
            }
          },
          plugins: {
            legend: {
              position: "top" as const,
            },
            title: {
              display: true,
              text: `${timeSeriesData?.meta.symbol}`,
            },
          },
          
        }}
        data={data}
      />
    </div>
  );
};

export default StockAreaChart;
