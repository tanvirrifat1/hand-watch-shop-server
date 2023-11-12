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

const getAllData = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};

const updateData = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteData = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete({ _id: id }, { new: true });
  return result;
};

export const UserService = { insertIntoDb, getAllData, updateData, deleteData };
