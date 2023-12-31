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

mongoose.connect(process.env.REACT_APP_MONGO_CONNECTION_KEY);

app.listen(3001, () => console.log("SERVER STARTED"));
