import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from './modules/App/actions/authActions';
import classnames from 'classnames';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from './components/Typography';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';

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
});

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
      sent: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    // const { history } = this.props;
    console.log('hello');
    if (nextProps.auth.isAuthenticated) {
      console.log('yay');
      browserHistory.push('/'); // push user to dashboard when they login
    }

    if (nextProps.errors) {
      console.log('oh no');
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  validate = values => {
    const errors = required(['email', 'password'], values, this.props);

    if (!errors.email) {
      const emailError = email(values.email, values, this.props);
      if (emailError) {
        errors.email = email(values.email, values, this.props);
      }
    }

    return errors;
  };

  handleSubmit = values => {
    const userData = {
      email: values.email,
      password: values.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { classes } = this.props;
    const { sent } = this.state;
    const { errors } = this.state;

    return (
      <React.Fragment>
        <AppForm>
          <React.Fragment>
            <Typography variant="h3" gutterBottom marked="center" align="center">
              Sign In
            </Typography>
            <Typography variant="body2" align="center">
              {'Not a member yet? '}
              <Link href="/signuptest" align="center" underline="always">
                Sign Up here
              </Link>
            </Typography>
          </React.Fragment>
          <Form
            onSubmit={this.handleSubmit}
            subscription={{ submitting: true }}
            validate={this.validate}
          >
            {({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <Field
                  autoComplete="email"
                  autoFocus
                  component={RFTextField}
                  disabled={submitting || sent}
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  required
                  size="large"
                  error={errors.email != null || errors.emailnotfound != null}
                  errorText="TESTING"
                />
                <Field
                  fullWidth
                  size="large"
                  component={RFTextField}
                  disabled={submitting || sent}
                  required
                  name="password"
                  autoComplete="current-password"
                  label="Password"
                  type="password"
                  margin="normal"
                />
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
                  size="large"
                  color="secondary"
                  fullWidth
                >
                  {submitting || sent ? 'In progress…' : 'Sign In'}
                </FormButton>
              </form>
            )}
          </Form>
          <Typography align="center">
            <Link underline="always" href="/forgot-password">
              Forgot password?
            </Link>
          </Typography>
        </AppForm>
      </React.Fragment>
    );
  }
}

SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.error,
});

export default compose(
  withRoot,
  withStyles(styles),
  connect(
    mapStateToProps,
    { loginUser }
  ),
)(SignIn);
