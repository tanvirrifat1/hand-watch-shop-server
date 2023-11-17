import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { MenuController } from './menu.controller';

const router = express.Router();

router.get('/', MenuController.getAllData);
router.get('/:id', MenuController.getSingleData);
router.patch('/allUpdate', MenuController.updateAll);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), MenuController.updatedData);
router.post(
  '/create-menu',
  auth(ENUM_USER_ROLE.ADMIN),
  MenuController.insertIntoDb
);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), MenuController.deleteData);

export const MenuRoutes = router;
