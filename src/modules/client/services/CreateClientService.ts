import { getCustomRepository } from 'typeorm';
import Client from '../typeorm/entities/Client';
import ClientRepository from '../typeorm/repositories/ClientRepository';

interface IRequest {
  name: string;
}

class CreateClientService {
  public async execute({ name }: IRequest): Promise<Client> {
    const clientRepository = getCustomRepository(ClientRepository);
    const number = await clientRepository.find();

    const client = clientRepository.create({
      id: number.length + 1,
      name,
      amount_movimented: 0
    });

    await clientRepository.save(client);

    return client;
  }
}

export default CreateClientService;
