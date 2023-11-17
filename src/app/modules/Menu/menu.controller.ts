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
  const result = await MenuService.getAllData();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Menu fetched successfully',
    data: result,
  });
});

const updateAll = catchAsync(async (req: Request, res: Response) => {
  const result = await MenuService.updateAll();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Menu updated ALL successfully',
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

const getSingleData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await MenuService.getSingleData(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single menu fetched successfully',
    data: result,
  });
});

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await MenuService.deleteData(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'menu deleted successfully',
    data: result,
  });
});

export const MenuController = {
  insertIntoDb,
  getAllData,
  updatedData,
  getSingleData,
  deleteData,
  updateAll,
};
