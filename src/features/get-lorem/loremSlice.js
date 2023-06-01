import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLorem = createAsyncThunk(
  'lorem/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://baconipsum.com/api/?type=tst');
      return data;
    } catch (error) {
      console.log('axios error1');
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const loremSlice = createSlice({
  name: 'getLorem',
  initialState: {
    data: [],
    isSuccess: false,
    loading: false,
    message: 'initial message',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLorem.pending, (state, { payload }) => {
      state.data = [];
      state.loading = true;
      state.message = 'pending message';
    });
    builder.addCase(getLorem.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.isSuccess = true;
      state.message = 'fufilled message';
    });
    builder.addCase(getLorem.rejected, (state, { payload }) => {
      state.message = 'rejected message';
    });
  },
});
export const { increase } = loremSlice.actions;
export default loremSlice.reducer;
