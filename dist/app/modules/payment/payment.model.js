"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = require("mongoose");
const paymentSchema = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String },
    stripeCustomerId: { type: String },
    price: { type: String },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Payment = (0, mongoose_1.model)('payment', paymentSchema);
