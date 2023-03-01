import React from 'react'
import styles from './GameBoard.module.css';

const BoardCell = ({coord}) => {
  return (
    <div className={styles.cell}>{coord}</div>
  )
}

export default BoardCell