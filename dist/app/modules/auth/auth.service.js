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
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const user_model_1 = require("../user/user.model");
const signInUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = payload;
    // Find the user by email
    const user = yield user_model_1.User.findOne({ email });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'User not found');
    }
    // Compare the provided password with the stored hashed password
    //   const isPasswordMatch = name === user.name;
    //   if (!isPasswordMatch) {
    //     throw new ApiError(httpStatus.BAD_REQUEST, 'user does not matched');
    //   }
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ userEmail: user.email, role: user.role }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    return { accessToken };
});
exports.AuthService = {
    signInUser,
};
