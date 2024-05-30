import {createSlice} from '@reduxjs/toolkit';

const initaialState = {
    status : false,
    userData: null
} 

const authSlice = createSlice({
    name: "auth", 
    initaialState,
    reducers: {

        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData 
        },

        logout: (state) => {
            state.status = false;
            state.userData = null; 
        }
    }
})

export const {login, logout} = authSlice.actions; 

export default authSlice.reducers;