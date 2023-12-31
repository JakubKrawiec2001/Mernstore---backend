import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";
import { stripeRouter } from "./routes/stripe";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/stripe", stripeRouter);

mongoose.connect(
	"mongodb+srv://kubakrawieckk04:kubakk2001@ecommerce.chuxxln.mongodb.net/ecommerce"
);

app.listen(3001, () => console.log("SERVER STARTED"));
