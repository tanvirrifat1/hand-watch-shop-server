import express from 'express';
import { ReviewsController } from './reviews.controller';

const router = express.Router();

router.delete('/:id', ReviewsController.deleteData);
router.get('/', ReviewsController.getAllData);
router.post('/create-reviews', ReviewsController.insertIntoDb);

export const ReviewsRoutes = router;
