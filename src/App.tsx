import React from 'react';
import './App.css';
import { GoodFromServer } from './types';
import { GoodsList } from './GoodsList';
import { mapGoods } from './goods';
import { colors, goods as goodsFromServer } from './api/data';

interface State {
  goods: GoodFromServer[];
  newGoodName: string;
  newGoodColor: number;
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    newGoodName: '',
    newGoodColor: 0,
  };

  handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.addGood();
    this.addGood();
    this.addGood();

    this.setState({ newGoodName: '', newGoodColor: 0 });
  };

  addGood = () => {
    this.setState(currentState => ({
      goods: [
        ...currentState.goods,
        {
          name: currentState.newGoodName,
          id: currentState.goods.length + 1,
          colorId: currentState.newGoodColor,
        },
      ],
    }));
  };

  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newGoodName: event.target.value,
    });
  };

  handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      newGoodColor: Number(event.target.value),
    });
  };

  render() {
    const { goods, newGoodName, newGoodColor } = this.state;

    const mappedGoods = mapGoods(goods);

    return (
      <div className="App">
        <h1>Add goods form</h1>
        <form name="newGood" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="newGoodName"
            onChange={this.handleNameChange}
            value={newGoodName}
          />

          <select
            value={newGoodColor}
            onChange={this.handleColorChange}
            name="newGoodColor"
          >
            <option value={0} disabled>
              Choose a color
            </option>
            {colors.map(({ id, name }) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
          <button type="submit">
            Add
          </button>
        </form>

        <GoodsList goods={mappedGoods} />
      </div>
    );
  }
}
