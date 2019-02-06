import { requestBookingFormat, requestFormat, filterByDate } from '../utils/utils';

export function getAllBookings() {
  return {
    type: 'booking/GET_ALL_BOOKINGS',
    payload: {
      request: {
        url: '/bookings'
      }
    }
  };
}

export function resetAllBookings() {
  return {
    type: 'booking/RESET_ALL_BOOKINGS'
  };
}

export function getAllBookingsCar() {
  return (dispatch, getState) => {
    dispatch(getAllBookings()).then(() => {
      for (let item of getState().bookings.list) {
        dispatch(getCarsBookings(item));
      }
    });
  };
}

export function getCarsBookings(data) {
  return {
    type: 'booking/GET_CARS_BOOKING',
    payload: {
      request: {
        url: '/cars/' + data.car
      },
      booking: data
    }
  };
}

export function addBooking(data) {
  return {
    type: 'booking/ADD_BOOKING',
    payload: {
      request: {
        method: 'POST',
        url: '/bookings',
        data: requestBookingFormat(data)
      }
    }
  };
}

export function deleteBooking(id) {
  return {
    type: 'booking/DELETE_BOOKING',
    payload: {
      request: {
        method: 'DELETE',
        url: '/bookings/' + id
      }
    }
  };
}

export function getBooking(id) {
  return {
    type: 'booking/GET_BOOKING',
    payload: {
      request: {
        url: '/bookings/' + id
      }
    }
  };
}

export function updateBooking(id, data) {
  return {
    type: 'booking/UPDATE_BOOKING',
    payload: {
      request: {
        method: 'PUT',
        url: '/bookings/' + id,
        data: requestFormat(data)
      }
    }
  };
}

export function removeCurrentBookingDetail() {
  return {
    type: 'booking/REMOVE_CURRENT_BOOKING_DETAIL'
  };
}

export function filterBookingsByDate(data, list) {
  return {
    type: 'booking/FILTER_BOOKINGS_BY_DATE',
    payload: {
      data: filterByDate(data, {...list})
    }
  };
}

export function handleBookingActionsForm(id, data) {
  return {
    type: 'booking/HANDLE_BOOKING_ACTIONS_FORM',
    payload: {
      request: {
        method: id ? 'PUT' : 'POST',
        url: id ? '/bookings/' + id : '/bookings',
        data: id ? requestFormat(data) : requestBookingFormat(data)
      }
    }
  };
}
