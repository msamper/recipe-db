import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from './components/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppForm from './modules/views/AppForm';
import { registerUser } from './modules/App/actions/authActions';
import classnames from 'classnames';

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

export class Confirm extends Component {
  submit = e => {
    e.preventDefault();
    // Process form
    this.props.handleSubmit();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values: { firstName, lastName, email, password, age, bmi, dietTypes, dietPreferences } } = this.props;
    return (
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Confirm User Data
          </Typography>
          <Grid container spacing={16}>
            <List>
              <ListItem>
                <ListItemText
                  primary="First Name"
                  secondary={firstName}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Last Name"
                  secondary={lastName}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Email"
                  secondary={email}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Password"
                  secondary={password}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Age"
                  secondary={age}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="BMI"
                  secondary={bmi}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Diet Type"
                  secondary={dietTypes}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Diet Preferences"
                  secondary={dietPreferences.join(', ')}
                />
              </ListItem>
            </List>
          </Grid>
          <br />
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                label="Back"
                color="secondary"
                style={styles.button}
                onClick={this.back}>
                Back
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                label="Confirm"
                color="secondary"
                style={styles.button}
                onClick={this.submit}>
                Confirm
              </Button>
            </Grid>
          </Grid>
        </React.Fragment>
      </AppForm>
    );
  }
}

Confirm.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default compose(
  withRoot,
  withStyles(styles),
  connect(
    mapStateToProps,
    { registerUser }
  ),
)(Confirm);
