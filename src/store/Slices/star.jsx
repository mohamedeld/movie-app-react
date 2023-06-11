import { createSlice } from "@reduxjs/toolkit";

const INITAIL_STATE = {
    favorites:[]
}
const StarReducer = createSlice({
    name:"favorites",
    initialState:INITAIL_STATE,
    reducers:{
        toggleFavourite:(state,action)=>{
            const movie = action.payload;
            // if (!Array.isArray(state.favorites)) {
            //     state.favorites = [];
            //   }
            
            const index = state.favorites.findIndex(fav=> fav.id === movie.id);
            if(index !== -1){
                state.favorites.splice(index,1);
            }else{
                state.favorites.push(movie);
            }
        }
    }
});

export const {toggleFavourite} = StarReducer.actions;
export default StarReducer.reducer;