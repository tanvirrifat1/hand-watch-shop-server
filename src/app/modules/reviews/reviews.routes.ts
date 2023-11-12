import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ReviewsController } from './reviews.controller';

const router = express.Router();

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), ReviewsController.deleteData);
router.get('/', ReviewsController.getAllData);
router.post('/create-reviews', ReviewsController.insertIntoDb);

export const ReviewsRoutes = router;
