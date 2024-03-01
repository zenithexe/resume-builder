import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "../features/resume/resumeSlice";


export const store = configureStore({
    reducer:resumeSlice
})