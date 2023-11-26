"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const mongoose_1 = require("mongoose");
const menuItem = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Menu = (0, mongoose_1.model)('menu', menuItem);
