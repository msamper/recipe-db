import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../../../../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../../../../components/Toolbar';

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

  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
    browserHistory.push('/');
  };

  const loginOrUser = (auth) => {
    return auth.isAuthenticated ?
      <div className={classes.right}>
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
          onClick={onLogoutClick}
          href="/"
        >
          {'Log Out'}
        </Link>
      </div>

      :

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
      </div>
  };

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
          {loginOrUser(props.auth)}
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default withStyles(styles)(AppAppBar);
