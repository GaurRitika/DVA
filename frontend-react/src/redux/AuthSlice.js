// import {createSlice} from '@reduxjs/toolkit'


// const initialState =  {
//     user:null,
// };


// const AuthSlice = createSlice({
//     name:"auth",
//     initialState,
//     reducers:{
//         SetUser(state,action){
//             state.user = action.payload
//         },
//         RemoveUser(state){
//             state.user = null
//         }
//     }
// })

// export const {SetUser , RemoveUser} = AuthSlice.actions

// export default AuthSlice.reducer


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SetUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        SetToken: (state, action) => {
            state.token = action.payload;
        },
        RemoveUser: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        }
    }
})

export const { SetUser, SetToken, RemoveUser } = AuthSlice.actions;
export default AuthSlice.reducer;
