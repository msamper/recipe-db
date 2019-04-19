exports.ids = [2];
exports.modules = {

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _withRoot = __webpack_require__(136);

var _withRoot2 = _interopRequireDefault(_withRoot);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(7);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _authActions = __webpack_require__(26);

var _classnames = __webpack_require__(24);

var _classnames2 = _interopRequireDefault(_classnames);

var _compose = __webpack_require__(89);

var _compose2 = _interopRequireDefault(_compose);

var _styles = __webpack_require__(6);

var _Link = __webpack_require__(25);

var _Link2 = _interopRequireDefault(_Link);

var _reactFinalForm = __webpack_require__(97);

var _Typography = __webpack_require__(135);

var _Typography2 = _interopRequireDefault(_Typography);

var _AppForm = __webpack_require__(138);

var _AppForm2 = _interopRequireDefault(_AppForm);

var _validation = __webpack_require__(143);

var _RFTextField = __webpack_require__(144);

var _RFTextField2 = _interopRequireDefault(_RFTextField);

var _FormButton = __webpack_require__(145);

var _FormButton2 = _interopRequireDefault(_FormButton);

var _FormFeedback = __webpack_require__(147);

var _FormFeedback2 = _interopRequireDefault(_FormFeedback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// --- Post bootstrap -----


var styles = function styles(theme) {
  return {
    form: {
      marginTop: theme.spacing.unit * 6
    },
    button: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 2
    },
    feedback: {
      marginTop: theme.spacing.unit * 2
    }
  };
};

var _ref = _jsx(_react2.default.Fragment, {}, void 0, _jsx(_Typography2.default, {
  variant: 'h3',
  gutterBottom: true,
  marked: 'center',
  align: 'center'
}, void 0, 'Sign In'), _jsx(_Typography2.default, {
  variant: 'body2',
  align: 'center'
}, void 0, 'Not a member yet? ', _jsx(_Link2.default, {
  href: '/sign-up',
  align: 'center',
  underline: 'always'
}, void 0, 'Sign Up Here')));

var _ref4 = _jsx(_Typography2.default, {
  align: 'center'
}, void 0, _jsx(_Link2.default, {
  underline: 'always',
  href: '/forgot-password'
}, void 0, 'Forgot password?'));

var SignIn = function (_React$Component) {
  _inherits(SignIn, _React$Component);

  function SignIn() {
    _classCallCheck(this, SignIn);

    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this));

    _this.validate = function (values) {
      var errors = (0, _validation.required)(['email', 'password'], values, _this.props);

      if (!errors.email) {
        var emailError = (0, _validation.email)(values.email, values, _this.props);
        if (emailError) {
          errors.email = (0, _validation.email)(values.email, values, _this.props);
        }
      }

      return errors;
    };

    _this.handleSubmit = function (values) {
      var userData = {
        email: values.email,
        password: values.password
      };
      _this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };

    _this.state = {
      email: '',
      password: '',
      errors: {},
      sent: false
    };
    return _this;
  }

  _createClass(SignIn, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // const { history } = this.props;
      console.log('hello');
      if (nextProps.auth.isAuthenticated) {
        console.log('yay');
        _reactRouter.browserHistory.push('/'); // push user to dashboard when they login
      }

      if (nextProps.errors) {
        console.log('oh no');
        this.setState({
          errors: nextProps.errors
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var sent = this.state.sent;
      var errors = this.state.errors;


      return _jsx(_react2.default.Fragment, {}, void 0, _jsx(_AppForm2.default, {}, void 0, _ref, _jsx(_reactFinalForm.Form, {
        onSubmit: this.handleSubmit,
        subscription: { submitting: true },
        validate: this.validate
      }, void 0, function (_ref2) {
        var handleSubmit = _ref2.handleSubmit,
            submitting = _ref2.submitting;
        return _jsx('form', {
          onSubmit: handleSubmit,
          className: classes.form,
          noValidate: true
        }, void 0, _jsx(_reactFinalForm.Field, {
          autoComplete: 'email',
          autoFocus: true,
          component: _RFTextField2.default,
          disabled: submitting || sent,
          fullWidth: true,
          label: 'Email',
          margin: 'normal',
          name: 'email',
          required: true,
          size: 'large',
          error: errors.email != null || errors.emailnotfound != null,
          errorText: 'TESTING'
        }), _jsx(_reactFinalForm.Field, {
          fullWidth: true,
          size: 'large',
          component: _RFTextField2.default,
          disabled: submitting || sent,
          required: true,
          name: 'password',
          autoComplete: 'current-password',
          label: 'Password',
          type: 'password',
          margin: 'normal'
        }), _jsx(_reactFinalForm.FormSpy, {
          subscription: { submitError: true }
        }, void 0, function (_ref3) {
          var submitError = _ref3.submitError;
          return submitError ? _jsx(_FormFeedback2.default, {
            className: classes.feedback,
            error: true
          }, void 0, submitError) : null;
        }), _jsx(_FormButton2.default, {
          className: classes.button,
          disabled: submitting || sent,
          size: 'large',
          color: 'secondary',
          fullWidth: true
        }, void 0, submitting || sent ? 'In progress…' : 'Sign In'));
      }), _ref4));
    }
  }]);

  return SignIn;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.error
  };
};

