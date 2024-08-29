import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/Redux'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})