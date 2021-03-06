import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '../../components/Typography';
import TextField from '../../components/TextField';
import TextBox from '../../components/TextBox';
import Snackbar from '../../components/Snackbar';
import LayoutBody from '../../components/LayoutBody';
import Button from '../../components/Button';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: 80,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#002968',
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 3}px`,
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 1,
  },
  textBox: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3,
  },
  button: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/productCTAImageDots.png)',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
  fontLarge: {
    height: 80,
    width: '100%',
    display: 'block',
    fontSize: '50px',
    color: '#FFFFFF',
  },
  font: {
    height: 60,
    width: '100%',
    display: 'block',
    fontSize: '16px',
    color: '#FFFFFF',
  }
});

class ProductCTA extends React.Component {
  state = {
    open: false,
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <LayoutBody className={classes.root} component="section" width="large">
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} className={classes.cardWrapper}>
            <div className={classes.card}>
              <form onSubmit={this.handleSubmit} className={classes.cardContent}>
                <Typography className={classes.fontLarge}>
                  CONTACT US
                </Typography>
                <Typography className={classes.font}>
                  Send us an email to give us your suggestions, offer new recipes, or just say hello!
                </Typography>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  className={classes.button}
                  href="mailto:gahayes97@ufl.edu,msamper@ufl.edu?subject=HealthyU User Email"
                >
                  Send email
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    );
  }
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);
