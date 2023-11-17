export type IStripe = {
  email: string;
  name?: string;
  stripeCustomerId?: string;
  price?: string;
};

export type PaymentData = {
  total: number;
  result: IStripe[];
};
