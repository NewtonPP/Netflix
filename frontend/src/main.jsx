import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from "../store.js"
import { AuthContextProvider } from '../Context/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContextProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </AuthContextProvider>
  </React.StrictMode>,
)
