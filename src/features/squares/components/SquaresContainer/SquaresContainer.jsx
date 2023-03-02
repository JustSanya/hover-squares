import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getModes, selectGameStatus } from '../../squaresSlice';

import ModeSelector from '../ModeSelector';
import ToggleGame from '../ToggleGame';
import GameBoard from '../GameBoard';
import HoveredList from '../HoveredList';

import styles from './SqauresContainer.module.css';

const SquaresContainer = () => {
  const dispatch = useDispatch();
  const gameInProgress = useSelector(selectGameStatus);

  useEffect(() => {
    const fetchModes = async () => {
      await dispatch(getModes()).unwrap();
    }

    fetchModes();
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.controls}>
          <ModeSelector />
          <ToggleGame />
        </div>
        {gameInProgress && <GameBoard />}
      </div>
      <HoveredList />
    </div>
  )
}

export default SquaresContainer;