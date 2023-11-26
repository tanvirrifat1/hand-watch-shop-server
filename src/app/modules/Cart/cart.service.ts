import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ICart } from './cart.interface';
import { Cart } from './cart.model';

const interIntoDb = async (payload: ICart): Promise<ICart> => {
  const res = await Cart.findOne({
    email: payload.email,
    productId: payload.productId,
  });
  if (res) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'already add to cart');
  }
  const result = await Cart.create(payload);
  return result;
};

const getAllData = async (payload: ICart): Promise<ICart[]> => {
  const result = await Cart.find({ email: payload.email });

  return result;
};

const getAllDataTotal = async () => {
  const result2 = await Cart.aggregate([
    {
      $group: {
        _id: '$name',
        quantity: { $sum: 1 },
      },
    },
  ]);

  return result2;
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

const updated = async (id: string, payload: ICart): Promise<ICart | null> => {
  const result = await Cart.findByIdAndUpdate(id, payload);
  return result;
};

export const CartService = {
  interIntoDb,
  getAllData,
  updated,
  updatedData,
  getSingleData,
  deleteData,
  getAllDataTotal,
};
