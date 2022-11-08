export default function login_validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  //validation for password
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater then 8 and less than 20 character long';
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  return errors;
}

export function registerValidation(values) {
  const errors = {}

  //validation for username
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.includes('')) {
    errors.username = 'Invalid Username';
  }

  //validation for email
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  //validation for password

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater then 8 and less than 20 character long';
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.password)) {
    errors.password = 'Minimum eight and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
  } 

  //validation for confirm password
  if (!values.cpassword) {
    errors.cpassword = 'Required'
  } else if (values.cpassword !== values.password) {
    errors.cpassword = 'Password Not Match....!'
  } else if (values.cpassword.includes(' ')) {
    errors.cpassword = 'Invalid Comfirm Password'
  }

  return errors;
}