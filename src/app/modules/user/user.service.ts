import { ICart } from '../Cart/cart.interface';
import { IUser } from './user.interface';
import { User } from './user.model';

const insertIntoDb = async (payload: ICart): Promise<IUser> => {
  const result = await User.create(payload);
  return result;
};

export const UserService = { insertIntoDb };
