import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import pizzasReducer from './pizza'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    pizzas: pizzasReducer,
  }
})