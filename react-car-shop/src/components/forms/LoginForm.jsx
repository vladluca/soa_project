import React from 'react';
import { Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import * as fields from '../forms/fields';
import { validateLoginForm } from '../forms/validations';

const LoginForm = props => {
  const { handleSubmit } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className="form-horizontal"
    >
      <fieldset>
        <div className="form-group">
          <Col sm={2}>
            <label
              htmlFor="email"
              className="control-label"
            >
              <FormattedMessage id="label.email" />
            </label>
          </Col>
          <Col sm={10}>
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
          <Col sm={2}>
            <label
              htmlFor="password"
              className="control-label"
            >
              <FormattedMessage id="label.password" />
            </label>
          </Col>
          <Col sm={10}>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form-control"
              component={fields.textField}
            />
          </Col>
        </div>
        <div className="form-group">
          <Col sm={2} />
          <Col
            sm={1}
            xs={2}
          >
            <Field
              component="input"
              type="checkbox"
              name="remember"
              id="remember"
            />
          </Col>
          <Col
            sm={9}
            xs={8}
          >
            <label
              htmlFor="remember"
            >
              <FormattedMessage id="label.rememberMe" />
            </label>
          </Col>
        </div>
        <div className="actions-wrapper">
          <button
            type="submit"
            className="btn btn-default"
          >
            <FormattedMessage id="label.ok" />
          </button>
        </div>
      </fieldset>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func
};

// Decorate the form component
export default reduxForm({
  form: 'loginForm',
  validate: validateLoginForm
})(LoginForm);
