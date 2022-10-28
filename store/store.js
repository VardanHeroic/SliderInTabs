import { configureStore } from '@reduxjs/toolkit'
import tabReducer from './tabSlice.js'
import sliderReducer from './sliderSlice.js'
import sliderClassReducer from './slider-animationSlice.js'

const store = configureStore({
    reducer: {
        tabReducer: tabReducer,
        sliderReduce: sliderReducer,
        sliderAnimation: sliderClassReducer,
    },
})

export {store}