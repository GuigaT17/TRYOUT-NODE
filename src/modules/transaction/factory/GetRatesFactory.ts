import axios from "axios";

export default class GetRatesFactory {
    public async getRate(currency: string){
        const response = await axios.get('https://api.exchangerate.host/2021-01-01');
        const rates = response.data.rates;
        return response.data.rates[currency];
    }

    public async getRates(){
        const response = await axios.get('https://api.exchangerate.host/2021-01-01');
        const rates = response.data.rates;
        return response.data.rates;
    }
}
