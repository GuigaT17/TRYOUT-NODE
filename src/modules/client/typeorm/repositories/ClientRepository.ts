import { EntityRepository, Repository } from 'typeorm';
import Client from '../entities/Client';

@EntityRepository(Client)
class ClientRepository extends Repository<Client> {
  public async findById(id: number): Promise<Client | undefined> {
    const client = await this.findOne({
      where: {
        id,
      },
    });

    return client;
  }
}

export default ClientRepository;
