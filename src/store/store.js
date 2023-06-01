import { configureStore } from '@reduxjs/toolkit';
import getLoremReducer from '../features/get-lorem/loremSlice';

export default configureStore({
  reducer: {
    lorem: getLoremReducer,
  },
});
