const defaultState = {
  email: '',
  telephone: ''
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "contact/GET_INFO_SUCCESS": {
      state = {...state, email: action.payload.data.email, telephone: action.payload.data.telephone};

      break;
    }

    default: {
      break;
    }
  }

  return state;
}
