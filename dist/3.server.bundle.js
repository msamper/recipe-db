exports.ids = [3];
exports.modules = {

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _UserForm = __webpack_require__(156);

var _UserForm2 = _interopRequireDefault(_UserForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('div', {
  className: 'SignUp'
}, void 0, _jsx(_UserForm2.default, {}));

var SignUp = function (_Component) {
  _inherits(SignUp, _Component);

  function SignUp() {
    _classCallCheck(this, SignUp);

    return _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).apply(this, arguments));
  }

  _createClass(SignUp, [{
    key: 'render',
    value: function render() {
      return _ref;
    }
  }]);

  return SignUp;
}(_react.Component);

exports.default = SignUp;

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

/***/ }),

/***/ 156:
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

var _reactRouterDom = __webpack_require__(113);

var _reactRouter = __webpack_require__(7);

var _reactRedux = __webpack_require__(3);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormUserDetails = __webpack_require__(157);

var _FormUserDetails2 = _interopRequireDefault(_FormUserDetails);

var _FormPersonalDetails = __webpack_require__(158);

var _FormPersonalDetails2 = _interopRequireDefault(_FormPersonalDetails);

var _Confirm = __webpack_require__(159);

var _Confirm2 = _interopRequireDefault(_Confirm);

var _Success = __webpack_require__(160);

var _Success2 = _interopRequireDefault(_Success);

var _authActions = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// --- Post bootstrap -----


var _ref2 = _jsx(_Success2.default, {});

var UserForm = function (_Component) {
  _inherits(UserForm, _Component);

  function UserForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserForm.__proto__ || Object.getPrototypeOf(UserForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      age: '',
      bmi: '',
      dietTypes: '',
      dietPreferences: [],
      errors: {}
    }, _this.nextStep = function () {
      var step = _this.state.step;

      _this.setState({
        step: step + 1
      });
    }, _this.prevStep = function () {
      var step = _this.state.step;

      _this.setState({
        step: step - 1
      });
    }, _this.handleChange = function (input) {
      return function (e) {
        _this.setState(_defineProperty({}, input, e.target.value));
      };
    }, _this.handleSubmit = function () {
      var user = {
        name: _this.state.firstName + ' ' + _this.state.lastName,
        email: _this.state.email,
        password: _this.state.password,
        password2: _this.state.password,
        age: _this.state.age,
        bmi: _this.state.bmi,
        diet_type: _this.state.dietTypes,
        diet_preferences: _this.state.dietPreferences
      };
      console.log(user);
      _this.props.registerUser(user, _reactRouter.browserHistory);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserForm, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var step = this.state.step;
      var _state = this.state,
          firstName = _state.firstName,
          lastName = _state.lastName,
          email = _state.email,
          password = _state.password,
          age = _state.age,
          bmi = _state.bmi,
          dietTypes = _state.dietTypes,
          dietPreferences = _state.dietPreferences;

      var values = { firstName: firstName, lastName: lastName, email: email, password: password, age: age, bmi: bmi, dietTypes: dietTypes, dietPreferences: dietPreferences };
      switch (step) {
        case 1:
          return _jsx(_FormUserDetails2.default, {
            nextStep: this.nextStep,
            handleChange: this.handleChange,
            values: values
          });
        case 2:
          return _jsx(_FormPersonalDetails2.default, {
            nextStep: this.nextStep,
            prevStep: this.prevStep,
            handleChange: this.handleChange,
            values: values
          });
        case 3:
          return _jsx(_Confirm2.default, {
            nextStep: this.nextStep,
            prevStep: this.prevStep,
            handleSubmit: this.handleSubmit,
            values: values
          });
        case 4:
          return _ref2;
        // browserHistory.push('/sign-in');
      }
    }
  }]);

  return UserForm;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.error
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { registerUser: _authActions.registerUser })(UserForm);

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormUserDetails = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _withRoot = __webpack_require__(136);

var _withRoot2 = _interopRequireDefault(_withRoot);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(6);

var _compose = __webpack_require__(89);

var _compose2 = _interopRequireDefault(_compose);

var _Link = __webpack_require__(25);

var _Link2 = _interopRequireDefault(_Link);

var _TextField = __webpack_require__(90);

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = __webpack_require__(88);

var _Button2 = _interopRequireDefault(_Button);

