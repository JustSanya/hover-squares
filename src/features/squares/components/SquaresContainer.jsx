import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getModes } from '../squaresSlice';

import ModeSelector from './ModeSelector';

const SquaresContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchModes = async () => {
      await dispatch(getModes()).unwrap();
    }

    fetchModes();
  }, [dispatch])

  return (
    <div>
      <ModeSelector />
    </div>
  )
}

export default SquaresContainer;