const Validator = require('validator');
const isEmpty = require('is-empty');

module.export = function validateReg(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.confirmpass = !isEmpty(data.confirmpass) ? data.confirmpass : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name is required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is incorrect';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Passowrd is required';
  }
  if (Validator.isEmpty(data.confirmpass)) {
    errors.confirmpass = 'Confirm password';
  }
  if (!Validator.isLength(data.password, {min: 6, max: 10})) {
    errors.password = 'Password must be at least 6 characters';
  }
  if (!Validator.equals(data.password, data.confirmpass)) {
    errors.confirmpass = 'Passwords need to match';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
