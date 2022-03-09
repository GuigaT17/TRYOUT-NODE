import ICommissionCalculator from "./ICommissionCalculator";

export default class DefaultStrategy implements ICommissionCalculator {
    calculateCommision(client_id: number, amount: number, date: Date) {
       const commision = ((amount * 0.5)/100);
        if(commision < 0.05) {
            return 0.05;
        }
        
        return commision;
    }
}