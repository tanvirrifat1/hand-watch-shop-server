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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const cart_model_1 = require("./cart.model");
const interIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield cart_model_1.Cart.findOne({
        email: payload.email,
        productId: payload.productId,
    });
    if (res) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'already add to cart');
    }
    const result = yield cart_model_1.Cart.create(payload);
    return result;
});
const getAllData = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.find({ email: payload.email });
    return result;
});
const getAllDataTotal = () => __awaiter(void 0, void 0, void 0, function* () {
    const result2 = yield cart_model_1.Cart.aggregate([
        {
            $group: {
                _id: '$name',
                quantity: { $sum: 1 },
            },
        },
    ]);
    return result2;
});
const getSingleData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.findById(id);
    return result;
});
const deleteData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.findByIdAndDelete(id);
    return result;
});
const updatedData = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.findByIdAndUpdate(id, payload);
    return result;
});
const updated = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.findByIdAndUpdate(id, payload);
    return result;
});
exports.CartService = {
    interIntoDb,
    getAllData,
    updated,
    updatedData,
    getSingleData,
    deleteData,
    getAllDataTotal,
};
