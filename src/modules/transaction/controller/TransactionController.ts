import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import CommisionFactory from "../factory/CommisionFactory";
import GetRatesFactory from "../factory/GetRatesFactory";
import CreateTransactionService from "../services/CreateTransactionService";

export default class TransactionController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { date, amount, currency, client_id } = request.body;
        
        const createTransaction = new CreateTransactionService();
        var rate = 1;

        if(currency != "EUR"){
            const getRate = new GetRatesFactory();
            rate = await getRate.getRate(currency);
            if(rate == undefined){
                throw new AppError("Currecy is not available");
            }
        }

        const transaction = await createTransaction.execute({ date, amount, currency, client_id });

        const transactionAmount = amount * rate;

        const commisionCalculator = new CommisionFactory();
        const commisionAmount = await commisionCalculator.commision(transactionAmount, client_id, date);

        return response.json({"amount": commisionAmount, "currency": "EUR"});
    }
}