var _Typography = __webpack_require__(135);

var _Typography2 = _interopRequireDefault(_Typography);

var _AppForm = __webpack_require__(138);

var _AppForm2 = _interopRequireDefault(_AppForm);

var _Grid = __webpack_require__(87);

var _Grid2 = _interopRequireDefault(_Grid);

var _reactFinalForm = __webpack_require__(97);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// --- Post bootstrap -----

// import { email, required } from './modules/form/validation';


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
    },
    textField: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 2,
      backgroundColor: '#FFFFFF'
    }
  };
};

var _ref2 = _jsx(_react2.default.Fragment, {}, void 0, _jsx(_Typography2.default, {
  variant: 'h3',
  gutterBottom: true,
  marked: 'center',
  align: 'center'
}, void 0, 'Sign Up'), _jsx(_Typography2.default, {
  variant: 'body2',
  align: 'center'
}, void 0, _jsx(_Link2.default, {
  href: '/sign-in',
  underline: 'always'
}, void 0, 'Already have an account?')), _jsx('br', {}));

var _ref3 = _jsx('br', {});

var _ref4 = _jsx('br', {});

var FormUserDetails = exports.FormUserDetails = function (_Component) {
  _inherits(FormUserDetails, _Component);

  function FormUserDetails() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormUserDetails);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormUserDetails.__proto__ || Object.getPrototypeOf(FormUserDetails)).call.apply(_ref, [this].concat(args))), _this), _this.continue = function (e) {
      e.preventDefault();
      _this.props.nextStep();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormUserDetails, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          values = _props.values,
          handleChange = _props.handleChange;

      return _jsx(_react2.default.Fragment, {}, void 0, _jsx(_AppForm2.default, {}, void 0, _ref2, _jsx(_Grid2.default, {
        container: true,
        spacing: 16
      }, void 0, _jsx(_Grid2.default, {
        item: true,
        xs: 12,
        sm: 6
      }, void 0, _jsx(_TextField2.default, {
        style: styles.textField,
        fullWidth: true,
        variant: 'outlined',
        hintText: 'Enter Your First Name',
        floatingLabelText: 'First Name',
        label: 'First Name',
        onChange: handleChange('firstName'),
        defaultValue: values.firstName,
        required: true
      })), _jsx(_Grid2.default, {
        item: true,
        xs: 12,
        sm: 6
      }, void 0, _jsx(_TextField2.default, {
        style: styles.textField,
        fullWidth: true,
        variant: 'outlined',
        hintText: 'Enter Your Last Name',
        floatingLabelText: 'Last Name',
        label: 'Last Name',
        onChange: handleChange('lastName'),
        defaultValue: values.lastName,
        required: true
      }))), _ref3, _jsx(_Grid2.default, {
        container: true,
        spacing: 16
      }, void 0, _jsx(_Grid2.default, {
        item: true,
        xs: 12,
        sm: 6
      }, void 0, _jsx(_TextField2.default, {
        style: styles.textField,
        fullWidth: true,
        variant: 'outlined',
        hintText: 'Enter Your Email',
        floatingLabelText: 'Email',
        label: 'Email',
        onChange: handleChange('email'),
        defaultValue: values.email,
        required: true
      })), _jsx(_Grid2.default, {
        item: true,
        xs: 12,
        sm: 6
      }, void 0, _jsx(_TextField2.default, {
        style: styles.textField,
        fullWidth: true,
        variant: 'outlined',
        hintText: 'Enter a Password',
        floatingLabelText: 'Password',
        label: 'Password',
        onChange: handleChange('password'),
        defaultValue: values.password,
        type: 'password',
        required: true
      }))), _ref4, _jsx(_Button2.default, {
        Button: true,
        variant: 'contained',
        fullWidth: true,
        label: 'Continue',
        color: 'secondary',
        style: styles.button,
        onClick: this.continue
      }, void 0, 'Continue')));
    }
  }]);

  return FormUserDetails;
}(_react.Component);

exports.default = (0, _compose2.default)(_withRoot2.default, (0, _styles.withStyles)(styles))(FormUserDetails);

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormPersonalDetails = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _withRoot = __webpack_require__(136);

var _withRoot2 = _interopRequireDefault(_withRoot);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(6);

