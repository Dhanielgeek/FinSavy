import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    userdata : {},
    MenuBar : false,
}


const GlobalState = createSlice({
    name : 'first',
    initialState : initalState,
    reducers : {
        ChangeBar : (state) => {
            state.MenuBar = !state.MenuBar
        }
    }
})

export const {ChangeBar} = GlobalState.actions
export default GlobalState.reducer