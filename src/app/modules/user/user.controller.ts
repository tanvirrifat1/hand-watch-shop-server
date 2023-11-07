import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const { ...MenuItems } = req.body;
  const result = await UserService.insertIntoDb(MenuItems);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created successfully',
    data: result,
  });
});

export const UserController = { insertIntoDb };
