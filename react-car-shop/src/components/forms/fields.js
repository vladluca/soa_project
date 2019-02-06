import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export const textField = ({ input, type, meta: { touched, error, warning }, ...props }) => (
  <div>
    <input
      {...input}
      type={type}
      {...props}
    />
    <span className="error">{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</span>
  </div>
);

export const selectField = ({ input, type, meta: { touched, error, warning }, ...props }) => (
  <div>
    <select
      {...input}
      type={type}
      {...props}
    />
    <span className="error">{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</span>
  </div>
);

export const datepickerField = ({ input, type, meta: { touched, error, warning }, ...props }) => (
  <div>
    <DatePicker
      className="form-control"
      value= {input.value ? moment(input.value).format('DD-MM-YYYY') : null}
      /*eslint-disable */
      onChange={ (data) => {
        input.onChange(moment(data).format('YYYY-MM-DD'));
      }}
      /*eslint-disable */
    />
    <span className="error">{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</span>
  </div>
);
