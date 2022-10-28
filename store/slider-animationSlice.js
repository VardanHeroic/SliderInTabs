import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const slider_animationSlice = createSlice({
    name:'slideClass',
    initialState: {
        slideClass: '',
        frontClass: '',
        endClass: '',
        factor: 1,
    },
    reducers: {
        setClass(state,action){
            state.slideClass = action.payload
        },
        setFrontClass(state,action){
            state.frontClass = action.payload
        },
        setEndClass(state,action){
            state.endClass = action.payload
        },
        setFactor(state,action){
            state.factor = action.payload
        }
    }
})

export const { setClass, setFrontClass,setEndClass,setFactor } = slider_animationSlice.actions;
export default slider_animationSlice.reducer