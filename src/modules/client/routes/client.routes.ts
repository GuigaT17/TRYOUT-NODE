import { Router } from "express";
import ClientController from "../controller/ClientController";

const clientRouter = Router();
const clientController = new ClientController();

clientRouter.post('/', clientController.create);

clientRouter.get('/:id', clientController.find);

export default clientRouter;