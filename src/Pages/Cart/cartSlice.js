import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1; // Увеличиваем количество, если товар уже есть
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // Добавляем с количеством 1
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    updateItemQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCartItems = (state) => state.cart.cartItems;