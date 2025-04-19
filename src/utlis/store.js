import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice.js";
import searchSlice from "./searchSlice.js";
import chatSlice from "./chatSlice.js";
import searchResultSlice from "./searchResultSlice.js";
const store = configureStore({
    reducer: {
      // This is where we combine all our slices (pieces of state logic)
      app: appSlice,       // Manages app-related state like isMenuOpen
      search: searchSlice, // Manages search suggestions or search history
      chat: chatSlice,     // Manages live chat or messages
      searchResult: searchResultSlice,
    },
  });
  

export default store;