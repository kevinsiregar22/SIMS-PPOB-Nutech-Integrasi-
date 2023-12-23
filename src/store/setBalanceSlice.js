import {createSlice} from '@reduxjs/toolkit';

const setBalanceSlice = createSlice({
  name: 'setBalance',
  initialState: {value: 0},
  reducers: {
    setBalance: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setBalance} = setBalanceSlice.actions;
export default setBalanceSlice.reducer;
