"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const cart_model_1 = require("../Cart/cart.model");
const menu_model_1 = require("../Menu/menu.model");
const reviews_model_1 = require("../reviews/reviews.model");
const user_model_1 = require("../user/user.model");
const payment_model_1 = require("./payment.model");
const interIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield payment_model_1.Payment.create(payload);
    return result;
});
const getAllData = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield payment_model_1.Payment.find({ email: payload.email });
    return result;
});
const getAllDataTotal = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield cart_model_1.Cart.find();
        const user = yield user_model_1.User.find();
        const menu = yield menu_model_1.Menu.find();
        // Get the length of the 'cart' array
        const cartLength = cart.length;
        const userLength = user.length;
        const menuLength = menu.length;
        const result = yield payment_model_1.Payment.aggregate([
            {
                $group: {
                    _id: null,
                    totalPrice: { $sum: { $toDouble: '$price' } },
                },
            },
        ]);
        return {
            totalPrice: result[0].totalPrice,
            cartLength,
            userLength,
            menuLength,
        };
    }
    catch (error) {
        console.error('Error calculating total price:', error);
        throw error;
    }
});
const getAllDataTotalUSEr = () => __awaiter(void 0, void 0, void 0, function* () {
    const menu = yield menu_model_1.Menu.find();
    const menuLength = menu.length;
    const result = yield cart_model_1.Cart.aggregate([
        {
            $group: {
                _id: '$email',
                quantity: { $sum: 1 },
            },
        },
    ]);
    const result3 = yield reviews_model_1.Reviews.aggregate([
        {
            $group: {
                _id: '$email',
                quantity: { $sum: 1 },
            },
        },
    ]);
    const result2 = yield payment_model_1.Payment.aggregate([
        {
            $group: {
                _id: '$email',
                quantity: { $sum: 1 },
            },
        },
    ]);
    return { result, result2, result3, menuLength };
});
exports.PaymentService = {
    interIntoDb,
    getAllData,
    getAllDataTotal,
    getAllDataTotalUSEr,
};