exports.default = (0, _compose2.default)(_withRoot2.default, (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, { loginUser: _authActions.loginUser }))(SignIn);

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(6);

var _helpers = __webpack_require__(86);

var _Typography = __webpack_require__(91);

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = function styles(theme) {
  return {
    markedH2Center: {
      height: 4,
      width: 73,
      display: 'block',
      margin: theme.spacing.unit + 'px auto 0',
      backgroundColor: theme.palette.secondary.main
    },
    markedH3Center: {
      height: 4,
      width: 55,
      display: 'block',
      margin: theme.spacing.unit + 'px auto 0',
      backgroundColor: theme.palette.secondary.main
    },
    markedH4Center: {
      height: 4,
      width: 55,
      display: 'block',
      margin: theme.spacing.unit + 'px auto 0',
      backgroundColor: theme.palette.secondary.main
    },
    markedH6Left: {
      height: 2,
      width: 28,
      display: 'block',
      marginTop: theme.spacing.unit / 2,
      background: 'currentColor'
    }
  };
};

var headlineMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3'
};

function Typography(props) {
  var children = props.children,
      classes = props.classes,
      marked = props.marked,
      variant = props.variant,
      other = _objectWithoutProperties(props, ['children', 'classes', 'marked', 'variant']);

  return _react2.default.createElement(
    _Typography2.default,
    _extends({ headlineMapping: headlineMapping, variant: variant }, other),
    children,
    marked ? _jsx('span', {
      className: classes['marked' + ((0, _helpers.capitalize)(variant) + (0, _helpers.capitalize)(marked))]
    }) : null
  );
}

Typography.defaultProps = {
  marked: false
};

exports.default = (0, _styles.withStyles)(styles)(Typography);

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(6);

var _CssBaseline = __webpack_require__(92);

var _CssBaseline2 = _interopRequireDefault(_CssBaseline);

var _theme = __webpack_require__(139);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx(_CssBaseline2.default, {});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree thanks to React context.
    return _jsx(_styles.MuiThemeProvider, {
      theme: _theme2.default
    }, void 0, _ref, _react2.default.createElement(Component, props));
  }

  return WithRoot;
}

exports.default = withRoot;

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(24);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(6);

var _helpers = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function round(value) {
  return Math.round(value * 1e4) / 1e4;
}

