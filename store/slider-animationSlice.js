import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const slider_animationSlice = createSlice({
    name:'slideClass',
    initialState: {
        slideClass: '',
        frontClass: '',
        endClass: '',
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
        }
    }
})

export const { setClass, setFrontClass,setEndClass } = slider_animationSlice.actions;
export default slider_animationSlice.reducer