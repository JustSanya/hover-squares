import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchModes } from './squaresAPI';

const initialState = {
  modes: [],
  currentMode: {},
  hoveredCells: {},
  gameInProgress: false
};

export const getModes = createAsyncThunk(
  'squares/getModes',
  async () => {
    const response = await fetchModes();
    return response;
  }
);

export const squaresSlice = createSlice({
  name: 'squares',
  initialState,
  reducers: {
    updateMode: (state, action) => {
      let resetGame = false;

      if (state.gameInProgress) {
        resetGame = window.confirm('Reset current progress and start new game?');
      }

      if (resetGame || !state.gameInProgress) {
        state.currentMode = state.modes.find(mode => mode.field === Number(action.payload));
      }

      if (resetGame) {
        state.gameInProgress = false;
        state.hoveredCells = {};
      }
    },
    toggleGameStatus: (state) => {
      if (state.gameInProgress && !window.confirm('Stop playing?')) return;

      if (!state.currentMode || !state.currentMode.field) return window.alert('Please select a mode to start game.');

      state.gameInProgress = !state.gameInProgress;

      if (!state.gameInProgress) {
        state.hoveredCells = {};
      }
    },
    updateHoveredCells: (state, action) => {
      if (action.payload in state.hoveredCells) {
        delete state.hoveredCells[action.payload]
      } else {
        state.hoveredCells[action.payload] = true;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getModes.fulfilled, (state, action) => {
        state.modes = action.payload;
      })
  }
});

export const { toggleGameStatus, updateMode, updateHoveredCells } = squaresSlice.actions;

export const selectModes = (state) => state.squares.modes;
export const selectMode = (state) => state.squares.currentMode;
export const selectGameStatus = (state) => state.squares.gameInProgress;
export const selectHoveredCells = (state) => state.squares.hoveredCells;
export const selectMatrix = createSelector([selectMode], (gameMode) => {
  const cells = [];

  for (let i=0; i <= Math.pow(gameMode.field, 2) - 1; i++) {
    cells.push(i);
  }

  const matrix = cells.reduce((acc, cell) => {
    const row = Math.floor(cell / gameMode.field);

    if (acc[row]) {
      acc[row].push(`${row}${cell - row * gameMode.field}`);
    } else {
      acc.push([]);
      acc[row].push(`${row}${cell - row * gameMode.field}`);
    }

    return acc;
  }, [])

  return matrix;
})

export default squaresSlice.reducer;
