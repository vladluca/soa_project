const defaultState = {
  isLoginPopupVisible: false,
  isResetPasswordPopupVisible: false,
  isMessagePopupVisible: false,
  isCarBookingsPopupVisible: false,
  message: ""
};

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    case 'popups/SET_LOGIN_VISIBILITY': {
      state = { ...state, isLoginPopupVisible: action.payload };

      break;
    }

    case 'popups/SET_RESET_PASSWORD_VISIBILITY': {
      state = { ...state, isResetPasswordPopupVisible: action.payload };

      break;
    }

    case 'popups/SET_MESSAGE_POPUP_VISIBILITY': {
      state = { ...state, isMessagePopupVisible: action.payload };

      break;
    }

    case 'popups/SET_CAR_BOOKINGS_POPUP_VISIBILITY': {
      state = { ...state, isCarBookingsPopupVisible: action.payload };

      break;
    }

    case 'car/ADD_CAR_SUCCESS': {
      const message = "Car " + action.payload.data.mark + " " + action.payload.data.model + " added successfully";
      state = { ...state, message, isMessagePopupVisible: true };

      break;
    }

    case 'car/ADD_CAR_FAIL': {
      const message = "Add failed";
      state = { ...state, message, isMessagePopupVisible: true };

      break;
    }

    case 'car/UPDATE_CAR_SUCCESS': {
      const message = "Car " + action.payload.data.mark + " " + action.payload.data.model + " updated successfully";
      state = { ...state, message, isMessagePopupVisible: true };

      break;
    }

    case 'car/UPDATE_CAR_FAIL': {
      const message = "Update failed";
      state = { ...state, message, isMessagePopupVisible: true };

      break;
    }

    case 'car/DELETE_CAR_SUCCESS': {
      const message = "Car " + action.meta.previousAction.payload.data.mark + " " +
        action.meta.previousAction.payload.data.model + " deleted successfully";
      state = { ...state, message, isMessagePopupVisible: true };

      break;
    }

    case 'car/DELETE_CAR_FAIL': {
      const message = "Delete failed";
      state = { ...state, message, isMessagePopupVisible: true };

      break;
    }

    case 'car/GET_CARS_BOOKING_SUCCESS': {
      state = { ...state, isCarBookingsPopupVisible: true };

      break;
    }

    case 'car/GET_CARS_BOOKING_FAIL': {
      state = { ...state, isCarBookingsPopupVisible: false };

      break;
    }

    default: {
      break;
    }
  }

  return state;
}
