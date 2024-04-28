import { createSlice } from '@reduxjs/toolkit';

const initialState = { userInfo: null }; // Initial state for the user

const userSlice = createSlice({
  name: 'user', // Name for the slice of state
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.userInfo = action.payload
      console.log({ action })
    }
  },
});

export const userActions = userSlice.actions; // Export actions
export default userSlice.reducer; // Export the reducer
