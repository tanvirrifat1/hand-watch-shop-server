import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CartService } from './cart.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const menuItems = req.body;

  const result = await CartService.interIntoDb(menuItems);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cart created successfully',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const email = req.query.email as string;
  if (!email) {
    sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: 'Email is required',
    });
    return;
  }

  const result = await CartService.getAllData({ email });

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

const getAllDataTotal = catchAsync(async (req: Request, res: Response) => {
  const result = await CartService.getAllDataTotal();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cart fetched for total successfully',
    data: result,
  });
});

const getSingleData = catchAsync(async (req: Request, res: Response) => {
  const result = await CartService.getSingleData(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cart single successfully',
    data: result,
  });
});

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await CartService.deleteData(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cart deleted successfully',
    data: result,
  });
});

export const cartController = {
  insertIntoDb,
  getAllData,
  updatedData,
  getSingleData,
  deleteData,
  getAllDataTotal,
};
