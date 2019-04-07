import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 15,
    marginBottom: theme.spacing.unit * 30,
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={40}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/productValues1.svg"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Healthy recipes
              </Typography>
              <Typography variant="h5">
                {'Reimagine your health with unique, creative recipes.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/productValues2.svg"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                New cultures
              </Typography>
              <Typography variant="h5">
                {'Experience the cultures of new countries through delicious food '}
                {'designed just for you.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/productValues3.svg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Goal-oriented friends
              </Typography>
              <Typography variant="h5">
                {'By using HealthyU, you will meet people all around the world who '}
                {'will motivate you and keep you on track with your goals.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
