import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for the 'app' part of our state
const appSlice = createSlice({
    // The name of the slice (will be used in Redux DevTools etc.)
    name: "app",
    initialState: {
        isMenuOpen: window.innerWidth > 1040,     // Open by default only for large screens
        closeMenu:window.innerWidth<1040 ,
    },

    // Reducers are functions to change the state
    reducers: {
        // This function toggles the menu (open <-> close)
        togglemenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },

        // This function forces the menu to close
        closeMenu: (state) => {
            state.isMenuOpen = false;
        }
    }
});

// Exporting the individual actions so we can use them in components
export const { togglemenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
