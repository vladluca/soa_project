import { config } from '../constants/config';

const defaultState = {
  locale: config.defaultLanguage,
  message: null
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "i18n/SET_LANGUAGE": {
      state = {...state, locale: action.payload.locale, messages: action.payload.messages};

      break;
    }

    default: {
      break;
    }
  }

  return state;
}
