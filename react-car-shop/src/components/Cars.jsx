import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FormattedMessage } from 'react-intl';

import Car from './CarItem.jsx';
import * as CarActions from '../actions/cars';
import * as PopupActions from '../actions/popups';
import * as BookingActions from '../actions/bookings';
import TableView from '../components/TableView';

class Cars extends Component {
  constructor() {
    super();

    this.loadMore = this.loadMore.bind(this);
    this.handleCarBookingsPopupVisibility = this.handleCarBookingsPopupVisibility.bind(this);
  }

  componentWillMount() {
    this.props.resetLoadMoreCars();
  }

  componentDidMount() {
    this.props.getAllCars();
  }

  loadMore() {
    this.props.loadMoreCars();
  }

  handleCarBookingsPopupVisibility() {
    this.props.setCarBookingsPopupVisibility(false);
    this.props.resetAllBookings();
  }

  render() {
    const { cars } = this.props;
    const list = cars.list.slice(0, this.props.cars.carsToBeListed);

    return (
      <main>
        <div className="container">
          <Modal
            show={this.props.popups.isCarBookingsPopupVisible}
            onHide={this.handleCarBookingsPopupVisibility}
            className="modal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="modal-title">
                <FormattedMessage id="booking.bookings" />
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <TableView
                itemsList={this.props.bookings.bookingsDetails}
              />
            </Modal.Body>
          </Modal>
          <Row>
            {cars.list &&
              <div className="cars-list">
                {list.map((item, index) => {
                  return (
                    <Car
                      item={item}
                      key={index}
                    />
                  );
                })
                }
              </div>
            }
          </Row>
          {cars.carsToBeListed < cars.list.length &&
            <Button
              onClick={_.add(this.loadMore)}
              className="btn btn-default"
            >
              <FormattedMessage id="label.loadMore" />
            </Button>
          }
          <div className="text-center">
            <Link
              to="/car"
              className="btn btn-default"
            >
              <FormattedMessage id="button.addNewCar" />
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

Cars.propTypes = {
  getAllCars: PropTypes.func,
  loadMoreCars: PropTypes.func,
  cars: PropTypes.object
};

const mapStateProps = (store) => {
  return { ...store };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...CarActions,
    ...PopupActions,
    ...BookingActions
  }, dispatch);
};

export default connect(mapStateProps, mapDispatchToProps)(Cars);
