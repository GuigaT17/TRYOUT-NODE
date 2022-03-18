import axios from "axios";
import { URLConfig } from "src/config/URLConfig";

const urlconfig: URLConfig = require("resources/urlconfig.json");

export default class GetRatesFactory {
    public async getRate(currency: string){
        const response = await axios.get(urlconfig.url);
        const rates = response.data.rates;
        return response.data.rates[currency];
    }

    public async getRates(){
        const response = await axios.get('https://api.exchangerate.host/2021-01-01');
        const rates = response.data.rates;
        return response.data.rates;
    }
}
