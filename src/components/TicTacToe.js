import React from 'react';
import Square from './Square';
import '../App.scss';

class TicTacToe extends React.Component {
  render() {
    return (
      <div className="grid">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
  }
}

export default TicTacToe;