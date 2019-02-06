import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { validationBookingForm } from './validations';
import * as fields from '../forms/fields';

class BookingForm extends Component {
  render() {
    const { handleSubmit, cars } = this.props;

    return (
      <form
        onSubmit={handleSubmit}
        className="form-horizontal"
      >
        <fieldset>
          <div className="field-wrapper">
            <div className="form-group">
              <Col sm={4}>
                <label
                  htmlFor="car"
                  className="control-label"
                >
                  <FormattedMessage id="booking.selectCar" />
                </label>
              </Col>
              <Col sm={8}>
                <Field
                  component={fields.selectField}
                  type="select"
                  name="car"
                  id="car"
                  className="form-control"
                >
                  <option
                    disabled
                    value=""
                  >---</option>
                  {cars.map((car, index) => {
                    return (
                      <option
                        key={index}
                        value={car._id}
                      >{car.mark + " " + car.model}</option>
                    );
                  })
                  }
                </Field>
              </Col>
            </div>
          </div>

          <div className="field-wrapper">
            <div className="form-group">
              <Col sm={4}>
                <label
                  htmlFor="startDate"
                  className="control-label"
                >
                  <FormattedMessage id="label.startDate" />
                </label>
              </Col>
              <Col sm={8}>
                  <Field
                    component={fields.datepickerField}
                    name="startDate"
                    id="startDate"
                  />
              </Col>
            </div>
          </div>
          <div className="field-wrapper">
            <div className="form-group">
              <Col sm={4}>
                <label
                  htmlFor="endDate"
                  className="control-label"
                >
                  <FormattedMessage id="label.endDate" />
                </label>
              </Col>
              <Col sm={8}>
                  <Field
                    component={fields.datepickerField}
                    name="endDate"
                    id="endDate"
                  />
              </Col>
            </div>
          </div>
          <div className="actions-wrapper">
            <button
              type="submit"
              className="btn btn-default"
            >
              <FormattedMessage id="label.ok" />
            </button>
            <Link
              to={`/`}
              className="btn btn-default"
            >
              <FormattedMessage id="label.back" />
            </Link>
          </div>
        </fieldset>
      </form>
    );
  }
};

BookingForm.propTypes = {
  handleSubmit: PropTypes.func,
  cars: PropTypes.array
};

// Decorate the form component
export default reduxForm({
  form: 'bookingForm',
  enableReinitialize: true,
  validate: validationBookingForm
})(BookingForm);
