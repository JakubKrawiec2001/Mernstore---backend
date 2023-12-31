import { Router } from "express";
require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY);

const router = Router();

router.post("/create-checkout-session", async (req, res) => {
	const session = await stripe.checkout.sessions.create({
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
});

export { router as stripeRouter };
