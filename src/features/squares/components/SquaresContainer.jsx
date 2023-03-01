import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getModes } from '../squaresSlice';

const SquaresContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchModes = async () => {
      await dispatch(getModes()).unwrap();
    }

    fetchModes();
  }, [dispatch])

  return (
    <div>SquaresContainer</div>
  )
}

export default SquaresContainer;