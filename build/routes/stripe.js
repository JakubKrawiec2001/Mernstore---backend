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
exports.stripeRouter = void 0;
const express_1 = require("express");
require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY);
const router = (0, express_1.Router)();
exports.stripeRouter = router;
router.post("/create-checkout-session", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
            { shipping_rate: process.env.REACT_APP_STRIPE_SHIPPING_RATE },
        ],
        line_items: req.body.cartItems.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                    images: [item.images[0]],
                },
                unit_amount: parseFloat(item.price) * 100,
            },
            adjustable_quantity: {
                enabled: true,
                minimum: 1,
            },
            quantity: item.quantity,
        })),
        success_url: process.env.REACT_APP_STRIPE_SUCCESS_URL,
        cancel_url: process.env.REACT_APP_STRIPE_CANCEL_URL,
    });
    res.status(200).json(session);
}));
