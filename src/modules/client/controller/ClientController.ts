import { Request, Response } from "express";
import CreateClientService from "../services/CreateClientService";
import FindClientService from "../services/FindClientService";

export default class ClientController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        const createClientService = new CreateClientService();

        const client = await createClientService.execute({name});

        return response.json(client);
    }

    public async find(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findClientService = new FindClientService();

        const client = await findClientService.find({ id: parseInt(id) });

        return response.json(client);
    }
}