import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'light'
    },
    reducers: {
        toggleTheme: (currentState) => {
            currentState.mode = currentState.mode === 'light' ? 'dark' : 'light';
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;