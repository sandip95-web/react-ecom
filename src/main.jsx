import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './components/context'
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Auth0Provider
    domain="dev-i2hu0im5ur6srxef.us.auth0.com"
    clientId="hfEqRPxUYRSUqLi4SGLP9C08dj1tlqBc"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
     <App />
    </AppProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
