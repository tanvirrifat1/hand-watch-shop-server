import { IMenu } from './menu.interface';
import { Menu } from './menu.model';

const interIntoDb = async (payload: IMenu): Promise<IMenu> => {
  const result = await Menu.create(payload);
  return result;
};

const getAllData = async (): Promise<IMenu[]> => {
  const result = await Menu.find();
  return result;
};

const getSingleData = async (id: string) => {
  const result = await Menu.findById(id);
  return result;
};

const updatedData = async (
  id: string,
  payload: IMenu
): Promise<IMenu | null> => {
  const result = await Menu.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const updateAll = async () => {
  const result = await Menu.updateMany(
    { name: 'TAG_Heuer' },
    { name: 'TAGHeuer' },
    { new: true }
  );
  return result;
};

const deleteData = async (id: string): Promise<IMenu | null> => {
  const result = await Menu.findByIdAndRemove(id, { new: true });
  return result;
};

export const MenuService = {
  interIntoDb,
  getAllData,
  updatedData,
  getSingleData,
  deleteData,
  updateAll,
};
