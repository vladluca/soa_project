import { config } from '../constants/config';

const defaultState = {
  errorRegisterStatus: false,
  errorLoginStatus: false,
  userData: JSON.parse(localStorage.getItem(config.storageKeys.user))
  || JSON.parse(sessionStorage.getItem(config.storageKeys.user))
  || null,
  user: null
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'user/AUTH_USER': {
      state = {...state, errorLoginStatus: false};

      break;
    }

    case 'user/AUTH_USER_SUCCESS': {
      const user = {
        email: action.meta.previousAction.payload.request.data.email,
        token: action.payload.data.token
      };

      if (action.meta.previousAction.payload.remember) {
        localStorage.setItem(config.storageKeys.user, JSON.stringify(user));
      } else {
        sessionStorage.setItem(config.storageKeys.user, JSON.stringify(user));
      }
      state = {...state, errorLoginStatus: false, userData: user};

      break;
    }

    case 'user/AUTH_USER_FAIL': {
      state = {...state, errorLoginStatus: true};

      break;
    }

    case 'user/ADD_USER_FAIL': {
      state = {...state, errorRegisterStatus: true};

      break;
    }

    case 'user/LOGOUT': {
      localStorage.removeItem(config.storageKeys.user);
      sessionStorage.removeItem(config.storageKeys.user);
      state = {...state, userData: null};

      break;
    }

    case 'user/REMOVE_FORM_ERRORS':
    case 'user/ADD_USER':
    case 'user/ADD_USER_SUCCESS': {
      state = {...state, errorRegisterStatus: false, errorLoginStatus: false};

      break;
    }

    default: {
      break;
    }
  }

  return state;
}
