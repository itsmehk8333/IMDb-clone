import { combineReducers, createStore } from "redux";
import { SearchReducder } from "./SearchRedux/Reducer";
import { WishListReducer } from "./WishlistRedux/Reducer";

const RootReducer =combineReducers( {Inputreducer: SearchReducder, wishlistreducer : WishListReducer})
export const store = createStore(RootReducer)