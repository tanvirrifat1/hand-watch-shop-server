import express from 'express';
import { PaymentController } from './payment.controller';

const router = express.Router();
router.get('/', PaymentController.getAllData);
router.get(
  '/totalValue',
  //   auth(ENUM_USER_ROLE.ADMIN),
  PaymentController.getAllDataTotal
);
router.get(
  '/totalValueByUser',
  //   auth(ENUM_USER_ROLE.ADMIN),
  PaymentController.getAllDataTotalUSEr
);

router.post('/', PaymentController.insertIntoDb);

export const PaymentRoutes = router;
