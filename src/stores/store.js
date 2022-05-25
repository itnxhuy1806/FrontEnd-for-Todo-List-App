import { configureStore } from '@reduxjs/toolkit'
import loggedReducer from './features/loggedReducer'
import settingReducer from './features/settingReducer'

export default configureStore({
  reducer: {
    logged: loggedReducer,
    setting: settingReducer
  },
  devTools: true
})