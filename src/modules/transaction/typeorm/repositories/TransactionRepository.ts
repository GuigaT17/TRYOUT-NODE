import { EntityRepository, LessThan, MoreThan, Repository } from 'typeorm';
import Transaction from '../entities/Transaction';

@EntityRepository(Transaction)
class TransactionRepository extends Repository<Transaction> {
  public async findById(id: string): Promise<Transaction | undefined> {
    const transaction = await this.findOne({
      where: {
        id,
      },
    });

    return transaction;
  }

  public async getMonthlyTransactions(client_id: number, date: Date): Promise<Transaction[]> {
    const transaction = await this.find({
      where: {
        client_id,
      },
    });
    
    var finalTransactions: Transaction[] = [];
    transaction.map(t => {
      if(t.date.getFullYear() == new Date(date).getFullYear() && t.date.getMonth() == new Date(date).getMonth()){
        finalTransactions.push(t);
      }
    });
    
    return finalTransactions;
  }
}

export default TransactionRepository;
