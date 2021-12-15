import { Good } from './types';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.goods.map((good) => (
        <li key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};
