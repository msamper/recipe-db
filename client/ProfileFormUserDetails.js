import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import Link from '@material-ui/core/Link';
import { email, required } from './modules/form/validation';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from './modules/components/Typography';
import AppForm from './modules/views/AppForm';
import Grid from '@material-ui/core/Grid';
import { Field, Form, FormSpy } from 'react-final-form';

<Button component={Link} to="/open-collective">
  Link
</Button>

const styles = theme => ({
  form: {
    marginTop: theme.spacing.unit * 6,
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
  },
  feedback: {
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
    backgroundColor: '#FFFFFF',
  },
});

// const validate = values => {
//   const errors = {}
//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   }
//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   }
//   if (!values.email) {
//     errors.email = 'Required';
//   }
//   if (!values.password) {
//     errors.password = 'Required';
//   }
//   return errors;
// };

export class ProfileFormUserDetails extends Component {
  validate = values => {
    const errors = required(['firstName', 'lastName', 'email', 'password'], values, this.props);

    if (!errors.email) {
      const emailError = email(values.email, values, this.props);
      if (emailError) {
        errors.email = email(values.email, values, this.props);
      }
    }

    return errors;
  };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    //const { classes } = this.props;
    return (
      <React.Fragment>
        <AppForm>
          <React.Fragment>
            <Typography variant="h3" gutterBottom marked="center" align="center">
              Edit Profile
            </Typography>
            <br />
          </React.Fragment>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <TextField
                style={styles.textField}
                fullWidth
                variant="outlined"
                hintText="Enter Your First Name"
                floatingLabelText="First Name"
                label="First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={styles.textField}
                fullWidth
                variant="outlined"
                hintText="Enter Your Last Name"
                floatingLabelText="Last Name"
                label="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
                required
              />
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <TextField
                style={styles.textField}
                fullWidth
                variant="outlined"
                hintText="Enter Your Email"
                floatingLabelText="Email"
                label="Email"
                onChange={handleChange('email')}
                defaultValue={values.email}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={styles.textField}
                fullWidth
                variant="outlined"
                hintText="Enter a Password"
                floatingLabelText="Password"
                label="Password"
                onChange={handleChange('password')}
                defaultValue={values.password}
                required
              />
            </Grid>
          </Grid>
          <br />
          <Button
            Button variant="contained"
            fullWidth
            label="Continue"
            color="secondary"
            style={styles.button}
            onClick={this.continue}>
            Continue
          </Button>
        </AppForm>
      </React.Fragment>
    );
  }
}

ProfileFormUserDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,

};

export default compose(
  withRoot,
  withStyles(styles),
)(ProfileFormUserDetails);
