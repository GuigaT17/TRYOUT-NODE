import ICommissionCalculator from "./ICommissionCalculator";


// FOR REAL STRATEGY, IT SHOULD HAVE A DB WITH CLEINT IDS THAT HAVE DISCOUNT, SO ITS NOT HARD CODED
export default class ClientWithDiscountStrategy implements ICommissionCalculator {
    calculateCommision(client_id: number, amount: number, date: Date) {
        if(client_id == 42) {
            return 0.05;
        }
        return undefined;
    }
}