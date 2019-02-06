import React from 'react';
import { Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import * as fields from '../forms/fields';
import { validateRegisterForm } from '../forms/validations';

const RegisterForm = props => {
  const { handleSubmit } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className="form-horizontal"
    >
      <fieldset>
        <div className="form-group">
          <Col sm={4}>
            <label
              htmlFor="name"
              className="control-label"
            >
              <FormattedMessage id="label.name" />
            </label>
          </Col>
          <Col sm={8}>
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="form-control"
              component={fields.textField}
            />
          </Col>
        </div>
        <div className="form-group">
          <Col sm={4}>
            <label
              htmlFor="name"
              className="control-label"
            >
              <FormattedMessage id="label.email" />
            </label>
          </Col>
          <Col sm={8}>
            <Field
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control"
              component={fields.textField}
            />
          </Col>
        </div>
        <div className="form-group">
          <Col sm={4}>
            <label
              htmlFor="password"
              className="control-label"
            >
              <FormattedMessage id="label.password" />
            </label>
          </Col>
          <Col sm={8}>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder= "Password"
              className="form-control"
              component={fields.textField}
            />
          </Col>
        </div>
        <div className="form-group">
          <Col sm={4}>
            <label
              htmlFor="confirmPassword"
              className="control-label"
            >
              <FormattedMessage id="label.confirmPassword" />
            </label>
          </Col>
          <Col sm={8}>
            <Field
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder= "Confirm password"
              className="form-control"
              component={fields.textField}
            />
          </Col>
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
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'registerForm',
  validate: validateRegisterForm
})(RegisterForm);
