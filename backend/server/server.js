import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/create-payment-intent", async (req, res) => {
  const { paymentMethodId, customerId } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000, // ₹50 or $50
    currency: "usd",
    customer: customerId,
    payment_method: paymentMethodId,
    confirm: true,
    automatic_payment_methods: {
      enabled: true,
      allow_redirects: "never",
    },
  });

  res.json(paymentIntent);
});
