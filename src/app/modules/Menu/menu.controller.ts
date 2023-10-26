import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { MenuService } from './menu.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const { ...MenuItems } = req.body;
  const result = await MenuService.interIntoDb(MenuItems);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Menu created successfully',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await MenuService.getAllData(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Menu fetched successfully',
    data: result,
  });
});

const updatedData = catchAsync(async (req: Request, res: Response) => {
  const result = await MenuService.updatedData(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Menu updated successfully',
    data: result,
  });
});

export const MenuController = {
  insertIntoDb,
  getAllData,
  updatedData,
};