var styles = function styles(theme) {
  var _widthLarge, _widthXlarge;

  return {
    margin: {
      margin: theme.spacing.unit * 7
    },
    marginBottom: {
      marginBottom: theme.spacing.unit * 12
    },
    widthSmall: _defineProperty({
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, theme.breakpoints.up(660 + theme.spacing.unit * 6), {
      width: 660,
      marginLeft: 'auto',
      marginRight: 'auto'
    }),
    widthMedium: _defineProperty({
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, theme.breakpoints.up(850 + theme.spacing.unit * 6), {
      width: 850,
      marginLeft: 'auto',
      marginRight: 'auto'
    }),
    widthLarge: (_widthLarge = {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, _defineProperty(_widthLarge, theme.breakpoints.up('md'), {
      width: 880,
      marginLeft: 'auto',
      marginRight: 'auto'
    }), _defineProperty(_widthLarge, theme.breakpoints.up(round(880 / 0.7777)), {
      width: '77.7777%'
    }), _defineProperty(_widthLarge, theme.breakpoints.up(round(1400 / 0.7777)), {
      width: 1400
    }), _widthLarge),
    widthXlarge: (_widthXlarge = {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, _defineProperty(_widthXlarge, theme.breakpoints.up('md'), {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }), _defineProperty(_widthXlarge, theme.breakpoints.up(round(900 / 0.9)), {
      width: '90%'
    }), _defineProperty(_widthXlarge, theme.breakpoints.up(round(1800 / 0.9)), {
      width: 1800
    }), _widthXlarge),
    widthFull: {
      width: '100%'
    },
    fullHeight: {
      height: '100%'
    }
  };
};

function LayoutBody(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      className = props.className,
      Component = props.component,
      fullHeight = props.fullHeight,
      fullWidth = props.fullWidth,
      margin = props.margin,
      marginBottom = props.marginBottom,
      style = props.style,
      width = props.width,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'component', 'fullHeight', 'fullWidth', 'margin', 'marginBottom', 'style', 'width']);

  return _react2.default.createElement(
    Component,
    _extends({
      className: (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes['width' + (0, _helpers.capitalize)(width)], !fullWidth), _defineProperty(_classNames, classes.fullHeight, fullHeight), _defineProperty(_classNames, classes.margin, margin), _defineProperty(_classNames, classes.marginBottom, marginBottom), _classNames), className),
      style: style
    }, other),
    children
  );
}

LayoutBody.defaultProps = {
  component: 'div',
  fullHeight: false,
  fullWidth: false,
  margin: false,
  marginBottom: false,
  width: 'medium'
};

exports.default = (0, _styles.withStyles)(styles)(LayoutBody);

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(6);

var _LayoutBody = __webpack_require__(137);

var _LayoutBody2 = _interopRequireDefault(_LayoutBody);

var _Paper = __webpack_require__(141);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _paper;

  return {
    root: {
      display: 'flex',
      backgroundImage: 'url(/i-like-food.svg)',
      backgroundRepeat: 'repeat'
    },
    paper: (_paper = {
      padding: theme.spacing.unit * 4 + 'px ' + theme.spacing.unit * 3 + 'px'
    }, _defineProperty(_paper, theme.breakpoints.up('md'), {
      padding: theme.spacing.unit * 10 + 'px ' + theme.spacing.unit * 8 + 'px'
    }), _defineProperty(_paper, 'backgroundColor', '#cffcda'), _paper)
  };
};

function AppForm(props) {
  var children = props.children,
      classes = props.classes;


  return _jsx('div', {
    className: classes.root
  }, void 0, _jsx(_LayoutBody2.default, {
    margin: true,
    marginBottom: true,
    width: 'small'
  }, void 0, _jsx(_Paper2.default, {
    className: classes.paper
  }, void 0, children)));
}

exports.default = (0, _styles.withStyles)(styles)(AppForm);

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(6);

var _green = __webpack_require__(93);

var _green2 = _interopRequireDefault(_green);

var _grey = __webpack_require__(94);

var _grey2 = _interopRequireDefault(_grey);

var _red = __webpack_require__(95);

var _red2 = _interopRequireDefault(_red);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rawTheme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f'
    },
    secondary: {
      light: '#fff5f8',
      main: '#ff3366',
      dark: '#e62958'
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e'
    },
    error: {
      xLight: _red2.default[50],
      main: _red2.default[500],
      dark: _red2.default[700]
    },
    success: {
      xLight: _green2.default[50],
      dark: _green2.default[700]
    }
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
    useNextVariants: true
  }
});

var fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: 'uppercase'
};

var theme = _extends({}, rawTheme, {
  palette: _extends({}, rawTheme.palette, {
    background: _extends({}, rawTheme.palette.background, {
      default: rawTheme.palette.common.white,
      placeholder: _grey2.default[200]
    })
  }),
  typography: _extends({}, rawTheme.typography, {
    fontHeader: fontHeader,
    h1: _extends({}, rawTheme.typography.h1, fontHeader, {
      letterSpacing: 0,
      fontSize: 60
    }),
    h2: _extends({}, rawTheme.typography.h2, fontHeader, {
      fontSize: 48
    }),
    h3: _extends({}, rawTheme.typography.h3, fontHeader, {
      fontSize: 42
    }),
    h4: _extends({}, rawTheme.typography.h4, fontHeader, {
      fontSize: 36
    }),
    h5: _extends({}, rawTheme.typography.h5, {
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight
    }),
    h6: _extends({}, rawTheme.typography.h6, fontHeader, {
      fontSize: 18
    }),
    subtitle1: _extends({}, rawTheme.typography.subtitle1, {
      fontSize: 18
    }),
    body1: _extends({}, rawTheme.typography.body2, {
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16
    }),
    body2: _extends({}, rawTheme.typography.body1, {
      fontSize: 14
    })
  })
});

