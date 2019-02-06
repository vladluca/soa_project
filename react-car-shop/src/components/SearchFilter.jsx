import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as BookingActions from '../actions/bookings';
import SearchFilterForm from '../components/forms/SearchFilterForm.jsx';

class SearchFilter extends Component {
  constructor() {
    super();

    this.handleFilterForm = this.handleFilterForm.bind(this);
    this.getAllBookingsCar = this.getAllBookingsCar.bind(this);
  }

  componentDidMount() {
    this.props.resetAllBookings();
  }

  getAllBookingsCar() {
    this.props.getAllBookingsCar();
  }

  handleFilterForm(data) {
    this.props.filterBookingsByDate(data, this.props.bookings.bookingsDetails);
  }

  render() {
    return (
      <SearchFilterForm
        onSubmit={this.handleFilterForm}
        i18n={this.props.i18n}
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {...store};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...BookingActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
