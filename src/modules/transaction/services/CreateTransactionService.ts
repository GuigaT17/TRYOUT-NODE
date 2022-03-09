import { getCustomRepository } from 'typeorm';
import Transaction from '../typeorm/entities/Transaction';
import TransactionRepository from '../typeorm/repositories/TransactionRepository';
import ClientRepository from '../../client/typeorm/repositories/ClientRepository'
import AppError from '@shared/errors/AppError';

interface IRequest {
  date: Date;
  amount: Number;
  currency: string;
  client_id: number;
}

class CreateTransactionService {
    public async execute({ date, amount, currency, client_id }: IRequest): Promise<Transaction>{
        const transactionRepository = getCustomRepository(TransactionRepository);
        const clientRepository = getCustomRepository(ClientRepository);

        const client = await clientRepository.findById(client_id);

        if(!client){
            throw new AppError("No such client with that id");
        }

        const transaction = transactionRepository.create({
            amount,
            currency,
            date,
            client_id: client
        });

        await transactionRepository.save(transaction);

        return transaction;
    }

}

export default CreateTransactionService;