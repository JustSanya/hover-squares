import React from 'react'
import { useSelector } from 'react-redux';
import { selectMatrix, selectHoveredCells } from '../../squaresSlice';

import Row from './BoardRow';
import Cell from './BoardCell';
import styles from './GameBoard.module.css';

const GameBoard = () => {
  const matrix = useSelector(selectMatrix);
  const hoveredCells = useSelector(selectHoveredCells);

  return (
    <div className={styles.board}>
      {matrix.map((row, index) => (
        <Row key={index}>
          {row.map(cell => <Cell hovered={hoveredCells[cell]} key={cell} coord={cell} />)}
        </Row>
      ))}
    </div>
  )
}

export default GameBoard