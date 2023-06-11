import { configureStore,combineReducers } from "@reduxjs/toolkit";
import StarReducer from "./Slices/star";

const rootFavorite = combineReducers({
    favorites:StarReducer,
})

const store = configureStore({
    reducer:rootFavorite,
    });
export default store;