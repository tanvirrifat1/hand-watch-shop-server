import express from 'express';
import { CartRoutes } from '../modules/Cart/cart.routes';
import { MenuRoutes } from '../modules/Menu/menu.routes';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { PaymentRoutes } from '../modules/payment/payment.route';
import { ReviewsRoutes } from '../modules/reviews/reviews.routes';
import { UserRouter } from '../modules/user/user.routes';

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
  {
    path: '/reviews',
    route: ReviewsRoutes,
  },
  {
    path: '/user',
    route: UserRouter,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/payment',
    route: PaymentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
