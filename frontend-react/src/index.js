// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import {Provider} from "react-redux"
// import { store  , peristor} from './redux/store.js'
// import { PersistGate } from 'redux-persist/integration/react'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store = {store}>
//     <PersistGate loading = {null} persistor={peristor}>
//       <App />
//       </PersistGate>
//     </Provider>
   
//   </StrictMode>
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import { Provider } from "react-redux"
import { store, persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </StrictMode>
)
