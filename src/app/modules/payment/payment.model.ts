import { Schema, model } from 'mongoose';
import { IStripe } from './payment.interface';

const paymentSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    stripeCustomerId: { type: String },
    price: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Payment = model<IStripe>('payment', paymentSchema);
