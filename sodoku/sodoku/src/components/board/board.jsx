// @flow
import * as React from 'react';
import { useState, useEffect } from 'react';
import Cell from '../cell/cell';

const Board = (props: Object): React.Node => {
  const [cells, setCells] = useState([]);

  const setupCells = () => {
    const _cells = [];
    const _l = props.cells * props.cells;
    for (let i = 0, len = _l; i < len; i += 1) {
      _cells.push(i+1);
    }
    setCells(_cells);
  }

  useEffect(setupCells, [props.cells]);

  return (
    <div className="sodoku-board">
      {
        cells.map((c, index) => {
          return <Cell key={index} value={index < 9 ? index + 1 : (index % 9) + 1}>{index}</Cell>
        })
      }
    </div>
  )
}

export default Board;