import React from 'react'
import { useSelector } from 'react-redux'
import { selectHoveredCells } from '../../squaresSlice';
import styles from './HoveredList.module.css'

const HoveredList = () => {
  const hoveredCells = Object.keys(useSelector(selectHoveredCells));

  return (
    <div>
      <h2 className={styles.header}>Hover squares</h2>
      <ul className={styles.list}>
        {hoveredCells.map(cell => (
          <li key={cell} className={styles.item}>{`row ${+cell.split('-')[0] + 1} col ${+cell.split('-')[1] + 1}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default HoveredList