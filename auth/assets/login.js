import { createAuth0Client } from '@auth0/auth0-spa-js';

let auth0Client = null;
const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async () => {
    const response = await fetchAuthConfig();
    const config = await response.json();
  
    auth0Client = await auth0.createAuth0Client({
      domain: config.domain,
      clientId: config.clientId
    });
  };

window.onload = async () => {
    await configureClient();
  }