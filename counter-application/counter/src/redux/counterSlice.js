import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    changeRange: (state, action) => {
      state.value += action.payload;   //range setting loic is done here
    },
  },
});

export const { increament, decrement, reset, changeRange } = counterSlice.actions;
export default counterSlice.reducer;

