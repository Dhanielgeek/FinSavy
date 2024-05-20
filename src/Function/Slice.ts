import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    userdata : {},
    Token : '',
    MenuBar : false,
}


const GlobalState = createSlice({
    name : 'first',
    initialState : initalState,
    reducers : {
        ChangeBar : (state) => {
            state.MenuBar = !state.MenuBar
        },
        UserData : (state)=>{
            state.userdata 
        },
        Token : (state)=>{
            state.Token
        }

    }
})

export const {ChangeBar, UserData,Token} = GlobalState.actions
export default GlobalState.reducer