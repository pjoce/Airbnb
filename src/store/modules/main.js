import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: false,
      topAlpha: false
    }
  },
  reducers: {
    updateHeaderConfig(state, { payload }) {
      state.headerConfig = payload;
    }
  }
});

export const { updateHeaderConfig } = mainSlice.actions;
export default mainSlice.reducer;
