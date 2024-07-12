import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM rendering react components 
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { MantineProvider } from '@mantine/core'; // Mantine's provider component for styling and theming.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-m6ly0coiftes71c7.us.auth0.com"
      clientId="2t4J2DZvCNvuEGflm27MPzOPmuckgU5Q"
      authorizationParams={{ redirect_uri: window.location.origin }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <MantineProvider>
        <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
);
