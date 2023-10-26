import express from 'express';
import { MenuController } from './menu.controller';

const router = express.Router();

router.post('/create-menu', MenuController.insertIntoDb);
router.get('/', MenuController.getAllData);
router.patch('/:id', MenuController.updatedData);

export const MenuRoutes = router;
