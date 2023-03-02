import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectGameStatus, toggleGameStatus } from '../../squaresSlice';
import styles from './ToggleGame.module.css';

const ToggleGame = () => {
  const gameStatus = useSelector(selectGameStatus);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleGameStatus())
  }

  return (
    <button className={styles.btn} onClick={handleClick}>{ gameStatus ? 'Stop' : 'Start' }</button>
  )
}

export default ToggleGame