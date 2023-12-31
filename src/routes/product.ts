import { Router, Response } from "express";
import { ProductModel } from "../models/product";

const router = Router();

router.get("/", async (_, res: Response) => {
	try {
		const products = await ProductModel.find({});
		res.json({ products });
	} catch (err) {
		res.status(400).json({ err });
	}
});

export { router as productRouter };
