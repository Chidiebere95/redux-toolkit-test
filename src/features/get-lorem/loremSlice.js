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
      rejectWithValue(error.responses.data);
      console.log(); 
      console.log('axios error2');
    }
  }
);

const loremSlice = createSlice({
  name: 'getLorem',
  initialState: {
    data: [],
    isSuccess: false,
    loading: false,
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLorem.pending, (state, { payload }) => {
      state.data = payload;
      state.loading = true;
    });
    builder.addCase(getLorem.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.isSuccess = true;
      state.message = 'fufilled message hahaha';
    });
    builder.addCase(getLorem.rejected, (state, { payload }) => {
      state.message = 'rejected message hahaha';
    });
  },
});
export const { increase } = loremSlice.actions;
export default loremSlice.reducer;
