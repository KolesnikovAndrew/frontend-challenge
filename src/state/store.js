import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const ADD_FAVORITE_CAT = "ADD_FAVORITE_CAT";
const REMOVE_FAVORITE_CAT = "REMOVE_FAVORITE_CAT";
let initialState = {
  favoriteCats: [],
};
function cats(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVORITE_CAT":
      return {
        ...state,
        favoriteCats: state.favoriteCats.concat([action.cat]),
      };
    case "REMOVE_FAVORITE_CAT":
      return {
        ...state,
        favoriteCats: state.favoriteCats.filter((cat) => {
          return cat.id != action.cat.id;
        }),
      };
    default:
      return state;
  }
}
const store = configureStore({
  reducer: cats,
  enchancers: applyMiddleware(thunkMiddleware),
});

export const addFavorite = (cat) => ({ type: ADD_FAVORITE_CAT, cat });
export const removeFavorite = (cat) => ({ type: REMOVE_FAVORITE_CAT, cat });

export default store;
