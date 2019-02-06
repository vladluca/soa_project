import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './components/App';
import Register from './components/Register.jsx';
import Cars from './components/Cars.jsx';
import Car from './components/Car.jsx';
import BookingsList from './components/BookingsList.jsx';
import Booking from './components/Booking.jsx';
import store from './store';
import './assets/styles/main.scss';
import userIsAuthenticated from './utils/userIsAuthenticated';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route
            exact
            path="/"
            component={userIsAuthenticated(Cars)}
          />
          <Route
            exact
            path="/register"
            component={Register}
          />
          <Route
            exact
            path="/my-bookings"
            component={userIsAuthenticated(BookingsList)}
          />
          <Route
            exact
            path="/booking"
            component={userIsAuthenticated(Booking)}
          />
          <Route
            exact
            path="/car"
            component={userIsAuthenticated(Car)}
          />
          <Route
            exact
            path="/car/:carId"
            component={userIsAuthenticated(Car)}
          />
          <Route
            exact
            path="/booking/:bookingId"
            component={userIsAuthenticated(Booking)}
          />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