var _compose = __webpack_require__(89);

var _compose2 = _interopRequireDefault(_compose);

var _Button = __webpack_require__(88);

var _Button2 = _interopRequireDefault(_Button);

var _TextField = __webpack_require__(90);

var _TextField2 = _interopRequireDefault(_TextField);

var _Typography = __webpack_require__(135);

var _Typography2 = _interopRequireDefault(_Typography);

var _AppForm = __webpack_require__(138);

var _AppForm2 = _interopRequireDefault(_AppForm);

var _Grid = __webpack_require__(87);

var _Grid2 = _interopRequireDefault(_Grid);

var _Select = __webpack_require__(114);

var _Select2 = _interopRequireDefault(_Select);

var _InputLabel = __webpack_require__(115);

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _MenuItem = __webpack_require__(116);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Link = __webpack_require__(25);

var _Link2 = _interopRequireDefault(_Link);

var _Input = __webpack_require__(117);

var _Input2 = _interopRequireDefault(_Input);

var _OutlinedInput = __webpack_require__(118);

var _OutlinedInput2 = _interopRequireDefault(_OutlinedInput);

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
    },
    textField: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 2,
      backgroundColor: '#FFFFFF'
    }
  };
};

var _ref2 = _jsx(_react2.default.Fragment, {}, void 0, _jsx(_Typography2.default, {
  variant: 'h3',
  gutterBottom: true,
  marked: 'center',
  align: 'center'
}, void 0, 'Sign Up'), _jsx(_Typography2.default, {
  variant: 'body2',
  align: 'center'
}, void 0, _jsx(_Link2.default, {
  href: '/sign-in',
  underline: 'always'
}, void 0, 'Already have an account?')), _jsx('br', {}));

var _ref3 = _jsx('br', {});

var _ref4 = _jsx(_InputLabel2.default, {}, void 0, 'Diet Types');

var _ref5 = _jsx(_OutlinedInput2.default, {
  name: 'dietTypes',
  id: 'outlined-dietTypes-simple'
});

var _ref6 = _jsx(_MenuItem2.default, {
  value: ''
}, void 0, _jsx('em', {}, void 0, 'None'));

var _ref7 = _jsx(_MenuItem2.default, {
  value: 'balanced'
}, void 0, 'Balanced');

var _ref8 = _jsx(_MenuItem2.default, {
  value: 'high-protein'
}, void 0, 'High Protein');

var _ref9 = _jsx(_MenuItem2.default, {
  value: 'high-fiber'
}, void 0, 'High Fiber');

var _ref10 = _jsx(_MenuItem2.default, {
  value: 'low-fat'
}, void 0, 'Low Fat');

var _ref11 = _jsx(_MenuItem2.default, {
  value: 'low-carb'
}, void 0, 'Low Carb');

var _ref12 = _jsx(_MenuItem2.default, {
  value: 'low-sodium'
}, void 0, 'Low Sodium');

var _ref13 = _jsx('br', {});

var _ref14 = _jsx('br', {});

var _ref15 = _jsx(_InputLabel2.default, {}, void 0, 'Diet Preferences (Select multiple)');

var _ref16 = _jsx(_OutlinedInput2.default, {
  id: 'outlined-dietPreferences-multiple'
});

var _ref17 = _jsx(_MenuItem2.default, {
  value: ''
}, void 0, _jsx('em', {}, void 0, 'None'));

var _ref18 = _jsx(_MenuItem2.default, {
  value: 'alcohol-free'
}, void 0, 'Alcohol Free');

var _ref19 = _jsx(_MenuItem2.default, {
  value: 'peanut-free'
}, void 0, 'Peanut Free');

var _ref20 = _jsx(_MenuItem2.default, {
  value: 'sugar-conscious'
}, void 0, 'Sugar Conscious');

var _ref21 = _jsx(_MenuItem2.default, {
  value: 'tree-nut-free'
}, void 0, 'Tree Nut Free');

var _ref22 = _jsx(_MenuItem2.default, {
  value: 'vegan'
}, void 0, 'Vegan');

var _ref23 = _jsx(_MenuItem2.default, {
  value: 'vegetarian'
}, void 0, 'Vegetarian');

var _ref24 = _jsx('br', {});

var _ref25 = _jsx('br', {});

