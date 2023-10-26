import express from 'express';
import { CartRoutes } from '../modules/Cart/cart.routes';
import { MenuRoutes } from '../modules/Menu/menu.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/menu',
    route: MenuRoutes,
  },
  {
    path: '/cart',
    route: CartRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
