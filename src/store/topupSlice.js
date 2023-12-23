// TopUpSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchBalance} from './balanceSlice';

export const topupAmount = createAsyncThunk(
  'topup/topupAmount',
  async (amount, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    // const token = getState().auth.token;
    console.log(('Token topu : ', token));
    try {
      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/topup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            top_up_amount: amount,
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Gagal melakukan top-up saldo');
      }

      const data = await response.json();
      // return data.data.balance;
      const newBalance = data.data.balance;

      await thunkAPI.dispatch(fetchBalance(token));
      return newBalance;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const topupSlice = createSlice({
  name: 'topup',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(topupAmount.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(topupAmount.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(topupAmount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default topupSlice.reducer;
