import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../Features/ProfileSlice";
import filterReducer from "../Filters/storeF"
import cartReducer from "../../Pages/Cart/cartSlice"

export let store = configureStore({
  reducer: {
    profile: profileReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});
