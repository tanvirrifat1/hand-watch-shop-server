"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cart_routes_1 = require("../modules/Cart/cart.routes");
const menu_routes_1 = require("../modules/Menu/menu.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const payment_route_1 = require("../modules/payment/payment.route");
const reviews_routes_1 = require("../modules/reviews/reviews.routes");
const user_routes_1 = require("../modules/user/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/menu',
        route: menu_routes_1.MenuRoutes,
    },
    {
        path: '/cart',
        route: cart_routes_1.CartRoutes,
    },
    {
        path: '/reviews',
        route: reviews_routes_1.ReviewsRoutes,
    },
    {
        path: '/user',
        route: user_routes_1.UserRouter,
    },
    {
        path: '/auth',
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: '/payment',
        route: payment_route_1.PaymentRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
