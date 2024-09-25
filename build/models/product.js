"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String, required: true }],
    bestseller: { type: Boolean, required: true },
    available: { type: Number, required: true },
    category: { type: String, required: true },
    new: { type: Boolean, required: true },
    color: { type: String, required: true },
    sale: { type: Boolean, required: true },
});
exports.ProductModel = (0, mongoose_1.model)("product", ProductSchema);
