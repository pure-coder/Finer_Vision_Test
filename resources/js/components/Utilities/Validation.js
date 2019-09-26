const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateFormInput(data) {
    let errors = {};

    // Check to see if value is not undefined as Validator functions only works on strings (otherwise throws error)

    if (isEmpty(data.firstName)) {
        errors.firstName = 'First Name is required';
    }

    if (isEmpty(data.lastName)) {
        errors.lastName = 'Last Name is required';
    }

    if (isEmpty(data.TelNumber)) {
        if(!Validator.isMobilePhone(data.TelNumber, 'en-GB')){
            errors.TelNumber = 'Mobile Number is required';
        }
    }

    if (!isEmpty(data.Email)){
        if (!Validator.isEmail(data.Email)) {
            errors.Email = 'A valid email is required';
        }
    }

    if (isEmpty(data.Gender)) {
        errors.Gender = 'Gender is required';
    }

    if (isEmpty(data.DoB)){
        if (!Validator.isISO8601(data.DoB.toString())) {
            errors.DoB = 'Must be a valid date, e.g dd/mm/yyyy';
        }
    }
    else {
        var sections = data.DoB.split("-");
        data.DoB = `${sections[2]}/${sections[1]}/${sections[0]}`;
    }

    return {
        errors,
        isValid: isEmpty(errors) // Check to see if errors is empty
    }
};
