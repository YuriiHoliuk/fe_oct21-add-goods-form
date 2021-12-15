import { goods as goodsFromServer, colors } from './api/data';

const getColorById = (id: number) => {
  const color = colors.find((currentColor) => currentColor.id === id);

  return color
    ? color.name
    : 'black';
};

export const goods: Goods = goodsFromServer.map(good => ({
  ...good,
  color: getColorById(good.colorId),
}));
