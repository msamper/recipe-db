import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from './modules/components/Typography';
import AppForm from './modules/views/AppForm';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';

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

export class ProfileFormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  state = {
    dietTypes: '',
    dietPreferences: '',
  };
  // handleChange = event => {
  //   console.log(event.target.value);
  //   console.log(event.target.name);
  //   this.setState({ [event.target.name]: event.target.value });
  // };
  render() {
    const { values, handleChange } = this.props;
    //const { classes } = this.props;
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
            <br />
          </React.Fragment>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <TextField
                style={styles.textField}
                fullWidth
                variant="outlined"
                hintText="Enter Your Age"
                floatingLabelText="Age"
                label="Age"
                onChange={handleChange('age')}
                defaultValue={values.age}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={styles.textField}
                fullWidth
                variant="outlined"
                hintText="Enter Your BMI"
                floatingLabelText="BMI"
                label="BMI"
                onChange={handleChange('bmi')}
                defaultValue={values.bmi}
                required
              />
            </Grid>
          </Grid>
          <br />
          <InputLabel>
            Diet Types
          </InputLabel>
          <Select
            fullWidth
            variant="outlined"
            value={values.dietTypes}
            onChange={handleChange('dietTypes')}
            input={
              <OutlinedInput
                name="dietTypes"
                id="outlined-dietTypes-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="balanced">Balanced</MenuItem>
            <MenuItem value="high-protein">High Protein</MenuItem>
            <MenuItem value="low-fat">Low Fat</MenuItem>
            <MenuItem value="low-carb">Low Carb</MenuItem>
          </Select>
          <br />
          <br />
          <InputLabel>
            Diet Preferences
          </InputLabel>
          <Select
            multiple
            fullWidth
            variant="outlined"
            value={values.dietPreferences}
            onChange={handleChange('dietPreferences')}
            input={
              <OutlinedInput
                id="outlined-dietPreferences-multiple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="alcohol-free">Alcohol Free</MenuItem>
            <MenuItem value="peanut-free">Peanut Free</MenuItem>
            <MenuItem value="sugar-conscious">Sugar Conscious</MenuItem>
            <MenuItem value="tree-nut-free">Tree Nut Free</MenuItem>
            <MenuItem value="vegan">Vegan</MenuItem>
            <MenuItem value="vegetarian">Vegetarian</MenuItem>
          </Select>
          <br />
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
                label="Continue"
                color="secondary"
                style={styles.button}
                onClick={this.continue}>
                Continue
              </Button>
            </Grid>
          </Grid>
        </AppForm>
      </React.Fragment>
    );
  }
}

ProfileFormPersonalDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
};

export default compose(
  withRoot,
  withStyles(styles),
)(ProfileFormPersonalDetails);
