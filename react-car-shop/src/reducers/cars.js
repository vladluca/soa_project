import { config } from '../constants/config';

const defaultState = {
  list: [],
  addButtonStatus: false,
  deleteButtonStatus: false,
  currentCarDetails: null,
  carsToBeListed: config.carsToBeListed,
  carsPerPage: config.carsPerPage,
  carBookings: []
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'car/GET_ALL_CARS_SUCCESS': {
      state = { ...state, list: action.payload.data, carsToBeListed: state.carsToBeListed };

      break;
    }

    case 'car/LOAD_MORE_CARS': {
      state = { ...state, carsToBeListed: state.carsToBeListed + state.carsPerPage };

      break;
    }

    case 'car/RESET_LOAD_MORE_CARS': {
      state = { ...state, carsToBeListed: state.carsPerPage };

      break;
    }

    case 'car/GET_CAR_SUCCESS': {
      state = { ...state, currentCarDetails: action.payload.data };

      break;
    }

    case 'car/GET_CARS_BOOKING_SUCCESS': {
      state = { ...state, carBookings: action.payload.data };

      break;
    }

    case 'car/REMOVE_CAR_DETAIL': {
      state = { ...state, currentCarDetails: null };

      break;
    }

    case 'car/ADD_CAR':
    case 'car/UPDATE_CAR': {
      state = { ...state, addButtonStatus: true };

      break;
    }

    case 'car/ADD_CAR_SUCCESS':
    case 'car/UPDATE_CAR_SUCCESS': {
      state = { ...state, addButtonStatus: false };

      break;
    }

    case 'car/ADD_CAR_FAIL':
    case 'car/UPDATE_CAR_FAIL': {
      state = { ...state, addButtonStatus: false };

      break;
    }

    case 'car/DELETE_CAR': {
      state = { ...state, deleteButtonStatus: true };

      break;
    }

    case 'car/DELETE_CAR_SUCCESS': {
      state = { ...state, deleteButtonStatus: false };

      break;
    }

    case 'car/DELETE_CAR_FAIL': {
      state = { ...state, deleteButtonStatus: false };

      break;
    }

    default: {
      break;
    }
  }

  return state;
}
