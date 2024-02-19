import { configureStore } from '@reduxjs/toolkit'
import tripsSlice from './slices/tripsSlice'

const store = configureStore({
    reducer: {
        trips: tripsSlice.reducer,
    }
})

export default store;