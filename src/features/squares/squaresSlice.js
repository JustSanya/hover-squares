import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './squaresAPI';

const initialState = {
  modes: [],
  currentMode: {},
  hoveredCells: []
};

export const incrementAsync = createAsyncThunk(
  'squares/fetchModes',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
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
});

export const { increment, decrement, incrementByAmount } = squaresSlice.actions;

export const selectModes = (state) => state.squares.modes;
export const selectMode = (state) => state.squares.currentMode;
export const selectHoveredCells = (state) => state.squares.hoveredCells;

export default squaresSlice.reducer;
