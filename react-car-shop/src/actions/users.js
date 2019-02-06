import { requestUserFormat } from '../utils/utils';

export function authUser(data) {
  return {
    type: 'user/AUTH_USER',
    payload: {
      request: {
        method: 'POST',
        url: '/users/authenticate',
        data: data
      },
      data,
      remember: data.remember
    }
  };
}

export function addUser(data) {
  return {
    type: 'user/ADD_USER',
    payload: {
      request: {
        method: 'POST',
        url: '/users',
        data: requestUserFormat(data)
      }
    }
  };
}

export function logoutUser() {
  return {
    type: 'user/LOGOUT'
  };
}

export function removeFormErrors() {
  return {
    type: 'user/REMOVE_FORM_ERRORS'
  };
}
