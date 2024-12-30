export const auth0ProviderConfig = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN as string,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID as string,
  authorizationParams: {
    redirect_uri: import.meta.env.VITE_REDIRECT_URI as string,
  },
};
