import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../../../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../../../components/Toolbar';

const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing.unit * 3,
  },
  linkSecondary: {
    color: '#002968',
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/"
          >
            {'HealthyU'}
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/sign-in"
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classNames(classes.rightLink, classes.linkSecondary)}
              href="/sign-up"
            >
              {'Sign Up'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classNames(classes.rightLink, classes.rightLink)}
              href="/recipes"
            >
              {'Recipes'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classNames(classes.rightLink, classes.rightLink)}
              href="/profile"
            >
              {'Profile'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classNames(classes.rightLink, classes.linkSecondary)}
              href="/logout"
            >
              {'Log Out'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classNames(classes.rightLink, classes.linkSecondary)}
              href="/signuptest"
            >
              {'Test'}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
