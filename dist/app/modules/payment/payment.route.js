"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const payment_controller_1 = require("./payment.controller");
const router = express_1.default.Router();
router.get('/', payment_controller_1.PaymentController.getAllData);
router.get('/totalValue', 
//   auth(ENUM_USER_ROLE.ADMIN),
payment_controller_1.PaymentController.getAllDataTotal);
router.get('/totalValueByUser', 
//   auth(ENUM_USER_ROLE.ADMIN),
payment_controller_1.PaymentController.getAllDataTotalUSEr);
router.post('/', payment_controller_1.PaymentController.insertIntoDb);
exports.PaymentRoutes = router;
