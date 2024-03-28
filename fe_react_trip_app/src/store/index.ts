import { configureStore } from "@reduxjs/toolkit";
import tripsSlice from "./slices/tripsSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    trips: tripsSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
