import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer, // Add more reducers here as needed
});

export default rootReducer;
