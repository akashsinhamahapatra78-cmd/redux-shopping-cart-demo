import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.push({
          ...action.payload,
          quantity: 1
        })
      }
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.find(item => item.id === id)
      if (item) {
        if (quantity <= 0) {
          return state.filter(item => item.id !== id)
        }
        item.quantity = quantity
      }
    },
    clearCart: () => {
      return []
    }
  }
})

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
