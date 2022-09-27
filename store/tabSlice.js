import {createSlice} from '@reduxjs/toolkit'

const tabSlice = createSlice({
    name: 'tabActive',
    initialState: {
        tabActive: 0,
    },
    reducers: {
        changeTab(state,action){
            state.tabActive = action.payload
        }
    }
});

export const {changeTab} = tabSlice.actions;
export default tabSlice.reducer;