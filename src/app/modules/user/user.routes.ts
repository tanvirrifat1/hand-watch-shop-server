import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllData);
router.patch('/:id', UserController.updateData);
router.post('/', UserController.insertIntoDb);

export const UserRouter = router;
