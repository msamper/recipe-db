import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
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

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      age: '',
      bmi: '',
      dietTypes: '',
      dietPreferences: '',
    };
  }

  componentWillMount() {
    const id = this.props.auth.user.id;
    axios.get(`/api/users/profile/${id}`)
      .then(res => {
        this.setState({ name: res.data.user.name, email: res.data.user.email, age: res.data.user.age, bmi: res.data.user.bmi, dietTypes: res.data.user.diet_type, dietPreferences: res.data.user.diet_preferences.join(', ') });
      });
  }
  render() {
    return (
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Welcome, {this.state.name}!
          </Typography>
          <Grid container spacing={16}>
            <List>
              <ListItem>
                <ListItemText
                  primary="Email"
                  secondary={this.state.email}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Age"
                  secondary={this.state.age}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="BMI"
                  secondary={this.state.bmi}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Diet Type"
                  secondary={this.state.dietTypes}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Diet Restrictions"
                  secondary={this.state.dietPreferences}
                />
              </ListItem>
            </List>
          </Grid>
        </React.Fragment>
      </AppForm>
    );
  }
}

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default compose(
  withRoot,
  withStyles(styles),
  connect(
    mapStateToProps
  ),
)(Profile);
