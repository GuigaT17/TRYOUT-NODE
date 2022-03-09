import ICommissionCalculator from "./ICommissionCalculator";

export default class ClientWithDiscountStrategy implements ICommissionCalculator {
    calculateCommision(client_id: number, amount: number, date: Date) {
        if(client_id == 42) {
            return 0.05;
        }
        return undefined;
    }
}