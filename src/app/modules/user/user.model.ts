import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const userItem = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },
    email: {
      type: String,
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

export const User = model<IUser>('user', userItem);
