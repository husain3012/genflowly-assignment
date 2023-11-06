
export interface IApiResponse<T> {
    error?: boolean;
    message?: string;
    data: T | null

}



export interface IStockSummary {
    icon?: string | null;
    name: string;
    symbol: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    dateTime: Date;
    perviousClose?: number;
    change: number;
    changePercentage: number;

}

export type ITimeSeriesInterval = "1min" | "5min" | "15min" | "30min" | "45min" | "1h" | "2h" | "4h" | "1day" | "1week" | "1month"

export interface ITimeSeriesDataValue {
    datetime: Date,
    close: number,
    high: number,
    low: number,
    open: number;
    volume: number;
}

export interface ITimeSeriesData {
    meta: {
        symbol: string;
        currency: string;
        interval: ITimeSeriesInterval
    }
    values: ITimeSeriesDataValue[]

}




