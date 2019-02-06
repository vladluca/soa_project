import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import cars from './cars';
import users from './users';
import popups from './popups';
import bookings from './bookings';
import contact from './contact';
import i18n from './i18n';

export default combineReducers({
  cars,
  users,
  popups,
  form,
  bookings,
  contact,
  i18n
});
