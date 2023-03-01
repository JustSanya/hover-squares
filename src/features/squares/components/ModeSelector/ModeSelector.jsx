import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectModes, selectMode, updateMode } from '../../squaresSlice'

const ModeSelector = () => {
  const modes = useSelector(selectModes);
  const currentMode = useSelector(selectMode);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateMode(e.target.value))
  }

  return (
    <div>
      <select value={currentMode?.field} onChange={handleChange}>
        <option>Pick mode</option>
        {modes.map((mode) => (
          <option key={mode.field} value={mode.field}>
            {mode.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ModeSelector