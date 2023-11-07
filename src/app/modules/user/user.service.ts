import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ICart } from '../Cart/cart.interface';
import { IUser } from './user.interface';
import { User } from './user.model';

const insertIntoDb = async (payload: ICart): Promise<IUser> => {
  const existingUser = await User.findOne({ email: payload.email });

  if (existingUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'user already exist');
  }

  const result = await User.create(payload);
  return result;
};

export const UserService = { insertIntoDb };
