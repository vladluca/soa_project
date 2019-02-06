import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

const userIsAuthenticated = connectedRouterRedirect({
  // The url to redirect user to if they fail
  redirectPath: '/register',
  // Determine if the user is authenticated or not
  authenticatedSelector: state => !!state.users.userData,
  // A nice display name for this check
  wrapperDisplayName: 'UserIsAuthenticated'
});

export default userIsAuthenticated;
