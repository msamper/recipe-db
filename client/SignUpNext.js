import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
// import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
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

class SignUpNext extends React.Component {
  state = {
    sent: false,
    checked: [1],
  };

  validate = values => {
    const errors = required(['bmi'], values, this.props);

    if (!errors.email) {
      const emailError = email(values.email, values, this.props);
      if (emailError) {
        errors.email = email(values.email, values, this.props);
      }
    }

    return errors;
  };

  handleSubmit = () => {};
  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;
    const { sent } = this.state;

    return (
      <React.Fragment>
        <AppForm>
          <React.Fragment>
            <Typography variant="h3" gutterBottom marked="center" align="center">
              Sign Up
            </Typography>
            <Typography variant="body2" align="center">
              <Link href="/sign-in" underline="always">
                Already have an account?
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
                <Grid container spacing={16}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      autoFocus
                      component={RFTextField}
                      autoComplete="age"
                      fullWidth
                      label="Age"
                      name="age"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="bmi"
                      fullWidth
                      label="Calculated BMI"
                      name="bmi"
                      required
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={16} color="theme.palette.background.paper">
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" align="center">
                      Diet Goals
                    </Typography>
                    <List className={classes.root}>
                      {[0, 1, 2, 3].map(value => (
                        <ListItem alignItems="flex-start" button>
                          <ListItemText primary={'Maintain weight'} />
                          <ListItemSecondaryAction>
                            <Checkbox
                              onChange={this.handleToggle(value)}
                              checked={this.state.checked.indexOf(value) !== -1}
                            />
                          </ListItemSecondaryAction>
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" align="center">
                      Diet Types
                    </Typography>
                    <List className={classes.root}>
                      {[4, 5, 6, 7].map(value => (
                        <ListItem key={value} button>
                          <ListItemText primary={'Vegan'} />
                          <ListItemSecondaryAction>
                            <Checkbox
                              onChange={this.handleToggle(value)}
                              checked={this.state.checked.indexOf(value) !== -1}
                            />
                          </ListItemSecondaryAction>
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
                <Grid container spacing={16}>
                  <Typography variant="body2" align="center">
                    Allergens
                  </Typography>
                  <List className={classes.root}>
                    {[8, 9].map(value => (
                      <ListItem key={value} button>
                        <ListItemText primary={'Wheat'} />
                        <ListItemSecondaryAction>
                          <Checkbox
                            onChange={this.handleToggle(value)}
                            checked={this.state.checked.indexOf(value) !== -1}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Button variant="outlined" href="/sign-up" className={classes.button} color="secondary" fullWidth>
                  Back
                </Button>
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
                  {submitting || sent ? 'In progress…' : 'Sign Up'}
                </FormButton>
              </form>
            )}
          </Form>
        </AppForm>
      </React.Fragment>
    );
  }
}

SignUpNext.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withRoot,
  withStyles(styles),
)(SignUpNext);
