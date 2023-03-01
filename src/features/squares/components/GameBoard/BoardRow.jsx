import React from 'react';
import styles from './GameBoard.module.css';

const BoardRow = ({children}) => {
  return (
    <div className={styles.row}>{children}</div>
  )
}

export default BoardRow