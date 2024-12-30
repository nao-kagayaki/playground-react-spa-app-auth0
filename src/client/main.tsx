import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { auth0ProviderConfig } from './config/auth0Config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      {...auth0ProviderConfig}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
