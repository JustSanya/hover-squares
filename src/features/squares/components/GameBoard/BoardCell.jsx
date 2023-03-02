import React from 'react'
import { useDispatch } from 'react-redux';
import { updateHoveredCells } from '../../squaresSlice';
import styles from './GameBoard.module.css';

const BoardCell = ({coord, hovered}) => {
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    dispatch(updateHoveredCells(coord));
  }

  return (
    <div
      className={`${styles.cell} ${hovered && styles.hovered}`}
      onMouseEnter={handleMouseEnter}
    >
    </div>
  )
}

export default BoardCell