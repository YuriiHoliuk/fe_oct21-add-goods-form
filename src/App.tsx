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
  nameError: string | null;
  colorError: string | null;
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    newGoodName: '',
    newGoodColor: 0,
    nameError: null,
    colorError: null,
  };

  handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { newGoodName, newGoodColor } = this.state;

    const nameError = newGoodName
      ? null
      : 'Name is required';
    const colorError = newGoodColor
      ? null
      : 'Color is required';

    const isValid = !colorError && !nameError;

    if (isValid) {
      this.addGood();
      this.setState({ newGoodName: '', newGoodColor: 0 });
    } else {
      this.setState({
        nameError,
        colorError,
      });
    }
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
      nameError: null,
      colorError: null,
    });
  };

  handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      newGoodColor: Number(event.target.value),
      colorError: null,
    });
  };

  render() {
    const {
      goods,
      newGoodName,
      newGoodColor,
      nameError,
      colorError,
    } = this.state;

    const mappedGoods = mapGoods(goods);

    return (
      <div className="App">
        <h1>Add goods form</h1>
        <form name="newGood" onSubmit={this.handleSubmit}>
          <label className={`control ${nameError ? 'control--invalid' : ''}`}>
            <p>Name</p>
            <input
              type="text"
              name="newGoodName"
              onChange={this.handleNameChange}
              value={newGoodName}
            />
            <p className="error">
              {nameError}
            </p>
          </label>

          <label>
            <p>Color</p>
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
            <p className="error">
              {colorError}
            </p>
          </label>
          <button type="submit">
            Add
          </button>
        </form>

        <GoodsList goods={mappedGoods} />
      </div>
    );
  }
}
