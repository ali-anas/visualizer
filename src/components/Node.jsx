import React, { Component } from "react";
import "./Node.css";

class Node extends Component {
  render() {
    const {
      col,
      row,
      isStart,
      isFinish,
      isVisited,
      isWall,
      onMouseDown,
      onMouseUp,
      onMouseEnter,
    } = this.props;
    const extractClassName = isFinish
      ? "finish-node"
      : isStart
      ? "start-node"
      : isWall
      ? "wall-node"
      : "";

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extractClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      ></div>
    );
  }
}

export const DEFAULT_NODE = {
  row: 0,
  col: 0,
};

export default Node;
