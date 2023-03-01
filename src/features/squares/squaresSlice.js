import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchModes } from './squaresAPI';

const initialState = {
  modes: [],
  currentMode: {},
  hoveredCells: []
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
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getModes.fulfilled, (state, action) => {
        state.modes = action.payload;
      })
  }
});

export const { incrementByAmount } = squaresSlice.actions;

export const selectModes = (state) => state.squares.modes;
export const selectMode = (state) => state.squares.currentMode;
export const selectHoveredCells = (state) => state.squares.hoveredCells;

export default squaresSlice.reducer;
