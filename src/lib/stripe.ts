import Stripe from "stripe";

const stripeApi = process.env.STRIPE_SECRET_KEY as string

export const stripe = new Stripe(stripeApi, {
  apiVersion: "2023-10-16",
  appInfo: {
    name: 'Ignite Shop',
  }
})
