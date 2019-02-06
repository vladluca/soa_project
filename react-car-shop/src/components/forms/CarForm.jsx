import React from 'react';
import { Col } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import * as fields from './fields';
import { validationAddCarForm } from './validations';

const CarForm = props => {
  const { handleSubmit, buttonStatus } = props;

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
                htmlFor="mark"
                className="control-label"
              ><FormattedMessage id="car.mark" /></label>
            </Col>
            <Col sm={8}>
              <Field
                component={fields.textField}
                type="text"
                name="mark"
                id="mark"
                className="form-control"
              />
            </Col>
          </div>
        </div>
        <div className="field-wrapper">
          <div className="form-group">
            <Col sm={4}>
              <label
                htmlFor="model"
                className="control-label"
              ><FormattedMessage id="car.model" /></label>
            </Col>
            <Col sm={8}>
              <Field
                component={fields.textField}
                type="text"
                name="model"
                id="model"
                className="form-control"
              />
            </Col>
          </div>
        </div>
        <div className="actions-wrapper">
          <button
            type="submit"
            disabled={buttonStatus}
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
};

CarForm.propTypes = {
  handleSubmit: PropTypes.func,
  buttonStatus: PropTypes.bool
};

// Decorate the form component
export default reduxForm({
  form: 'carForm',
  validate: validationAddCarForm
})(CarForm);
