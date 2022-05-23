import { configureStore } from '@reduxjs/toolkit'
import loggedReducer from './loggedReducer'

export default configureStore({
  reducer: {
    logged: loggedReducer
  }
})