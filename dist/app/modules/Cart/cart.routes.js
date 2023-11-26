"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const cart_controller_1 = require("./cart.controller");
const router = express_1.default.Router();
router.get('/total', cart_controller_1.cartController.getAllDataTotal);
router.post('/create-cart', cart_controller_1.cartController.insertIntoDb);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER, user_1.ENUM_USER_ROLE.ADMIN), cart_controller_1.cartController.getSingleData);
router.delete('/:id', cart_controller_1.cartController.deleteData);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER, user_1.ENUM_USER_ROLE.ADMIN), cart_controller_1.cartController.getAllData);
router.patch('/:id', cart_controller_1.cartController.updatedData);
exports.CartRoutes = router;
