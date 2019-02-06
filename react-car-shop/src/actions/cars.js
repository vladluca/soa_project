import { requestFormat } from '../utils/utils';

export function getAllCars() {
  return {
    type: 'car/GET_ALL_CARS',
    payload: {
      request: {
        url: '/cars'
      }
    }
  };
}

export function loadMoreCars() {
  return {
    type: 'car/LOAD_MORE_CARS'
  };
}

export function resetLoadMoreCars() {
  return {
    type: 'car/RESET_LOAD_MORE_CARS'
  };
}

export function getCar(id) {
  return {
    type: 'car/GET_CAR',
    payload: {
      request: {
        url: '/cars/' + id
      }
    }
  };
}

export function removeCarDetail() {
  return {
    type: 'car/REMOVE_CAR_DETAIL'
  };
}

export function addCar(data) {
  return {
    type: 'car/ADD_CAR',
    payload: {
      request: {
        method: 'POST',
        url: '/cars',
        data
      }
    }
  };
}

export function updateCar(id, data) {
  return {
    type: 'car/UPDATE_CAR',
    payload: {
      request: {
        method: 'PUT',
        url: '/cars/' + id,
        data: requestFormat(data)
      }
    }
  };
}

export function deleteCar(data) {
  return {
    type: 'car/DELETE_CAR',
    payload: {
      request: {
        method: 'DELETE',
        url: '/cars/' + data._id
      },
      data
    }
  };
}

export function getCarBookings(data) {
  return {
    type: 'car/GET_CARS_BOOKING',
    payload: {
      request: {
        url: '/car/bookings/' + data._id
      }
    }
  };
}

export function handleCarActionsForm(id, data) {
  return {
    type: id ? 'car/UPDATE_CAR' : 'car/ADD_CAR',
    payload: {
      request: {
        method: id ? 'PUT' : 'POST',
        url: id ? '/cars/' + data._id : '/cars',
        data: id ? requestFormat(data) : data
      }
    }
  };
}
