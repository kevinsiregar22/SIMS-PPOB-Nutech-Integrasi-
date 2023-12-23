import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async (_, {rejectWithValue, getState}) => {
    try {
      const token = getState().auth.token;

      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/services',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      if (data.status === 0) {
        return data.data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const serviceSlice = createSlice({
  name: 'services',
  initialState: {data: [], status: 'idle', error: null},
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchServices.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default serviceSlice.reducer;
export const selectServiceData = state => state.services.data;
export const selectServiceStatus = state => state.services.status;
export const selectServiceError = state => state.services.error;
