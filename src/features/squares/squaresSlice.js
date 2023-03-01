import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchModes } from './squaresAPI';

const initialState = {
  modes: [],
  currentMode: {},
  hoveredCells: [],
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
      }
    },
    toggleGameStatus: (state) => {
      if (state.gameInProgress && !window.confirm('Stop playing?')) return;

      if (!state.currentMode || !state.currentMode.field) return alert('Please select a mode to start game.');

      state.gameInProgress = !state.gameInProgress;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getModes.fulfilled, (state, action) => {
        state.modes = action.payload;
      })
  }
});

export const { toggleGameStatus, updateMode } = squaresSlice.actions;

export const selectModes = (state) => state.squares.modes;
export const selectMode = (state) => state.squares.currentMode;
export const selectGameStatus = (state) => state.squares.gameInProgress;
export const selectHoveredCells = (state) => state.squares.hoveredCells;

export default squaresSlice.reducer;
