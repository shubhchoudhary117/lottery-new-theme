import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SelectedCoinType {
  id: string;
  value: number;
  inRupee: number;
  SVG: any;
}

export interface CoinStateType {
  selectedCoin: SelectedCoinType | null;
}

const initialState: CoinStateType = {
  selectedCoin: null,
};

export const CoinSlice = createSlice({
  name: 'Bet open close',
  initialState,
  reducers: {
    setSelectedCoin: (state, action: PayloadAction<SelectedCoinType>) => {
      state.selectedCoin = action.payload;
    },
    resetSelectedCoin: (state) => {
      state.selectedCoin = null;
    },
  },
});

export const { setSelectedCoin, resetSelectedCoin } = CoinSlice.actions;

export default CoinSlice.reducer;
