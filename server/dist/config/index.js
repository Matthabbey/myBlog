"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectMongoDB = async () => {
    mongoose_1.default.set("strictQuery", false);
    const connected = await mongoose_1.default.connect(process.env.MONGO_DB_CONNECTION);
    console.log(`Connected to DB`);
};
exports.default = connectMongoDB;
