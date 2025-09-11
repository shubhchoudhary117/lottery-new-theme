import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react'

export interface AkdaType {
    selectedAkda: any,
}

const initialState: AkdaType = {
    selectedAkda: {}
}

export const SelectedAkdaSlice = createSlice({
    name: 'Selected Akda ',
    initialState,
    reducers: {

        setSelectedAkda: (state, action) => {
            state.selectedAkda = action.payload;
        },


    },
})

// Action creators are generated for each case reducer function
export const { setSelectedAkda } = SelectedAkdaSlice.actions

export default SelectedAkdaSlice.reducer