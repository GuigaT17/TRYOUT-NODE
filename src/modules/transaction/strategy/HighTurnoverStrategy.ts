import GetRatesFactory from "../factory/GetRatesFactory";
import GetMonthlyTransactionService from "../services/GetMonthlyTransactionService";
import ICommissionCalculator from "./ICommissionCalculator";

export default class HighTurnoverStrategy implements ICommissionCalculator {
    async calculateCommision(client_id: number, amount: number, date: Date) {
        const getMonthlyTransactions = new GetMonthlyTransactionService();
        const getRates = new GetRatesFactory();
        const rates = await getRates.getRates();
        const transactions = await getMonthlyTransactions.execute({ date, client_id });
        let monthlyProfits: number = 0;
        await transactions.map(async t => {
            if(t.currency == "EUR"){
                monthlyProfits = monthlyProfits + parseInt(t.amount.toString());
            } else {
                var rate = rates[t.currency];
                monthlyProfits = monthlyProfits + (t.amount.valueOf() * rate);
            }
        });
        if(monthlyProfits >= 1000){
            return 0.03;
        }

        return undefined;
    }
}