import express from 'express';
import { cartController } from './cart.controller';

const router = express.Router();

router.post('/create-cart', cartController.insertIntoDb);
router.get('/', cartController.getAllData);
router.patch('/:id', cartController.updatedData);

export const CartRoutes = router;
