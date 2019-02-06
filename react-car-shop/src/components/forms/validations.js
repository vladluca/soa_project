import * as fieldValidation from '../../constants/fieldsValidation';
import * as moment from 'moment';

export const validateRegisterForm = (values, props) => {
  let errors = {};
  const validEmail = fieldValidation.validEmail;
  const validPassword = fieldValidation.validPassword;

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!validEmail.test(values.email)) {
    errors.email = "Enter a valid email";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (!validPassword.test(values.password)) {
    errors.password = "Password must contain at least one uppercase character, special character and digit";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (!validPassword.test(values.confirmPassword)) {
    errors.confirmPassword = "Confirm password must contain at least one uppercase character, special character and digit";
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Confirm password must match with password";
  }

  return errors;
};

export const validateLoginForm = (values, props) => {
  let errors = {};
  const validEmail = fieldValidation.validEmail;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!validEmail.test(values.email)) {
    errors.email = "Enter a valid email";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};

export const validationBookingForm = (values, props) => {
  let errors = {};
  const now = moment().startOf('day');
  const startDate = moment(values.startDate);
  const endDate = moment(values.endDate);

  if (!values.car) {
    errors.car = "Please select a car";
  }

  if (!values.startDate) {
    errors.startDate = "Start date is required";
  }

  if (!values.endDate) {
    errors.endDate = "End date is required";
  }

  if (startDate.diff(now, 'days') < 0) {
    errors.startDate = "Start date must not be in the past";
  }

  if (endDate.diff(startDate, 'days') <= 0) {
    errors.endDate = "End date must be greater than start date";
  }

  return errors;
};

export const validationAddCarForm = (values, props) => {
  let errors = {};

  if (!values.model) {
    errors.model = "Model is required";
  }

  if (!values.mark) {
    errors.mark = "Mark is required";
  }

  return errors;
};
