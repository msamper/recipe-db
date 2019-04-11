import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, { Component, Children } from 'react';
import { withRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import { registerUser } from './modules/App/actions/authActions';

class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: '',
    bmi: '',
    dietTypes: '',
    dietPreferences: [],
    errors: {},
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = () => {
    const user = {
      name: `${this.state.firstName} ${this.state.lastName}`,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password,
      age: this.state.age,
      bmi: this.state.bmi,
      diet_type: this.state.dietTypes,
      diet_preferences: this.state.dietPreferences,
    };
    console.log(user);
    this.props.registerUser(user, browserHistory);
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, password, age, bmi, dietTypes, dietPreferences } = this.state;
    const values = { firstName, lastName, email, password, age, bmi, dietTypes, dietPreferences };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleSubmit={this.handleSubmit}
            values={values}
          />
        );
      case 4:
        return (
          <Success />
        );
        // browserHistory.push('/sign-in');
    }
  }
}

UserForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.error,
});

export default connect(
  mapStateToProps,
  { registerUser }
)(UserForm);

