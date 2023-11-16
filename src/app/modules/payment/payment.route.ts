import express from 'express';
import { PaymentController } from './payment.controller';

const router = express.Router();

router.post('/', PaymentController.insertIntoDb);

export const PaymentRoutes = router;
