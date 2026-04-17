import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image, category } = action.payload;
      
      // Check if item already exists in cart
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += price;
      } else {
        state.items.push({
          id,
          name,
          price,
          image,
          category,
          quantity: 1,
          totalPrice: price,
        });
      }
      
      state.totalQuantity += 1;
      state.totalPrice += price;
    },

    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);
      
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.totalPrice;
        state.items.splice(itemIndex, 1);
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        const priceDifference = (quantity - item.quantity) * item.price;
        state.totalPrice += priceDifference;
        state.totalQuantity += (quantity - item.quantity);
        item.quantity = quantity;
        item.totalPrice = item.price * quantity;
      }
    },

    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      } else if (item && item.quantity === 1) {
        // Remove item if quantity reaches 0
        const itemIndex = state.items.findIndex(i => i.id === id);
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.totalPrice;
        state.items.splice(itemIndex, 1);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
