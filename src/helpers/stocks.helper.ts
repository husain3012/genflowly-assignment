import axios from "axios"
import dayjs from "dayjs";
import { IApiResponse, IStockSummary, ITimeSeriesData, ITimeSeriesDataValue, ITimeSeriesInterval } from "src/types";


/* -------------------------------- Constants ------------------------------- */
export const SYMBOLS = ["AAPL", "MSFT", "TSLA", "AMZN", "META"]




const API_BASE_URL = "https://twelve-data1.p.rapidapi.com"
const API_HOST = 'twelve-data1.p.rapidapi.com'
const API_KEY = import.meta.env.VITE_RAPID_API_KEY
const API_KEY_2 = import.meta.env.VITE_RAPID_API_KEY_2

const API_KEYS = [API_KEY, API_KEY_2]




let nextAPIKeyToUse = 0;

const getAPIHeaders = () => {
    const header = {
        'X-RapidAPI-Key': API_KEYS[nextAPIKeyToUse],
        'X-RapidAPI-Host': API_HOST
    }
    nextAPIKeyToUse = (nextAPIKeyToUse + 1) % API_KEYS.length
    return header;

}


/* ---------------------------- Helper Functions ---------------------------- */


export const getTickerLogo = (symbol: string): string | null => {


    switch (symbol) {
        case "AAPL": return "https://api.twelvedata.com/logo/apple.com";
        case "MSFT": return "https://api.twelvedata.com/logo/microsoft.com"
        case "TSLA": return "https://api.twelvedata.com/logo/tesla.com"
        case "AMZN": return "https://api.twelvedata.com/logo/amazon.com"
        case "META": return "https://api.twelvedata.com/logo/meta.com"
    }
    return null;

    // const options = {
    //     method: 'GET',
    //     url: `${API_BASE_URL}/quote`,
    //     params: {
    //         symbol: symbol,


    //     },
    //     headers: API_HEADERS
    // };

    // try {
    //     const { data } = await axios.request(options);
    //     return {
    //         data: data.url, error: false, message: "Fetched Successful"
    //     }

    // } catch (error) {
    //     return {
    //         data: null, error: true, message: error as string
    //     }

    // }


}



export const getTickSummary = async (symbol: string): Promise<IApiResponse<IStockSummary>> => {
    const options = {
        method: 'GET',
        url: `${API_BASE_URL}/quote`,
        params: {
            symbol: symbol,

            format: 'json'
        },
        headers: getAPIHeaders()
    };

    try {
        const { data } = await axios.request(options);

        const icon = getTickerLogo(symbol);


        const transformedData: IStockSummary = {
            symbol: data.symbol,
            name: data.name,
            open: parseFloat(data.open),
            high: parseFloat(data.high),
            low: parseFloat(data.low),
            close: parseFloat(data.close),
            perviousClose: parseFloat(data.previous_close),
            volume: parseInt(data.volume),
            change: parseFloat(data.change),
            changePercentage: parseFloat(data.percent_change),
            dateTime: dayjs(data.datetime).toDate(),
            icon: icon


        }


        return {
            data: transformedData, error: false, message: "Fetched Successful"
        }
    } catch (error) {
        console.log(error)

        return {
            data: null, error: true, message: error as string
        }
    }

}

export const getTimeSeriesData = async (symbol: string, interval: ITimeSeriesInterval): Promise<IApiResponse<ITimeSeriesData>> => {


    const options = {
        method: 'GET',
        url: `${API_BASE_URL}/time_series`,
        params: {
            symbol: symbol,
            interval: interval,
            outputsize: '100'

        },
        headers: getAPIHeaders()
    };
    try {
        const { data } = await axios.request(options);
        console.log(data)

        const transformedData: ITimeSeriesData = {
            meta: {
                symbol: data.meta.symbol,
                currency: data.meta.currency,
                interval: data.meta.interval
            },
            values: data.values.map((v: ITimeSeriesDataValue) => ({
                datetime: dayjs(v.datetime).toDate(),
                close: v.close,
                high: v.high,
                low: v.low,
                open: v.open,
                volume: v.volume,

            })) as ITimeSeriesDataValue[]
        }
        return {
            data: transformedData, error: false, message: "Fetched Successful"
        }
    } catch (error) {
        console.log(error)

        return {
            data: null, error: true, message: error as string
        }
    }

}



