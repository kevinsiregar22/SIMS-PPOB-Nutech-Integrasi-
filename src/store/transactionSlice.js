import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchTransaction = createAsyncThunk(
  'transaction/fetchTransaction',
  async (serviceCode, {getState}) => {
    const token = getState().auth.token;

    const response = await fetch(
      'https://take-home-test-api.nutech-integrasi.app/transaction',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          service_code: serviceCode,
        }),
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch transaction data');
    }

    const data = await response.json();
    return data.data;
  },
);

export const fetchTransactionHistory = createAsyncThunk(
  'transaction/fetchTransactionHistory',
  async ({offset, limit}, {getState}) => {
    const token = getState().auth.token;

    const response = await fetch(
      `https://take-home-test-api.nutech-integrasi.app/transaction/history?offset=${offset}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch transaction history data');
    }

    const data = await response.json();
    return data.data.records;
  },
);

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    data: [],
    history: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTransaction.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTransaction.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.push(action.payload);
      })
      .addCase(fetchTransaction.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchTransactionHistory.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTransactionHistory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.history = action.payload;
      })
      .addCase(fetchTransactionHistory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default transactionSlice.reducer;
