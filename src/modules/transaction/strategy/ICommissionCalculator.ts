export default interface ICommissionCalculator {
    calculateCommision: (client_id: number, amount: number, date: Date) => Number | undefined | Promise<Number | undefined>;
}