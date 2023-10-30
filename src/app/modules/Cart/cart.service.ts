import { ICart } from './cart.interface';
import { Cart } from './cart.model';

const interIntoDb = async (payload: ICart): Promise<ICart> => {
  const result = await Cart.create(payload);
  return result;
};

const getAllData = async (payload: ICart): Promise<ICart[]> => {
  const result = await Cart.find({ email: payload.email });

  return result;
};

const getSingleData = async (id: string): Promise<ICart | null> => {
  const result = await Cart.findById(id);
  return result;
};

const deleteData = async (id: string): Promise<ICart | null> => {
  const result = await Cart.findByIdAndDelete(id);
  return result;
};

const updatedData = async (
  id: string,
  payload: ICart
): Promise<ICart | null> => {
  const result = await Cart.findByIdAndUpdate(id, payload);
  return result;
};

export const CartService = {
  interIntoDb,
  getAllData,
  updatedData,
  getSingleData,
  deleteData,
};
