"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const menu_controller_1 = require("./menu.controller");
const router = express_1.default.Router();
router.get('/', menu_controller_1.MenuController.getAllData);
router.get('/:id', menu_controller_1.MenuController.getSingleData);
router.patch('/allUpdate', menu_controller_1.MenuController.updateAll);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), menu_controller_1.MenuController.updatedData);
router.post('/create-menu', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), menu_controller_1.MenuController.insertIntoDb);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), menu_controller_1.MenuController.deleteData);
exports.MenuRoutes = router;
