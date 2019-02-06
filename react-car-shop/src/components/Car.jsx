import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CarForm from '../components/forms/CarForm.jsx';
import * as CarActions from '../actions/cars';

class Car extends Component {
  constructor() {
    super();

    this.handleCarForm = this.handleCarForm.bind(this);
  }

  componentDidMount() {
    const { carId } = this.props.match.params;
    carId && this.props.getCar(carId);
  }

  componentWillUnmount() {
    this.props.removeCarDetail();
  }

  handleCarForm(data) {
    const { carId } = this.props.match.params;

    this.props.handleCarActionsForm(carId, data).then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    const { addButtonStatus, currentCarDetails } = this.props.cars;

    return (
      <div className="container">
        <CarForm
          onSubmit={this.handleCarForm}
          buttonStatus={addButtonStatus}
          initialValues={currentCarDetails}
          i18n={this.props.i18n}
        />
      </div>
    );
  }
}

Car.propTypes = {
  getCar: PropTypes.func,
  removeCarDetail: PropTypes.func,
  addCar: PropTypes.func,
  updateCar: PropTypes.func,
  cars: PropTypes.object
};

const mapStateToProps = (store) => {
  return {...store};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...CarActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Car);
