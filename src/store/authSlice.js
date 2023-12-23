import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, {rejectWithValue}) => {
    try {
      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/registration',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
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

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, {rejectWithValue}) => {
    try {
      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
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

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    clearToken: state => {
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
      });
  },
});

export const {setToken, clearToken} = authSlice.actions;
export const selectToken = state => state.auth.token;

export default authSlice.reducer;
