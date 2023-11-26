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
exports.MenuService = void 0;
const menu_model_1 = require("./menu.model");
const interIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield menu_model_1.Menu.create(payload);
    return result;
});
const getAllData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield menu_model_1.Menu.find();
    return result;
});
const getSingleData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield menu_model_1.Menu.findById(id);
    return result;
});
const updatedData = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield menu_model_1.Menu.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const updateAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield menu_model_1.Menu.updateMany({ name: 'TAG_Heuer' }, { name: 'TAGHeuer' }, { new: true });
    return result;
});
const deleteData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield menu_model_1.Menu.findByIdAndRemove(id, { new: true });
    return result;
});
exports.MenuService = {
    interIntoDb,
    getAllData,
    updatedData,
    getSingleData,
    deleteData,
    updateAll,
};
