import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
export const SEARCH = 'SEARCH';

export const searchCategory = category => ({ type: SEARCH, category });

const initialState = {
  category: '',
};
export const action = {
  getSearchList: createAsyncThunk('SEARCH', async category => {
    const response = await axios.post('./category', category);
    return response.data;
  }),
};

export const reducer = {
  getSearchList: (state, action) => {
    state.getSearchList = action.payload.data;
  },
};

const searchReducer = createReducer(initialState, builder => {
  builder.addCase(action.getSearchList.fulfilled, reducer.getSearchList);
});

export default searchReducer;
