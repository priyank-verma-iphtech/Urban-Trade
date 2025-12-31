import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],          // saved card metadata
  selectedCardId: null, 
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addCard: (state, action) => {
      // action.payload = { id, brand, last4, expMonth, expYear }
      state.cards.push(action.payload);
    },
    selectCard: (state, action) => {
      state.selectedCardId = action.payload;
    },
  },
});

export const { addCard, selectCard } = paymentSlice.actions;
export default paymentSlice.reducer;
