import { IReviews } from './reviews.interface';
import { Reviews } from './reviews.model';

const interIntoDb = async (payload: IReviews): Promise<IReviews> => {
  const result = await Reviews.create(payload);
  return result;
};

const getAllData = async () => {
  const result = await Reviews.find();
  return result;
};

export const ReviewsService = {
  interIntoDb,
  getAllData,
};