var FormPersonalDetails = exports.FormPersonalDetails = function (_Component) {
  _inherits(FormPersonalDetails, _Component);

  function FormPersonalDetails() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormPersonalDetails);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormPersonalDetails.__proto__ || Object.getPrototypeOf(FormPersonalDetails)).call.apply(_ref, [this].concat(args))), _this), _this.continue = function (e) {
      e.preventDefault();
      _this.props.nextStep();
    }, _this.back = function (e) {
      e.preventDefault();
      _this.props.prevStep();
    }, _this.state = {
      dietTypes: '',
      dietPreferences: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormPersonalDetails, [{
    key: 'render',

    // handleChange = event => {
    //   console.log(event.target.value);
    //   console.log(event.target.name);
    //   this.setState({ [event.target.name]: event.target.value });
    // };
    value: function render() {
      var _props = this.props,
          values = _props.values,
          handleChange = _props.handleChange;

      return _jsx(_react2.default.Fragment, {}, void 0, _jsx(_AppForm2.default, {}, void 0, _ref2, _jsx(_Grid2.default, {
        container: true,
        spacing: 16
      }, void 0, _jsx(_Grid2.default, {
        item: true,
        xs: 12,
        sm: 6
      }, void 0, _jsx(_TextField2.default, {
        style: styles.textField,
        fullWidth: true,
        variant: 'outlined',
        hintText: 'Enter Your Age',
        floatingLabelText: 'Age',
        label: 'Age',
        onChange: handleChange('age'),
        defaultValue: values.age,
        required: true
      })), _jsx(_Grid2.default, {
        item: true,
        xs: 12,
        sm: 6
      }, void 0, _jsx(_TextField2.default, {
        style: styles.textField,
        fullWidth: true,
        variant: 'outlined',
        hintText: 'Enter Your BMI',
        floatingLabelText: 'BMI',
        label: 'BMI',
        onChange: handleChange('bmi'),
        defaultValue: values.bmi,
        required: true
      }))), _ref3, _ref4, _jsx(_Select2.default, {
        fullWidth: true,
        variant: 'outlined',
        value: values.dietTypes,
        onChange: handleChange('dietTypes'),
        input: _ref5
      }, void 0, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12), _ref13, _ref14, _ref15, _jsx(_Select2.default, {
        multiple: true,
        fullWidth: true,
        variant: 'outlined',
        value: values.dietPreferences,
        onChange: handleChange('dietPreferences'),
        input: _ref16
      }, void 0, _ref17, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23), _ref24, _ref25, _jsx(_Grid2.default, {
        container: true,
        spacing: 16
      }, void 0, _jsx(_Grid2.default, {
        item: true,
        xs: 12,
        sm: 6
      }, void 0, _jsx(_Button2.default, {
        fullWidth: true,
        variant: 'contained',
        label: 'Back',
        color: 'secondary',
        style: styles.button,
        onClick: this.back
      }, void 0, 'Back')), _jsx(_Grid2.default, {
        item: true,
        xs: 12,
        sm: 6
      }, void 0, _jsx(_Button2.default, {
        fullWidth: true,
        variant: 'contained',
        label: 'Continue',
        color: 'secondary',
        style: styles.button,
        onClick: this.continue
      }, void 0, 'Continue')))));
    }
  }]);

  return FormPersonalDetails;
}(_react.Component);

exports.default = (0, _compose2.default)(_withRoot2.default, (0, _styles.withStyles)(styles))(FormPersonalDetails);

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Confirm = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _withRoot = __webpack_require__(136);

var _withRoot2 = _interopRequireDefault(_withRoot);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

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

var _ref2 = _jsx(_Typography2.default, {
  variant: 'h3',
  gutterBottom: true,
  marked: 'center',
  align: 'center'
}, void 0, 'Confirm User Data');

var _ref3 = _jsx('br', {});

