import { applyMiddleware, createStore } from 'redux' ;
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';

import { config as defaultConfig } from '../src/constants/config';
import reducers from './reducers';

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL: defaultConfig.baseURL,
  responseType: 'json'
});

// Add a request interceptor
client.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem(defaultConfig.storageKeys.user))
    || JSON.parse(sessionStorage.getItem(defaultConfig.storageKeys.user))
    || null;

  if (user) {
    config.headers['x-auth-token'] = user.token;
  }

  return config;
});

const middleware = applyMiddleware(
  axiosMiddleware(client),
  thunk
);

export default createStore(reducers, middleware);
