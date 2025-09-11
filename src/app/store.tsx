import { configureStore } from '@reduxjs/toolkit'
import ToastifyReducer from '../Redux/ToastifySlice/ToastifyReducer'
import BetReducer from '../Redux/BetReducer/BetReducer'
import SelectedAkdaReducer from '../Redux/AkdaReducer/SelectedAkdaReducer';
import CoinReducer from  "../Redux/CoinsReducer/CoinReducer";

export const store = configureStore({
  reducer: {
    BetReducer,
    ToastifyReducer,
    akda:SelectedAkdaReducer,
    selectedCoin:CoinReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch