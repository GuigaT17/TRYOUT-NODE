import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Client from '../typeorm/entities/Client';
import ClientRepository from '../typeorm/repositories/ClientRepository';

interface IRequest {
  id: number;
}

class FindClientService {
  public async find({ id }: IRequest): Promise<Client | undefined> {
    const clientRepository = getCustomRepository(ClientRepository);

    const client = await clientRepository.findById(id);

    if(!client){
        throw new AppError('Client not found.');
    }

    return client;
  }
}

export default FindClientService;
