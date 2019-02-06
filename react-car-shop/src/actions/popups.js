export function setLoginPopupVisibility(visibility) {
  return {
    type: 'popups/SET_LOGIN_VISIBILITY',
    payload: visibility
  };
}

export function setResetPasswordPopupVisibility(visibility) {
  return {
    type: 'popups/SET_RESET_PASSWORD_VISIBILITY',
    payload: visibility
  };
}

export function setMessagePopupVisibility(visibility) {
  return {
    type: 'popups/SET_MESSAGE_POPUP_VISIBILITY',
    payload: visibility
  };
}

export function setCarBookingsPopupVisibility(visibility) {
  return {
    type: 'popups/SET_CAR_BOOKINGS_POPUP_VISIBILITY',
    payload: visibility
  };
}