exports.default = theme;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(6);

var _Button = __webpack_require__(88);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      borderRadius: 0,
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: theme.typography.fontFamilySecondary,
      padding: theme.spacing.unit * 2 - 1 + 'px ' + theme.spacing.unit * 4 + 'px',
      fontSize: theme.typography.pxToRem(14),
      boxShadow: 'none',
      '&:active, &:focus': {
        boxShadow: 'none'
      }
    },
    sizeSmall: {
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 3 + 'px',
      fontSize: theme.typography.pxToRem(13)
    },
    sizeLarge: {
      padding: theme.spacing.unit * 3 - 3 + 'px ' + theme.spacing.unit * 6 + 'px',
      fontSize: theme.typography.pxToRem(16)
    }
  };
};

function Button(props) {
  return _react2.default.createElement(_Button2.default, props);
}

exports.default = (0, _styles.withStyles)(styles)(Button);

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(24);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = __webpack_require__(96);

var _Paper2 = _interopRequireDefault(_Paper);

var _helpers = __webpack_require__(86);

var _styles = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = function styles(theme) {
  return {
    backgroundLight: {
      backgroundColor: theme.palette.secondary.light
    },
    backgroundMain: {
      backgroundColor: theme.palette.secondary.main
    },
    backgroundDark: {
      backgroundColor: theme.palette.secondary.dark
    },
    padding: {
      padding: theme.spacing.unit
    }
  };
};

function Paper(props) {
  var background = props.background,
      classes = props.classes,
      className = props.className,
      padding = props.padding,
      other = _objectWithoutProperties(props, ['background', 'classes', 'className', 'padding']);

  return _react2.default.createElement(_Paper2.default, _extends({
    elevation: 0,
    square: true,
    className: (0, _classnames2.default)(classes['background' + (0, _helpers.capitalize)(background)], _defineProperty({}, classes.padding, padding), className)
  }, other));
}

Paper.defaultProps = {
  background: 'light',
  padding: false
};

exports.default = (0, _styles.withStyles)(styles)(Paper);

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(24);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(6);

var _TextField = __webpack_require__(90);

var _TextField2 = _interopRequireDefault(_TextField);

var _helpers = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = function styles(theme) {
  return {
    root: {
      padding: 0,
      'label + &': {
        marginTop: theme.spacing.unit * 3
      }
    },
    input: {
      minWidth: theme.spacing.unit * 6,
      backgroundColor: theme.palette.common.white,
      '&$disabled': {
        backgroundColor: theme.palette.divider
      }
    },
    inputBorder: {
      border: '1px solid #e9ddd0',
      '&:focus': {
        borderColor: theme.palette.secondary.main
      }
    },
    disabled: {},
    inputSizeSmall: {
      fontSize: 14,
      padding: theme.spacing.unit,
      width: 'calc(100% - ' + theme.spacing.unit * 2 + 'px)'
    },
    inputSizeMedium: {
      fontSize: 16,
      padding: theme.spacing.unit * 2,
      width: 'calc(100% - ' + theme.spacing.unit * 4 + 'px)'
    },
    inputSizeLarge: {
      fontSize: 18,
      padding: 22,
      width: 'calc(100% - ' + 22 * 2 + 'px)'
    },
    inputSizeXlarge: {
      fontSize: 20,
      padding: 25,
      width: 'calc(100% - ' + 25 * 2 + 'px)'
    },
    formLabel: {
      fontSize: 18
    },
    select: {
      height: 'auto',
      borderRadius: 0
    },
    selectIcon: {
      top: '50%',
      marginTop: -12
    }
  };
};

