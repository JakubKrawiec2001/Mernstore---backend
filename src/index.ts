import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";
import { stripeRouter } from "./routes/stripe";
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/stripe", stripeRouter);

mongoose.connect(process.env.MONGODB_URL);

app.listen(process.env.PORT || 3001, () => console.log("SERVER STARTED"));
