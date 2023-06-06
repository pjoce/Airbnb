import { createSlice } from '@reduxjs/toolkit';

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    goodsInfo: {}
  },
  reducers: {
    updateGoodsInfo(state, { payload }) {
      state.goodsInfo = payload;
    }
  }
});

export const { updateGoodsInfo } = detailSlice.actions;
export default detailSlice.reducer;
