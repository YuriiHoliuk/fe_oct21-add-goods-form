import { Good } from './types';
import { Text } from './Text';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.goods.map((good) => (
        <li key={good.id} style={{ color: good.color }}>
          <Text>
            <span>{good.name}</span>
          </Text>
        </li>
      ))}
    </ul>
  );
};
