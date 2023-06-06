import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getEntireListData } from 'services';

export const fetchEntireData = createAsyncThunk('fetchdata', (currentPage = 1, { dispatch }) => {
  dispatch(updateIsLoading(true));
  dispatch(updateCurrentPage(currentPage));
  getEntireListData((currentPage - 1) * 20).then(res => {
    dispatch(updateIsLoading(false));
    dispatch(updateEntireList(res.list));
    dispatch(updateTotal(res.totalCount));
  });
});

const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    isLoading: false,
    currentPage: 1,
    entireList: [],
    total: 0
  },
  reducers: {
    updateIsLoading(state, { payload }) {
      state.isLoading = payload;
    },
    updateCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
    updateEntireList(state, { payload }) {
      state.entireList = payload;
    },
    updateTotal(state, { payload }) {
      state.total = payload;
    }
  }
});

export const { updateIsLoading, updateCurrentPage, updateEntireList, updateTotal } = entireSlice.actions;
export default entireSlice.reducer;
