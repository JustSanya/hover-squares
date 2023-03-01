import React from 'react'
import { useSelector } from 'react-redux';
import { selectMatrix } from '../../squaresSlice';

import Row from './BoardRow';
import Cell from './BoardCell';
import styles from './GameBoard.module.css';

const GameBoard = () => {
  const matrix = useSelector(selectMatrix);

  console.log(matrix);

  return (
    <div className={styles.board}>
      {matrix.map((row, index) => (
        <Row key={index}>
          {row.map(cell => <Cell key={cell} coord={cell} />)}
        </Row>
      ))}
    </div>
  )
}

export default GameBoard