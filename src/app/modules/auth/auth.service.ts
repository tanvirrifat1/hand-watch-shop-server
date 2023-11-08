import { User } from '../user/user.model';
import { ISignInData } from './auth.interface';
// const jwt = require( 'jsonwebtoken' );

import jwt from 'jsonwebtoken';

const signInUser = async (payload: ISignInData) => {
  const { email, password } = payload;

  // Find the user by email
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('User not found');
  }

  // Compare the provided password with the stored hashed password
  const isPasswordMatch = password === user.password;

  if (!isPasswordMatch) {
    throw new Error('Password does not match');
  }

  // Generate a JWT token
  const token = jwt.sign(
    { userId: user._id, role: user.role },
    'yourSecretKey',
    {
      expiresIn: '1h', // Adjust the expiration time as needed
    }
  );

  return { accessToken: token };
};

export const AuthService = {
  signInUser,
};
