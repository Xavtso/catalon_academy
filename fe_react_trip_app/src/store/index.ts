import { configureStore } from '@reduxjs/toolkit'
import tripsSlice from './slices/tripsSlice'
import viewSlice from './slices/viewSlice';

const store = configureStore({
    reducer: {
        trips: tripsSlice.reducer,
        view: viewSlice.reducer,
    }
})

export default store;