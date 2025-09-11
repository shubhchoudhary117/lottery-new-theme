import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import toast from "react-hot-toast";

export interface toastifyState {
    success: string,
    error: string
}

const initialState: toastifyState = {
    success: "",
    error: ""
}

// create a global toastify for reducing rewriting same code
export const ToastifySlice = createSlice({
    name: "Global Toastify",
    initialState,
    reducers: {
        notifyError: (state, action) => {
            toast.dismiss();
            toast.error(action.payload, { duration: 3000, icon: '' })
        },
        notifySuccess: (state, action) => {
            toast.dismiss();
            toast.success(action.payload, { duration: 3000 })
        }
    }
})


export const { notifyError, notifySuccess } = ToastifySlice.actions;
export default ToastifySlice.reducer