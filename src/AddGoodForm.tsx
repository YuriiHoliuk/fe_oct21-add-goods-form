import React from 'react';
import { colors } from './api/data';

export interface NewGood {
  name: string;
  colorId: number;
}

interface Props {
  onSubmit(good: NewGood): void;
}

interface State {
  newGoodName: string;
  newGoodColor: number;
  nameError: string | null;
  colorError: string | null;
}

export class AddGoodForm extends React.Component<Props, State> {
  state: State = {
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
      this.props.onSubmit({
        name: newGoodName,
        colorId: newGoodColor,
      });
      this.setState({ newGoodName: '', newGoodColor: 0 });
    } else {
      this.setState({
        nameError,
        colorError,
      });
    }
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
      newGoodName,
      newGoodColor,
      nameError,
      colorError,
    } = this.state;

    return (
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
    );
  }
}
