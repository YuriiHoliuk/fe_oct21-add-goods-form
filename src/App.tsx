import React from 'react';
import './App.css';
import { Goods } from './types';
import { GoodsList } from './GoodsList';
import { goods as initialGoods } from './goods';

interface State {
  goods: Goods;
}

export class App extends React.Component<{}, State> {
  state = {
    goods: initialGoods,
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Add goods form</h1>
        <GoodsList goods={goods} />
      </div>
    );
  }
}
