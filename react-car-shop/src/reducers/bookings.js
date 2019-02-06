import { bookingDetailsFormat } from '../utils/utils';

const defaultState = {
  list: [],
  bookingsDetails: [],
  currentBookingDetails: []
};

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    case 'booking/GET_ALL_BOOKINGS_SUCCESS': {
      state = { ...state, list: action.payload.data};

      break;
    }

    case 'booking/RESET_ALL_BOOKINGS': {
      state = { ...state, bookingsDetails: []};

      break;
    }

    case 'booking/GET_CARS_BOOKING_SUCCESS': {
      const data = state.bookingsDetails.concat(bookingDetailsFormat(action.payload.data, action.meta.previousAction.payload.booking));

      state = { ...state, bookingsDetails: data};

      break;
    }

    case 'booking/GET_BOOKING_SUCCESS': {
      state = { ...state, currentBookingDetails: action.payload.data};
      break;
    }

    case 'booking/REMOVE_CURRENT_BOOKING_DETAIL': {
      state = { ...state, currentBookingDetails: []};

      break;
    }

    case 'booking/FILTER_BOOKINGS_BY_DATE': {
      state = { ...state, bookingsDetails: action.payload.data};

      break;
    }

    default: {
      break;
    }
  }

  return state;
}
