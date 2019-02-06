import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import * as fields from '../forms/fields';

class SearchFilterForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit}
        className="form-horizontal"
      >
        <fieldset>
          <div className="field-wrapper">
            <div className="form-group">
              <Col sm={2}>
                <label
                  htmlFor="startDate"
                  className="control-label"
                >
                  <FormattedMessage id="label.startDate" />
                </label>
              </Col>
              <Col sm={3}>
                  <Field
                    component={fields.datepickerField}
                    name="startDate"
                    id="startDate"
                    placeholder="Start date"
                  />
              </Col>
              <Col sm={2}>
                <label
                  htmlFor="endDate"
                  className="control-label"
                >
                  <FormattedMessage id="label.endDate" />
                </label>
              </Col>
              <Col sm={3}>
                  <Field
                    component={fields.datepickerField}
                    name="endDate"
                    id="endDate"
                    placeholder="End date"
                  />
              </Col>
              <Col sm={2}>
                <button
                  type="submit"
                  className="btn btn-default"
                >
                  <FormattedMessage id="label.search" />
                </button>
              </Col>
          </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

SearchFilterForm.propTypes = {
  handleSubmit: PropTypes.func
};

// Decorate the form component
export default reduxForm({
  form: 'searchFilterForm'
})(SearchFilterForm);
