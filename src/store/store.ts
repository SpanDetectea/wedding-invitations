import { configureStore } from "@reduxjs/toolkit";
import mainPageReducer from "./mainPageReducer";


const store = configureStore({
    reducer: {
        main: mainPageReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;