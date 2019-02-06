import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import BookingForm from '../components/forms/BookingForm.jsx';
import * as CarActions from '../actions/cars';
import * as BookingActions from '../actions/bookings';

class Booking extends Component {
  constructor() {
    super();

    this.handleBookingForm = this.handleBookingForm.bind(this);
  }

  componentDidMount() {
    const { bookingId } = this.props.match.params;

    this.props.getAllCars();
    bookingId && this.props.getBooking(bookingId);
  }

  componentWillUnmount() {
    this.props.removeCurrentBookingDetail();
  }

  handleBookingForm(data) {
    const { bookingId } = this.props.match.params;

    this.props.handleBookingActionsForm(bookingId, data).then(() => {
      this.props.history.push('/my-bookings');
    });
  }

  render() {
    const { currentBookingDetails } = this.props.bookings;
    const { bookingId } = this.props.match.params;

    return (
      <div className="container">
        <h1 className="text-center">
          <FormattedMessage id="booking.booking" />
        </h1>
        <BookingForm
          onSubmit={this.handleBookingForm}
          cars={this.props.cars.list}
          initialValues={bookingId ? currentBookingDetails : null}
          i18n={this.props.i18n}
        />
      </div>
    );
  }
}

Booking.propTypes = {
  getAllCars: PropTypes.func,
  createBooking: PropTypes.func,
  cars: PropTypes.object
};

const mapStateToProps = (store) => {
  return {...store};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...CarActions,
    ...BookingActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