var Confirm = exports.Confirm = function (_Component) {
  _inherits(Confirm, _Component);

  function Confirm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Confirm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call.apply(_ref, [this].concat(args))), _this), _this.submit = function (e) {
      e.preventDefault();
      // Process form
      _this.props.handleSubmit();
      _this.props.nextStep();
    }, _this.back = function (e) {
      e.preventDefault();
      _this.props.prevStep();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Confirm, [{
    key: 'render',
    value: function render() {
      var _props$values = this.props.values,
          firstName = _props$values.firstName,
          lastName = _props$values.lastName,
          email = _props$values.email,
          password = _props$values.password,
          age = _props$values.age,
          bmi = _props$values.bmi,
          dietTypes = _props$values.dietTypes,
          dietPreferences = _props$values.dietPreferences;

      return _jsx(_AppForm2.default, {}, void 0, _jsx(_react2.default.Fragment, {}, void 0, _ref2, _jsx(_Grid2.default, {
        container: true,
        spacing: 16
      }, void 0, _jsx(_List2.default, {}, void 0, _jsx(_ListItem2.default, {}, void 0, _jsx(_ListItemText2.default, {
        primary: 'First Name',
        secondary: firstName
      })), _jsx(_ListItem2.default, {}, void 0, _jsx(_ListItemText2.default, {
        primary: 'Last Name',
        secondary: lastName
      })), _jsx(_ListItem2.default, {}, void 0, _jsx(_ListItemText2.default, {
        primary: 'Email',
        secondary: email
      })), _jsx(_ListItem2.default, {}, void 0, _jsx(_ListItemText2.default, {
        primary: 'Password',
        secondary: password
      })), _jsx(_ListItem2.default, {}, void 0, _jsx(_ListItemText2.default, {
        primary: 'Age',
        secondary: age
      })), _jsx(_ListItem2.default, {}, void 0, _jsx(_ListItemText2.default, {
        primary: 'BMI',
        secondary: bmi
      })), _jsx(_ListItem2.default, {}, void 0, _jsx(_ListItemText2.default, {
        primary: 'Diet Types',
        secondary: dietTypes
      })), _jsx(_ListItem2.default, {}, void 0, _jsx(_ListItemText2.default, {
        primary: 'Diet Preferences',
        secondary: dietPreferences.join(', ')
      })))), _ref3, _jsx(_Grid2.default, {
        container: true,
        spacing: 16
      }, void 0, _jsx(_Grid2.default, {
        item: true,
        xs: 12,
        sm: 6
      }, void 0, _jsx(_Button2.default, {
        fullWidth: true,
        variant: 'contained',
        label: 'Back',
        color: 'secondary',
        style: styles.button,
        onClick: this.back
      }, void 0, 'Back')), _jsx(_Grid2.default, {
        item: true,
        xs: 12,
        sm: 6
      }, void 0, _jsx(_Button2.default, {
        fullWidth: true,
        variant: 'contained',
        label: 'Confirm',
        color: 'secondary',
        style: styles.button,
        onClick: this.submit
      }, void 0, 'Confirm')))));
    }
  }]);

  return Confirm;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

exports.default = (0, _compose2.default)(_withRoot2.default, (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, { registerUser: _authActions.registerUser }))(Confirm);

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Success = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Typography = __webpack_require__(135);

var _Typography2 = _interopRequireDefault(_Typography);

var _AppForm = __webpack_require__(138);

var _AppForm2 = _interopRequireDefault(_AppForm);

var _compose = __webpack_require__(89);

var _compose2 = _interopRequireDefault(_compose);

var _withRoot = __webpack_require__(136);

var _withRoot2 = _interopRequireDefault(_withRoot);

var _styles = __webpack_require__(6);

var _Grid = __webpack_require__(87);

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var _ref2 = _jsx(_AppForm2.default, {}, void 0, _jsx(_react2.default.Fragment, {}, void 0, _jsx(_Typography2.default, {
  variant: 'h3',
  gutterBottom: true,
  marked: 'center',
  align: 'center'
}, void 0, 'Sign Up Successful')));

var Success = exports.Success = function (_Component) {
  _inherits(Success, _Component);

  function Success() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Success);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Success.__proto__ || Object.getPrototypeOf(Success)).call.apply(_ref, [this].concat(args))), _this), _this.continue = function (e) {
      e.preventDefault();
      // Process form
      _this.props.nextStep();
    }, _this.back = function (e) {
      e.preventDefault();
      _this.props.prevStep();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Success, [{
    key: 'render',
    value: function render() {
      return _ref2;
    }
  }]);

  return Success;
}(_react.Component);

exports.default = (0, _compose2.default)(_withRoot2.default, (0, _styles.withStyles)(styles))(Success);

/***/ })

};;