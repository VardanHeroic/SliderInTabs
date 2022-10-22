import {createSlice} from '@reduxjs/toolkit'

const sliderSlice = createSlice({
    name: 'slideActive',
    initialState: {
        prevActive: 0,
        sliderActive: 1,
        nextActive: 2,
    },

    reducers: {
        setValue(state,action){
            state.sliderActive =  state.sliderActive - Number(action.payload[0]) >= 0 ? state.sliderActive - Number(action.payload[0]) : action.payload[1]-1
            state.prevActive = state.sliderActive == 0 ? action.payload[1] - 1 : state.sliderActive - 1
            state.nextActive = state.sliderActive + 1 == action.payload[1] ? 0 : state.sliderActive + 1
        },

        setPrevValue(state,action){
            state.prevActive = Number(action.payload[0]) + 2
            state.prevActive = Number(action.payload[0]) == action.payload[1] -2 ? 0 : state.prevActive
        },

        setNextValue(state,action){
            state.nextActive = Number(action.payload[0]) != action.payload[1] ? Number(action.payload[0]) - 2 : 0
            state.nextActive = Number(action.payload[0])-1 <= 0 ? action.payload[1] - 1 : state.nextActive
        },

    }
})

export const { setValue,setPrevValue,setNextValue } = sliderSlice.actions;
export default sliderSlice.reducer