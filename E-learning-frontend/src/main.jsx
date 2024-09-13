import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Auth0Provider domain="dev-qbbjcdcz3vqlbjmj.us.auth0.com"
    clientId="PqSf2yMD1ivBhmaEplBaMjjjBXBbXC0d"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
     <BrowserRouter></BrowserRouter>
    <App />
    </Auth0Provider>
  </StrictMode>,
)
