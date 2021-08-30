import { createSlice } from '@reduxjs/toolkit'

export const pizzaSlice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
    error: null,
    list: [],
  },
  reducers: {
    setLoading: (state, {payload: loading}) => {
      state.loading = loading
    },
    setError: (state, {payload: error}) => {
      state.error = error
    },
    setPizzasList: (state, {payload: pizzas}) => {
      state.list = pizzas
    },
  },
})

export const { setLoading, setError, setPizzasList } = pizzaSlice.actions

export default pizzaSlice.reducer