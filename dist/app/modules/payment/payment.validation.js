"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripe_1 = __importDefault(require("stripe"));
const config_1 = __importDefault(require("../../../config"));
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc', {
//   apiVersion: '2023-10-16',
// });
const stripe = new stripe_1.default(config_1.default.stripe, '2023-10-16');
exports.default = stripe;
