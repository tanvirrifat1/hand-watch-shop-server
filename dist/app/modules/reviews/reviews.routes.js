"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const reviews_controller_1 = require("./reviews.controller");
const router = express_1.default.Router();
router.delete('/:id', reviews_controller_1.ReviewsController.deleteData);
router.get('/', reviews_controller_1.ReviewsController.getAllData);
router.post('/create-reviews', reviews_controller_1.ReviewsController.insertIntoDb);
exports.ReviewsRoutes = router;
