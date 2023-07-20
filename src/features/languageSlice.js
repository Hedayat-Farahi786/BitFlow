// src/store/languageSlice.js
import { createSlice } from '@reduxjs/toolkit';
import en from "../assets/languages/en.json";
import de from "../assets/languages/de.json";

const initialState = {
  language: 'english',
  data: {
    english: en,
    deutsch: de,
  },
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
