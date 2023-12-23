import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchBannerDataWithToken = createAsyncThunk(
  'banner/fetchBannerDataWithToken',
  async (token, {rejectWithValue}) => {
    try {
      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/banner',
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
        throw new Error('Failed to fetch banner data');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    bannerData: [],
  },
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBannerDataWithToken.fulfilled, (state, action) => {
      state.bannerData = action.payload;
    });
  },
});

export const {setBannerData} = bannerSlice.actions;
export const selectBannerData = state => state.banner.bannerData;

export default bannerSlice.reducer;
