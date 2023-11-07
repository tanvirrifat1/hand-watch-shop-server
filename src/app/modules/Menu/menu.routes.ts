import express from 'express';
import { MenuController } from './menu.controller';

const router = express.Router();

router.get('/', MenuController.getAllData);
router.get('/:id', MenuController.getSingleData);
router.patch('/:id', MenuController.updatedData);
router.post('/create-menu', MenuController.insertIntoDb);

export const MenuRoutes = router;
