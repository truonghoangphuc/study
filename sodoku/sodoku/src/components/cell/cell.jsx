// @flow
import * as React from 'react';

const Cell = (props: Object): React.Node => {

  return (
    <div className="sodoku-cell">{props.value}</div>
  )
}

export default Cell;