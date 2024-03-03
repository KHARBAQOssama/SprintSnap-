import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/slice'
import projectReducer from '../features/project/slice'

export const store = configureStore({
    reducer : {
        auth: authReducer,
        project: projectReducer,
    }
})