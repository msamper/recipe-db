exports.ids = [4];
exports.modules = {

/***/ 133:
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

var _reactRedux = __webpack_require__(3);

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

var _Button = __webpack_require__(88);

var _Button2 = _interopRequireDefault(_Button);

var _Typography = __webpack_require__(135);

var _Typography2 = _interopRequireDefault(_Typography);

var _List = __webpack_require__(100);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(101);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = __webpack_require__(102);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _compose = __webpack_require__(89);

var _compose2 = _interopRequireDefault(_compose);

var _styles = __webpack_require__(6);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = __webpack_require__(87);

var _Grid2 = _interopRequireDefault(_Grid);

var _AppForm = __webpack_require__(138);

var _AppForm2 = _interopRequireDefault(_AppForm);

var _authActions = __webpack_require__(26);

var _classnames = __webpack_require__(24);

var _classnames2 = _interopRequireDefault(_classnames);

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

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile() {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));

    _this.state = {
      name: '',
      email: '',
      age: '',
      bmi: '',
      dietTypes: '',
      dietPreferences: ''
    };
    return _this;
  }

  _createClass(Profile, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var id = this.props.auth.user.id;
      _axios2.default.get('/api/users/profile/' + id).then(function (res) {
        _this2.setState({ name: res.data.user.name, email: res.data.user.email, age: res.data.user.age, bmi: res.data.user.bmi, dietTypes: res.data.user.diet_type, dietPreferences: res.data.user.diet_preferences.join(', ') });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _jsx(_AppForm2.default, {}, void 0, _jsx(_react2.default.Fragment, {}, void 0, _jsx(_Typography2.default, {
        variant: 'h3',
        gutterBottom: true,
        marked: 'center',
        align: 'center'
      }, void 0, 'Welcome, ', this.state.name, '!'), _jsx(_Grid2.default, {
        container: true,
        spacing: 16
      }, void 0, _jsx(_List2.default, {}, void 0, _jsx(_ListItem2.default, {}, void 0, _jsx(_ListItemText2.default, {
        primary: 'Email',
        secondary: this.state.email
      })), _jsx(_ListItem2.default, {}, void 0, _jsx(_ListItemText2.default, {
        primary: 'Age',
        secondary: this.state.age
      })), _jsx(_ListItem2.default, {}, void 0, _jsx(_ListItemText2.default, {
        primary: 'BMI',
        secondary: this.state.bmi
      })), _jsx(_ListItem2.default, {}, void 0, _jsx(_ListItemText2.default, {
        primary: 'Diet Types',
        secondary: this.state.dietTypes
      })), _jsx(_ListItem2.default, {}, void 0, _jsx(_ListItemText2.default, {
        primary: 'Diet Preferences',
        secondary: this.state.dietPreferences
      }))))));
    }
  }]);

  return Profile;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

exports.default = (0, _compose2.default)(_withRoot2.default, (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps))(Profile);

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

/***/ })

};;