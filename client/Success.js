import React, { Component } from 'react';
import Typography from './components/Typography';
import AppForm from './modules/views/AppForm';
import compose from 'recompose/compose';
import withRoot from './modules/withRoot';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // Process form
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up Successful
          </Typography>
        </React.Fragment>
      </AppForm>
    );
  }
}

export default compose(
  withRoot,
  withStyles(styles),
)(Success);
