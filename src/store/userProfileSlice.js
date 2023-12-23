import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import ImagePicker from 'react-native-image-picker';

export const fetchUserProfileWithToken = createAsyncThunk(
  'userProfile/fetchUserProfileWithToken',
  async (token, {rejectWithValue}) => {
    try {
      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/profile',
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

export const updateProfileWithToken = createAsyncThunk(
  'userProfile/updateProfileWithToken',
  async ({token, firstName, lastName}, {rejectWithValue}) => {
    try {
      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/profile/update',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
          }),
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

export const updateProfileImageWithToken = createAsyncThunk(
  'userProfile/updateProfileImageWithToken',
  async (token, {rejectWithValue}) => {
    try {
      const profileImage = await pickImage();

      const formData = new FormData();
      formData.append('profile_image', {
        uri: profileImage.uri,
        type: profileImage.type,
        name: 'profile_image.jpg',
      });

      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/profile/image',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
          body: formData,
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

export const pickImage = () => {
  return new Promise((resolve, reject) => {
    ImagePicker.showImagePicker(
      {title: 'Select Image', maxWidth: 500, maxHeight: 500},
      response => {
        if (response.didCancel) {
          reject('Image selection cancelled.');
        } else if (response.error) {
          reject(`ImagePicker Error: ${response.error}`);
        } else {
          resolve(response);
        }
      },
    );
  });
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    userProfileData: null,
  },
  reducers: {
    setUserProfileData: (state, action) => {
      state.userProfileData = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserProfileWithToken.fulfilled, (state, action) => {
        state.userProfileData = action.payload;
      })
      .addCase(updateProfileWithToken.fulfilled, (state, action) => {
        state.userProfileData = action.payload;
      })
      .addCase(updateProfileImageWithToken.fulfilled, (state, action) => {
        state.userProfileData = action.payload;
      });
  },
});

export const {setUserProfileData} = userProfileSlice.actions;
export const selectUserProfile = state => state.userProfile.userProfileData;

export default userProfileSlice.reducer;