function TextField(props) {
  var classes = props.classes,
      _props$InputProps = props.InputProps;
  _props$InputProps = _props$InputProps === undefined ? {} : _props$InputProps;
  var _props$InputProps$cla = _props$InputProps.classes;
  _props$InputProps$cla = _props$InputProps$cla === undefined ? {} : _props$InputProps$cla;

  var InputPropsClassesInput = _props$InputProps$cla.input,
      InputPropsClassesOther = _objectWithoutProperties(_props$InputProps$cla, ['input']),
      InputPropsOther = _objectWithoutProperties(_props$InputProps, ['classes']),
      InputLabelProps = props.InputLabelProps,
      noBorder = props.noBorder,
      size = props.size,
      SelectProps = props.SelectProps,
      other = _objectWithoutProperties(props, ['classes', 'InputProps', 'InputLabelProps', 'noBorder', 'size', 'SelectProps']);

  return _react2.default.createElement(_TextField2.default, _extends({
    InputProps: _extends({
      disableUnderline: true,
      classes: _extends({
        root: classes.root,
        input: (0, _classnames2.default)(classes.input, classes['inputSize' + (0, _helpers.capitalize)(size)], _defineProperty({}, classes.inputBorder, !noBorder), InputPropsClassesInput),
        disabled: classes.disabled
      }, InputPropsClassesOther)
    }, InputPropsOther),
    InputLabelProps: _extends({}, InputLabelProps, {
      shrink: true,
      className: classes.formLabel
    }),
    SelectProps: _extends({}, SelectProps, {
      classes: {
        select: classes.select,
        icon: classes.selectIcon
      }
    })
  }, other));
}

TextField.defaultProps = {
  noBorder: false,
  size: 'medium'
};

exports.default = (0, _styles.withStyles)(styles)(TextField);

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.email = email;
exports.required = required;

var _isEmail = __webpack_require__(103);

var _isEmail2 = _interopRequireDefault(_isEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function email(value) {
  return value && !(0, _isEmail2.default)(value.trim()) ? 'Invalid email' : null;
}

function isDirty(value) {
  return value || value === 0;
}

// TODO: Make a function to make sure password1 and password2 match

function required(requiredFields, values) {
  return requiredFields.reduce(function (fields, field) {
    return _extends({}, fields, isDirty(values[field]) ? undefined : _defineProperty({}, field, 'Required'));
  }, {});
}

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = __webpack_require__(142);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function RFTextField(props) {
  var autoComplete = props.autoComplete,
      input = props.input,
      InputProps = props.InputProps,
      _props$meta = props.meta,
      touched = _props$meta.touched,
      error = _props$meta.error,
      submitError = _props$meta.submitError,
      other = _objectWithoutProperties(props, ['autoComplete', 'input', 'InputProps', 'meta']);

  return _react2.default.createElement(_TextField2.default, _extends({
    error: Boolean(touched && (error || submitError))
  }, input, other, {
    InputProps: _extends({
      inputProps: {
        autoComplete: autoComplete
      }
    }, InputProps),
    helperText: touched ? error || submitError : ''
  }));
}

exports.default = RFTextField;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _defer = __webpack_require__(146);

var _defer2 = _interopRequireDefault(_defer);

var _Button = __webpack_require__(140);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function FormButton(props) {
  var disabled = props.disabled,
      mounted = props.mounted,
      others = _objectWithoutProperties(props, ['disabled', 'mounted']);

  return _react2.default.createElement(_Button2.default, _extends({ disabled: !mounted || disabled, type: 'submit', variant: 'contained' }, others));
}

exports.default = (0, _defer2.default)(FormButton);

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function defer(Component) {
  var Defer = function (_React$Component) {
    _inherits(Defer, _React$Component);

    function Defer() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Defer);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Defer.__proto__ || Object.getPrototypeOf(Defer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        mounted: false
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Defer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setState({ mounted: true });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({ mounted: this.state.mounted }, this.props));
      }
    }]);

    return Defer;
  }(_react2.default.Component);

  return Defer;
}

exports.default = defer;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(24);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(6);

var _Typography = __webpack_require__(135);

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    root: {
      padding: theme.spacing.unit * 2
    },
    error: {
      backgroundColor: theme.palette.error.xLight,
      color: theme.palette.error.dark
    },
    success: {
      backgroundColor: theme.palette.success.xLight,
      color: theme.palette.success.dark
    }
  };
};

function FormFeedback(props) {
  var _classNames;

  return _jsx('div', {
    className: (0, _classnames2.default)(props.classes.root, (_classNames = {}, _defineProperty(_classNames, props.classes.error, props.error), _defineProperty(_classNames, props.classes.success, props.success), _classNames), props.className)
  }, void 0, _jsx(_Typography2.default, {
    color: 'inherit'
  }, void 0, props.children));
}

exports.default = (0, _styles.withStyles)(styles)(FormFeedback);

/***/ })

};;