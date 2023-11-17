import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { PaymentService } from './payment.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentService.interIntoDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'payment successfully',
    data: result,
  });
});

const getAllDataTotal = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentService.getAllDataTotal();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get total payment successfully',
    data: result,
  });
});

const getAllDataTotalUSEr = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentService.getAllDataTotalUSEr();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get total user payment successfully',
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

  const result = await PaymentService.getAllData({ email });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'payment list fetched successfully',
    data: result,
  });
});

export const PaymentController = {
  insertIntoDb,
  getAllData,
  getAllDataTotal,
  getAllDataTotalUSEr,
};
