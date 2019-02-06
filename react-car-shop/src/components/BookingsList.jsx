import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import * as CarActions from '../actions/cars';
import * as BookingActions from '../actions/bookings';
import SearchFilter from '../components/SearchFilter';
import TableView from '../components/TableView';
import { routes } from '../utils/routes';

class MyBookings extends Component {
  constructor() {
    super();

    this.onHandleDeleteBooking = this.onHandleDeleteBooking.bind(this);
  }

  componentDidMount() {
    this.props.getAllBookingsCar();
  }

  componentWillUnmount() {
    this.props.resetAllBookings();
  }

  onHandleDeleteBooking(data) {
    this.props.deleteBooking(data).then(() => {
      this.props.resetAllBookings();
      this.props.getAllBookingsCar();
    });
  }

  render() {
    const { bookingsDetails, list } = this.props.bookings;
    const redirectPath = routes.booking;

    return (
      <div className="container">
        <div className="text-right">
          <Link
            to={redirectPath}
            className="btn btn-default"
          >
            <FormattedMessage id="booking.createBooking" />
          </Link>
        </div>
        <h1 className="text-center">
          <FormattedMessage id="booking.myBookings" />
        </h1>
        <SearchFilter />
        <div className="my-bookings-wrapper">
          {list &&
            <TableView
              itemsList={bookingsDetails}
              handleAction={this.onHandleDeleteBooking}
              redirect={redirectPath}
            />
          }
        </div>
      </div>
    );
  }
}

MyBookings.propTypes = {
  getAllBookings: PropTypes.func,
  getCarsBookings: PropTypes.func,
  bookings: PropTypes.object
};

const mapStateToProps = (store) => {
  return {...store};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...BookingActions,
    ...CarActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBookings);
