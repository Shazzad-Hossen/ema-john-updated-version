import { configureStore } from '@reduxjs/toolkit'
import productReducer from './AllProducts/productsSlice'


export const store = configureStore({
  reducer: {
    products: productReducer,
    
    
  },
})