import React from 'react';
import './App.css';
import { GoodFromServer } from './types';
import { GoodsList } from './GoodsList';
import { mapGoods } from './goods';
import { goods as goodsFromServer } from './api/data';
import { AddGoodForm, NewGood } from './AddGoodForm';

interface State {
  goods: GoodFromServer[];
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
  };

  addGood = (good: NewGood) => {
    this.setState(currentState => ({
      goods: [
        ...currentState.goods,
        {
          ...good,
          id: currentState.goods.length + 1,
        },
      ],
    }));
  };

  render() {
    const {
      goods,
    } = this.state;

    const mappedGoods = mapGoods(goods);

    return (
      <div className="App">
        <h1>Add goods form</h1>
        <AddGoodForm onSubmit={this.addGood} />

        <GoodsList goods={mappedGoods} />
      </div>
    );
  }
}
