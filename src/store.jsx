import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducers/reducer";

const store = configureStore({ reducer });

export default store;
