import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CartService } from './cart.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const { ...MenuItems } = req.body;
  const result = await CartService.interIntoDb(MenuItems);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cart created successfully',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await CartService.getAllData(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cart fetched successfully',
    data: result,
  });
});

const updatedData = catchAsync(async (req: Request, res: Response) => {
  const result = await CartService.updatedData(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cart updated successfully',
    data: result,
  });
});

export const cartController = {
  insertIntoDb,
  getAllData,
  updatedData,
};