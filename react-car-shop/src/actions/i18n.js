import { config } from '../constants/config';
import { addLocaleData } from 'react-intl';

export function setLanguage(locale) {
  if (!locale) {
    locale = config.defaultLanguage;
  }

  addLocaleData(require('../../node_modules/react-intl/locale-data/' + locale));
  return {
    type: 'i18n/SET_LANGUAGE',
    payload: {
      locale: locale,
      messages: require('../i18n/' + locale)
    }
  };
};
