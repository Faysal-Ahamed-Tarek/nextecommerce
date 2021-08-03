import { combineReducers } from "redux";
import {ShopProduct_reducer,ProductView_reducer } from "./shopreducer/shopreducer";

const RootReducer = combineReducers({
    Shop_Product:ShopProduct_reducer,
    ProductView:ProductView_reducer
})
export default RootReducer;