import Stripe from 'stripe';
import config from '../../../config';

// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc', {
//   apiVersion: '2023-10-16',
// });

const stripe = new Stripe(config.stripe as string, '2023-10-16');

export default stripe;
