import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getModes, selectGameStatus } from '../squaresSlice';

import ModeSelector from './ModeSelector';
import ToggleGame from './ToggleGame';
import GameBoard from './GameBoard';

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
    <div>
      <ModeSelector />
      <ToggleGame />
      {gameInProgress && <GameBoard />}
    </div>
  )
}

export default SquaresContainer;