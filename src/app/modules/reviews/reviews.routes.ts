import express from 'express';
import { ReviewsController } from './reviews.controller';

const router = express.Router();

router.get('/', ReviewsController.getAllData);
router.post('/create-reviews', ReviewsController.insertIntoDb);

export const ReviewsRoutes = router;
