import { getCustomRepository } from 'typeorm';
import Transaction from '../typeorm/entities/Transaction';
import TransactionRepository from '../typeorm/repositories/TransactionRepository';
import ClientRepository from '../../client/typeorm/repositories/ClientRepository'
import AppError from '@shared/errors/AppError';

interface IRequest {
  date: Date;
  client_id: number;
}

class GetMonthlyTransactionService {
    public async execute({ date, client_id }: IRequest): Promise<Transaction[]>{
        const transactionRepository = getCustomRepository(TransactionRepository);
        const clientRepository = getCustomRepository(ClientRepository);

        const client = await clientRepository.findById(client_id);

        if(!client){
            throw new AppError("No such client with that id");
        }

        const transactions = await transactionRepository.getMonthlyTransactions(client_id, date);

        return transactions;
    }
}

export default GetMonthlyTransactionService;