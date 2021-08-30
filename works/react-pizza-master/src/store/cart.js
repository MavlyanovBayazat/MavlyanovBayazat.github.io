import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: {}
  },
  reducers: {
    addToCart: (state, {payload: {pizza}}) => {
      // 1. Проверяю есть ли в корзине эта пицца
      if (state.cart[pizza.id]) {
        // 2. Если уже есть: Увеличиваю count у этой пиццы на 1
        state.cart = {
          ...state.cart,
          [pizza.id]: {
            ...state.cart[pizza.id],
            count: state.cart[pizza.id].count + 1,
          }
        }
      } else {
        // 2. Если нету: Добавляю в корзину
        state.cart = {
          ...state.cart,
          [pizza.id]: {
            count: 1,
            pizza: pizza
          }
        }
      }
    },
    deleteFromCart: (state, {payload: {pizza, deleteAll = false}}) => {
      // 1. Проверяю есть ли в корзине эта пицца и кол-во больше 1
      if (state.cart[pizza.id] && state.cart[pizza.id].count > 1 && !deleteAll) {
        // 2. Если уже есть и кол-во больше 1: Уменьшаю count у этой пиццы на 1
        state.cart = {
          ...state.cart,
          [pizza.id]: {
            ...state.cart[pizza.id],
            count: state.cart[pizza.id].count - 1,
          }
        }
      } else {
        // 2. Если вдруг пиццы такой нету или кол-во = 1: Удаляю из корзины
        const newCart = {...state.cart}
        delete newCart[pizza.id]
  
        state.cart = newCart
      }
    },
  },
})

export const { addToCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer