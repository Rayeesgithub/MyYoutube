import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants.js";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      if (state.messages.length >= LIVE_CHAT_COUNT) {
  state.messages.pop(); // removes the oldest
}
      state.messages.unshift(action.payload);
    },
  },
});
export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;