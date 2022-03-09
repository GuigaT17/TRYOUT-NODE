import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Client from '../../../client/typeorm/entities/Client';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => Client)
  @JoinColumn({name: "client_id"})
  client_id: Client;
  @Column('decimal')
  amount: Number;
  @Column()
  currency: string
  @Column()
  date: Date;
}

export default Transaction;