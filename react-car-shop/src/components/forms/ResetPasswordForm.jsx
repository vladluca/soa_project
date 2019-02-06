import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const ResetPasswordForm = props => {
  const { handleSubmit } = this.props;

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col sm={4}>
          <label htmlFor="new-password">
            <FormattedMessage id="label.newPassword" />
          </label>
        </Col>
        <Col sm={8}>
          <Field
            component="input"
            type="password"
            name="new-password"
            id="new-password"
          />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <label htmlFor="password">
            <FormattedMessage id="label.confirmPassword" />
          </label>
        </Col>
        <Col sm={8}>
          <Field
            component="input"
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
        </Col>
      </Row>
    </form>
  );
};

ResetPasswordForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default ResetPasswordForm;
