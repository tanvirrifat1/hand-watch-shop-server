import { Cart } from '../Cart/cart.model';
import { Menu } from '../Menu/menu.model';
import { Reviews } from '../reviews/reviews.model';
import { User } from '../user/user.model';
import { IStripe } from './payment.interface';
import { Payment } from './payment.model';

const interIntoDb = async (payload: IStripe): Promise<IStripe> => {
  const result = await Payment.create(payload);
  return result;
};

const getAllData = async (payload: IStripe) => {
  const result = await Payment.find({ email: payload.email });

  return result;
};

const getAllDataTotal = async () => {
  try {
    const cart = await Cart.find();
    const user = await User.find();
    const menu = await Menu.find();

    // Get the length of the 'cart' array
    const cartLength = cart.length;
    const userLength = user.length;
    const menuLength = menu.length;

    const result = await Payment.aggregate([
      {
        $group: {
          _id: null,
          totalPrice: { $sum: { $toDouble: '$price' } },
        },
      },
    ]);

    return {
      totalPrice: result[0].totalPrice,
      cartLength,
      userLength,
      menuLength,
    };
  } catch (error) {
    console.error('Error calculating total price:', error);
    throw error;
  }
};

const getAllDataTotalUSEr = async () => {
  const menu = await Menu.find();

  const menuLength = menu.length;
  const result = await Cart.aggregate([
    {
      $group: {
        _id: '$email',
        quantity: { $sum: 1 },
      },
    },
  ]);
  const result3 = await Reviews.aggregate([
    {
      $group: {
        _id: '$email',
        quantity: { $sum: 1 },
      },
    },
  ]);

  const result2 = await Payment.aggregate([
    {
      $group: {
        _id: '$email',
        quantity: { $sum: 1 },
      },
    },
  ]);

  return { result, result2, result3, menuLength };
};

export const PaymentService = {
  interIntoDb,
  getAllData,
  getAllDataTotal,
  getAllDataTotalUSEr,
};
