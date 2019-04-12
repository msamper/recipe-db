import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Home from './Home';
import Success from './Success';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';

export class ProfileUserForm extends Component {
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
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  // handleChangeMultiple = event => {
  //   const { options } = event.target;
  //   const value = [];
  //   for (let i = 0, l = options.length; i < l; i += 1) {
  //     if (options[i].selected) {
  //       value.push(options[i].value);
  //     }
  //   }
  //   this.setState({
  //     name: value,
  //   });
  // };
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
            //handleChangeMultiple={this.handleChangeMultiple}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Profile />;
    }
  }
}

export default ProfileUserForm;

