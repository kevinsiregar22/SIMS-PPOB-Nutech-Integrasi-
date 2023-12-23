import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchBalance = createAsyncThunk(
  'balance/fetchBalance',
  async token => {
    const response = await fetch(
      'https://take-home-test-api.nutech-integrasi.app/balance',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch balance data');
    }

    const data = await response.json();
    return data.data.balance;
  },
);

const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    value: 0,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBalance.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchBalance.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchBalance.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default balanceSlice.reducer;
