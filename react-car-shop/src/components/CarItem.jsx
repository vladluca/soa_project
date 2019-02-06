import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import * as CarActions from '../actions/cars';
import * as BookingActions from '../actions/bookings';
import CarImg from '../assets/images/car.jpg';

class CarItem extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteCar = this.handleDeleteCar.bind(this);
    this.handleCarBookings = this.handleCarBookings.bind(this);
  }

  handleDeleteCar(data) {
    this.props.deleteCar(data).then(() => {
      this.props.getAllCars();
    });
  }

  handleCarBookings(data) {
    this.props.getCarBookings(data).then(() => {
      for (let item of this.props.cars.carBookings) {
        this.props.getCarsBookings(item);
      }
    });
  }

  render() {
    const { item } = this.props;

    return (
      <Col sm={4}>
        <div className="panel panel-success">
          <div className="item">
            <div className="content">
              <div className="item-actions">
                <div className="item-actions">
                  <Button
                    className="action-btn"
                    onClick={_.partial(this.handleCarBookings, item)}
                  >
                    <i
                      className="fa fa-list"
                      aria-hidden="true"
                    />
                  </Button>
                  <Link
                    className="action-btn"
                    to={`/car/${item._id}`}
                  >
                    <i
                      className="fa fa-pencil-square-o"
                      aria-hidden="true"
                    />
                  </Link>
                  <Button
                    className="action-btn"
                    onClick={_.partial(this.handleDeleteCar, item)}
                  >
                    <i
                      className="fa fa-trash"
                      aria-hidden="true"
                    />
                  </Button>
                </div>
              </div>
              <div className="item-img">
                <img
                  src={CarImg}
                  alt="car"
                />
              </div>
            </div>
          </div>
          <div className="panel-heading">
            <div className="panel-title">
              <div className="item-content">
                <div className="model">{item.mark}</div>
                <div className="type">{item.model}</div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

CarItem.propTypes = {
  deleteCar: PropTypes.func,
  getAllCars: PropTypes.func,
  item: PropTypes.object
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

export default connect(mapStateToProps, mapDispatchToProps)(CarItem);
