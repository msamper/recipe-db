import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import compose from 'docs/src/modules/utils/compose';

/*
const styles = theme => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
});*/

class Profile extends React.Component {
  state = {
    sent: false,
  };

  //Add picture
  
  //Update height, weight, bmi
  
  //Input dietary restrictions
  
  //Input goals
  
  /*
  validate = values => {
    const errors = required(['firstName', 'lastName', 'height', 'weight', 'bmi', 'email', 'password'], values, this.props);

    if (!errors.email) {
      const emailError = email(values.email, values, this.props);
      if (emailError) {
        errors.email = email(values.email, values, this.props);
      }
    }

    return errors;
  };
  */
  
  handleSubmit = () => {};

  render() {
    const { classes } = this.props;
    const { sent } = this.state;

    return (
      <React.Fragment>
        <AppAppBar />
        <AppForm>
          <React.Fragment>
            <Typography variant="h3" gutterBottom marked="center" align="center">
              Profile
            </Typography>
          </React.Fragment>
          <Form
            onSubmit={this.handleSubmit}
            subscription={{ submitting: true }}
            validate={this.validate}
          >
            {({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <Grid container spacing={2}>
                 <Grid item xs={12} sm={6}>
                    <Field
                      autoFocus
                      component={RFTextField}
                      autoComplete="fname"
                      fullWidth
                      label="First name"
                      name="firstName"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="lname"
                      fullWidth
                      label="Last name"
                      name="lastName"
                      required
                    />
                  </Grid>
                </Grid>
				<Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      autoFocus
                      component={RFTextField}
                      autoComplete="height"
                      fullWidth
                      label="Height"
                      name="height"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="weight"
                      fullWidth
                      label="Weight"
                      name="weight"
                      required
                    />
                  </Grid>
				  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="bmi"
                      fullWidth
                      label="BMI"
                      name="bmi"
                      required
                    />
                  </Grid>
                </Grid>
				
				//Dietary restrictions
				<Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      autoFocus
                      component={checkbox}
                      autoComplete="Vegan"
                      fullWidth
                      label="Vegan"
                      name="vegan"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={checkbox}
                      autoComplete="vegetarian"
                      fullWidth
                      label="Vegetarian"
                      name="vegetarian"
                    />
                  </Grid>
				  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="keto"
                      fullWidth
                      label="Ketogenic"
                      name="ketogenic"
                    />
                  </Grid>
				  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="kosher"
                      fullWidth
                      label="Kosher"
                      name="kosher"
                    />
                  </Grid>
				  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="paleo"
                      fullWidth
                      label="Paleo"
                      name="paleo"
                    />
                  </Grid>
				  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="med"
                      fullWidth
                      label="Mediterranean"
                      name="mediterranean"
                    />
                  </Grid>
				  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="raw"
                      fullWidth
                      label="Raw Foods"
                      name="raw foods"
                    />
                  </Grid>
				  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="south beach"
                      fullWidth
                      label="South Beach"
                      name="south beach"
                    />
                  </Grid>
				  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="atkins"
                      fullWidth
                      label="Atkins"
                      name="atkins"
                    />
                  </Grid>
				  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
					  autoComplete="goals"
					  fullWidth
					  label="Goals"
					  name="goals"
				  </Grid>
                </Grid>
                <FormSpy subscription={{ submitError: true }}>
                  {({ submitError }) =>
                    submitError ? (
                      <FormFeedback className={classes.feedback} error>
                        {submitError}
                      </FormFeedback>
                    ) : null
                  }
                </FormSpy>
                <FormButton
                  className={classes.button}
                  disabled={submitting || sent}
                  color="secondary"
                  fullWidth
                >
                  {submitting || sent ? 'In progress…' : 'Update'}
                </FormButton>
              </form>
            )}
          </Form>
        </AppForm>
        <AppFooter />
      </React.Fragment>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withRoot,
  withStyles(styles),
)(SignUp);
