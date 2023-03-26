import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stringify } from "querystring";
interface GitHubState {
  favorites: string[];
}
const IS_FAV_KEY = "rfk";

const initialState: GitHubState = {
  favorites: JSON.parse(localStorage.getItem(IS_FAV_KEY) ?? "[]"),
};

const gitHubSlice = createSlice({
  name: "gitHub",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      state.favorites.push(action.payload);
      localStorage.setItem(IS_FAV_KEY, JSON.stringify(state.favorites));
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter((f) => f !== action.payload);
      localStorage.setItem(IS_FAV_KEY, JSON.stringify(state.favorites));
    },
  },
});

export const {addFavorite,removeFavorite} = gitHubSlice.actions;

export const gitHubReducer= gitHubSlice.reducer;
