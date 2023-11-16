import { IStripe } from './payment.interface';
import { Payment } from './payment.model';

const interIntoDb = async (payload: IStripe): Promise<IStripe> => {
  const result = await Payment.create(payload);
  return result;
};

export const PaymentService = { interIntoDb };
