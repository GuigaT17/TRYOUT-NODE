import { Router } from "express";
import TransactionController from "../controller/TransactionController";

const transactionRouter = Router();
const transactionController = new TransactionController();

transactionRouter.post('/', transactionController.create);

export default transactionRouter;