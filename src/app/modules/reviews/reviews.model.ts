import { Schema, model } from 'mongoose';
import { IReviews } from './reviews.interface';

const reviews = new Schema<IReviews>(
  {
    name: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Reviews = model<IReviews>('reviews', reviews);
