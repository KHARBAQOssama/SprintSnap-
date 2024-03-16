import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/slice'
import projectReducer from '../features/project/slice'
import notificationReducer from '../features/notification/slice'
import appStatusReducer from '../features/appStatus/slice'

export const store = configureStore({
    reducer : {
        auth: authReducer,
        project: projectReducer,
        notification: notificationReducer,
        appStatus: appStatusReducer,
    }
})