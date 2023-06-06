import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDiscountData, getHotRecommenddestData, getGoodPriceData, getHighScoreData, getLongforData, getPlusData } from 'services';

export const fetchHomeData = createAsyncThunk('fetchdata', (payload, { dispatch }) => {
  getDiscountData().then(res => {
    dispatch(updateDiscountInfo(res));
  });
  getHotRecommenddestData().then(res => {
    dispatch(updateRecommenddestInfo(res));
  });
  getGoodPriceData().then(res => {
    dispatch(updateGoodPriceInfo(res))
  });
  getHighScoreData().then(res => {
    dispatch(updateHighScoreInfo(res));
  });
  getLongforData().then(res => {
    dispatch(updateLongforInfo(res));
  });
  getPlusData().then(res => {
    dispatch(updatePlusInfo(res));
  });
});

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    discountInfo: {},
    recommenddestInfo: {},
    goodPriceInfo: {},
    highScoreInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    updateDiscountInfo(state, { payload }) {
      state.discountInfo = payload
    },
    updateRecommenddestInfo(state, { payload }) {
      state.recommenddestInfo = payload;
    },
    updateGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    updateHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload;
    },
    updateLongforInfo(state, { payload }) {
      state.longforInfo = payload;
    },
    updatePlusInfo(state, { payload }) {
      state.plusInfo = payload;
    }
  }
});

export const { updateDiscountInfo, updateRecommenddestInfo, updateGoodPriceInfo, updateHighScoreInfo, updateLongforInfo, updatePlusInfo } = homeSlice.actions;
export default homeSlice.reducer;
