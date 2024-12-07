// import {configureStore} from '@reduxjs/toolkit'
// import authReducer from './AuthSlice'
// import storage from 'redux-persist/lib/storage';
// import {persistReducer , persistStore} from 'redux-persist'
// // impoasrt { getDefaultMiddleware } from '@reduxjs/toolkit';

// const persistConfq = {
//     key:'root',
//     storage
// }


// const persistedReducer = persistReducer(persistConfq , authReducer)
// export const store = configureStore({
//     reducer:{
//         auth:persistedReducer
//     },
//     // getDefaultMiddleware({
//     //     serializableCheck: {
//     //       // Ignore actions from redux-persist
//     //       ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
//     //       // Optionally ignore specific paths in state if needed
//     //     //   ignoredPaths: ['register'], // Add paths if necessary
//     //     },
//     //   }),
// }) 


// export const peristor = persistStore(store)


import { configureStore } from '@reduxjs/toolkit'
import authReducer from './AuthSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'] // Only persist auth reducer
}

const rootReducer = combineReducers({
    auth: authReducer,
    // Add other reducers here if needed
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                ignoredPaths: ['register']
            },
        })
});

export const persistor = persistStore(store);
