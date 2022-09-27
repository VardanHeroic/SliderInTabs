import { configureStore } from '@reduxjs/toolkit'
import tabReducer from './tabSlice.js'
import sliderReducer from './sliderSlice.js'
import sliderClassReducer from './slider-animationSlice.js'

const store = configureStore({
    reducer: {
        tabActive: tabReducer,
        sliderActive: sliderReducer,
        prevActive: sliderReducer,
        nextActive: sliderReducer,
        slideClass: sliderClassReducer,
        frontClass: sliderClassReducer,
        endClass: sliderClassReducer,
    },
})

export {store}