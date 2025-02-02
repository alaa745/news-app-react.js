import { legacy_createStore as createStore } from "redux";
import reducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore(reducer);

export default store;