import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react'

export interface BetOpenCloseState {
  betIsOpen: boolean,
  betIsClose:boolean,
  betIsSelected:boolean
}

const initialState: BetOpenCloseState = {
  betIsOpen: false,
  betIsClose:false,
  betIsSelected:false
}

export const BetSlice= createSlice({
  name: 'Bet open close',
  initialState,
  reducers: {

    setBetIsOpen:(state,action)=>{
       state.betIsOpen=action.payload;
       state.betIsClose=false;
    },
    setBetIsClose:(state,action)=>{
        state.betIsClose=action.payload;
        state.betIsOpen=false;
    },
    setBetIsSelected:(state,action)=>{
      state.betIsSelected=action.payload
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { setBetIsOpen,setBetIsClose,setBetIsSelected} = BetSlice.actions

export default BetSlice.reducer