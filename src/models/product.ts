import { Schema, model } from "mongoose";

export interface IProduct {
	id: number;
	name: string;
	price: number;
	images: string[];
	bestseller: boolean;
	available: number;
	category: string;
	new: boolean;
	color: string;
	sale: boolean;
}

const ProductSchema = new Schema<IProduct>({
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

export const ProductModel = model<IProduct>("product", ProductSchema);
