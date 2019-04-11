import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { toggleAddPost } from './AppActions';

import { logoutUser } from './actions/authActions';

// let DevTools;
// if (process.env.NODE_ENV === 'development') {
//   // eslint-disable-next-line global-require
//   DevTools = require('./components/DevTools').default;
// }

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  render() {
    return (
      <div>
        <div>
          <Helmet
            title="HealthyU"
            titleTemplate="%s - A Personal Recipe DB"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            auth={this.props.auth}
            logoutUser={this.props.logoutUser}
          />
          <div className={styles.container}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
    auth: store.auth,
  };
}

export default connect(
  mapStateToProps,
  { logoutUser },
  )(App);
