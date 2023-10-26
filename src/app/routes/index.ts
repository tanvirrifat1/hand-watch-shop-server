import express from 'express';
import { MenuRoutes } from '../modules/Menu/menu.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/menu',
    route: MenuRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
