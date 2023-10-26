import { IMenu } from './menu.interface';
import { Menu } from './menu.model';

const interIntoDb = async (payload: IMenu): Promise<IMenu> => {
  const result = await Menu.create(payload);
  return result;
};

const getAllData = async (payload: IMenu): Promise<IMenu[]> => {
  const result = await Menu.find(payload);
  return result;
};

const updatedData = async (
  id: string,
  payload: IMenu
): Promise<IMenu | null> => {
  const result = await Menu.findByIdAndUpdate(id, payload);
  return result;
};

export const MenuService = { interIntoDb, getAllData, updatedData };
