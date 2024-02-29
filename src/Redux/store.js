import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import registerRedux from "./registerRedux";
import cartRedux from "./cartRedux";

export default configureStore({
  reducer: {
    user: userReducer,
    register: registerRedux,
    cart: cartRedux,
  },
});
