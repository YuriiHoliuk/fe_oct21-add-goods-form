import { colors } from './api/data';
import { GoodFromServer, Goods } from './types';

const getColorById = (id: number) => {
  const color = colors.find((currentColor) => currentColor.id === id);

  return color
    ? color.name
    : 'black';
};

export const mapGoods = (goods: GoodFromServer[]): Goods => {
  console.log('Map');

  return (
    goods.map(good => ({
      ...good,
      color: getColorById(good.colorId),
    }))
  );
};
