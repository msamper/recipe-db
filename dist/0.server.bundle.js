exports.ids = [0];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
// --- Post bootstrap -----


var _withRoot = __webpack_require__(136);

var _withRoot2 = _interopRequireDefault(_withRoot);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProductHero = __webpack_require__(148);

var _ProductHero2 = _interopRequireDefault(_ProductHero);

var _ProductValues = __webpack_require__(150);

var _ProductValues2 = _interopRequireDefault(_ProductValues);

var _ProductHowItWorks = __webpack_require__(151);

var _ProductHowItWorks2 = _interopRequireDefault(_ProductHowItWorks);

var _ProductCategories = __webpack_require__(152);

var _ProductCategories2 = _interopRequireDefault(_ProductCategories);

var _ProductCTA = __webpack_require__(153);

var _ProductCTA2 = _interopRequireDefault(_ProductCTA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx(_react2.default.Fragment, {}, void 0, _jsx(_ProductHero2.default, {}), _jsx(_ProductValues2.default, {}), _jsx(_ProductCategories2.default, {}), _jsx(_ProductHowItWorks2.default, {}), _jsx(_ProductCTA2.default, {}));

function Index() {
  return _ref;
}

exports.default = (0, _withRoot2.default)(Index);

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

/***/ 148:
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

var _Link = __webpack_require__(25);

var _Link2 = _interopRequireDefault(_Link);

var _Button = __webpack_require__(140);

var _Button2 = _interopRequireDefault(_Button);

var _Typography = __webpack_require__(135);

var _Typography2 = _interopRequireDefault(_Typography);

var _ProductHeroLayout = __webpack_require__(149);

var _ProductHeroLayout2 = _interopRequireDefault(_ProductHeroLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var backgroundImage = 'https://res.cloudinary.com/format-magazine-production/image/upload/c_limit,w_1800,h_1200,f_jpg,f_auto/dpr_2.0/c_scale,w_870,h_580/Mexican_Table_1_slzrja';

var styles = function styles(theme) {
  return {
    background: {
      backgroundImage: 'url(' + backgroundImage + ')',
      backgroundColor: '#7fc7d9', // Average color of the background image.
      backgroundPosition: 'center'
    },
    button: {
      minWidth: 200
    },
    h5: _defineProperty({
      marginBottom: theme.spacing.unit * 4,
      marginTop: theme.spacing.unit * 4
    }, theme.breakpoints.up('sm'), {
      marginTop: theme.spacing.unit * 10
    }),
    more: {
      marginTop: theme.spacing.unit * 2
    }
  };
};

var _ref = _jsx(_Typography2.default, {
  color: 'inherit',
  align: 'center',
  variant: 'h2',
  marked: 'center'
}, void 0, 'Welcome to a HealthyU');

function ProductHero(props) {
  var classes = props.classes;


  return _jsx(_ProductHeroLayout2.default, {
    backgroundClassName: classes.background
  }, void 0, _jsx('img', {
    style: { display: 'none' },
    src: backgroundImage,
    alt: ''
  }), _ref, _jsx(_Typography2.default, {
    color: 'inherit',
    align: 'center',
    variant: 'h5',
    className: classes.h5
  }, void 0, 'Take charge of your diet and find recipes that fit your lifestyle.'), _jsx(_Button2.default, {
    color: 'secondary',
    variant: 'contained',
    size: 'large',
    className: classes.button,
    component: function component(linkProps) {
      return _react2.default.createElement(_Link2.default, _extends({}, linkProps, { href: '/sign-up', variant: 'button' }));
    }
  }, void 0, 'Register'), _jsx(_Typography2.default, {
    variant: 'body2',
    color: 'inherit',
    className: classes.more
  }, void 0, 'Get started now!'));
}

exports.default = (0, _styles.withStyles)(styles)(ProductHero);

/***/ }),

/***/ 149:
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

var _LayoutBody = __webpack_require__(137);

var _LayoutBody2 = _interopRequireDefault(_LayoutBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    root: _defineProperty({
      color: theme.palette.common.white,
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }, theme.breakpoints.up('sm'), {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300
    }),
    layoutBody: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 14,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    backdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.5,
      zIndex: -1
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      zIndex: -2
    },
    arrowDown: {
      position: 'absolute',
      bottom: theme.spacing.unit * 4
    }
  };
};

var _ref = _jsx('img', {
  src: '/productHeroWonder.png',
  alt: 'wonder',
  width: '147',
  height: '80'
});

function ProductHeroLayout(props) {
  var backgroundClassName = props.backgroundClassName,
      children = props.children,
      classes = props.classes;


  return _jsx('section', {
    className: classes.root
  }, void 0, _jsx(_LayoutBody2.default, {
    className: classes.layoutBody,
    width: 'full'
  }, void 0, _ref, children, _jsx('div', {
    className: classes.backdrop
  }), _jsx('div', {
    className: (0, _classnames2.default)(classes.background, backgroundClassName)
  }), _jsx('img', {
    className: classes.arrowDown,
    src: '/productHeroArrowDown.png',
    height: '16',
    width: '12',
    alt: 'arrow down'
  })));
}

exports.default = (0, _styles.withStyles)(styles)(ProductHeroLayout);

/***/ }),

/***/ 150:
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

var _Grid = __webpack_require__(87);

var _Grid2 = _interopRequireDefault(_Grid);

var _LayoutBody = __webpack_require__(137);

var _LayoutBody2 = _interopRequireDefault(_LayoutBody);

var _Typography = __webpack_require__(135);

var _Typography2 = _interopRequireDefault(_Typography);

var _SvgIcon = __webpack_require__(98);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _AccessAlarm = __webpack_require__(105);

var _AccessAlarm2 = _interopRequireDefault(_AccessAlarm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      overflow: 'hidden',
      backgroundColor: theme.palette.secondary.light
    },
    layoutBody: {
      marginTop: theme.spacing.unit * 15,
      marginBottom: theme.spacing.unit * 30,
      display: 'flex',
      position: 'relative'
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0px ' + theme.spacing.unit * 5 + 'px'
    },
    image: {
      height: 55,
      width: 55
    },
    title: {
      marginTop: theme.spacing.unit * 5,
      marginBottom: theme.spacing.unit * 5
    },
    curvyLines: {
      pointerEvents: 'none',
      position: 'absolute',
      top: -180
    }
  };
};

var _ref = _jsx('path', {
  d: 'M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z'
});

var _ref2 = _jsx(_Typography2.default, {
  variant: 'h5'
}, void 0, 'Reimagine your health with unique, creative recipes.');

var _ref3 = _jsx('path', {
  d: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'
});

var _ref4 = _jsx(_Typography2.default, {
  variant: 'h5'
}, void 0, 'Experience the culture of new countries through delicious food ', 'designed just for you.');

var _ref5 = _jsx('path', {
  d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'
});

var _ref6 = _jsx(_Typography2.default, {
  variant: 'h5'
}, void 0, 'Taste different cuisines from around the world. ');

function ProductValues(props) {
  var classes = props.classes;


  return _jsx('section', {
    className: classes.root
  }, void 0, _jsx(_LayoutBody2.default, {
    className: classes.layoutBody,
    width: 'large'
  }, void 0, _jsx('img', {
    src: '/productCurvyLines.png',
    className: classes.curvyLines,
    alt: 'curvy lines'
  }), _jsx(_Grid2.default, {
    container: true,
    spacing: 40
  }, void 0, _jsx(_Grid2.default, {
    item: true,
    xs: 12,
    md: 4
  }, void 0, _jsx('div', {
    className: classes.item
  }, void 0, _react2.default.createElement(
    _SvgIcon2.default,
    _extends({}, props, { className: classes.image }),
    _ref
  ), _jsx(_Typography2.default, {
    variant: 'h6',
    className: classes.title
  }, void 0, 'Healthy recipes'), _ref2)), _jsx(_Grid2.default, {
    item: true,
    xs: 12,
    md: 4
  }, void 0, _jsx('div', {
    className: classes.item
  }, void 0, _react2.default.createElement(
    _SvgIcon2.default,
    _extends({}, props, { className: classes.image }),
    _ref3
  ), _jsx(_Typography2.default, {
    variant: 'h6',
    className: classes.title
  }, void 0, 'New cultures'), _ref4)), _jsx(_Grid2.default, {
    item: true,
    xs: 12,
    md: 4
  }, void 0, _jsx('div', {
    className: classes.item
  }, void 0, _react2.default.createElement(
    _SvgIcon2.default,
    _extends({}, props, { className: classes.image }),
    _ref5
  ), _jsx(_Typography2.default, {
    variant: 'h6',
    className: classes.title
  }, void 0, 'Different Cuisines'), _ref6)))));
}

exports.default = (0, _styles.withStyles)(styles)(ProductValues);

/***/ }),

/***/ 151:
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

var _Grid = __webpack_require__(87);

var _Grid2 = _interopRequireDefault(_Grid);

var _Link = __webpack_require__(25);

var _Link2 = _interopRequireDefault(_Link);

var _LayoutBody = __webpack_require__(137);

var _LayoutBody2 = _interopRequireDefault(_LayoutBody);

var _Button = __webpack_require__(140);

var _Button2 = _interopRequireDefault(_Button);

var _Typography = __webpack_require__(135);

var _Typography2 = _interopRequireDefault(_Typography);

var _SvgIcon = __webpack_require__(98);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      backgroundColor: '#cffcda',
      overflow: 'hidden'
    },
    layoutBody: {
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 15,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0px ' + theme.spacing.unit * 5 + 'px'
    },
    title: {
      marginBottom: theme.spacing.unit * 14
    },
    number: {
      fontSize: 24,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightMedium
    },
    image: {
      height: 55,
      width: 55,
      marginTop: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 4
    },
    curvyLines: {
      pointerEvents: 'none',
      position: 'absolute',
      top: -180,
      opacity: 0.7
    },
    button: {
      marginTop: theme.spacing.unit * 8
    }
  };
};

var _ref = _jsx('path', {
  d: 'M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z'
});

var _ref2 = _jsx(_Typography2.default, {
  variant: 'h5',
  align: 'center'
}, void 0, 'Sign up for a personalized profile.');

var _ref3 = _jsx('path', {
  d: 'M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z'
});

var _ref4 = _jsx(_Typography2.default, {
  variant: 'h5',
  align: 'center'
}, void 0, 'Input your diet preferences, goals, and personal ', 'health information.');

var _ref5 = _jsx('path', {
  d: 'M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z'
});

var _ref6 = _jsx(_Typography2.default, {
  variant: 'h5',
  align: 'center'
}, void 0, 'Experience cultures through recipes catered to your needs.');

function ProductHowItWorks(props) {
  var classes = props.classes;


  return _jsx('section', {
    className: classes.root
  }, void 0, _jsx(_LayoutBody2.default, {
    className: classes.layoutBody,
    width: 'large'
  }, void 0, _jsx(_Typography2.default, {
    variant: 'h4',
    marked: 'center',
    className: classes.title,
    component: 'h2'
  }, void 0, 'How it works'), _jsx('div', {}, void 0, _jsx(_Grid2.default, {
    container: true,
    spacing: 40
  }, void 0, _jsx(_Grid2.default, {
    item: true,
    xs: 12,
    md: 4
  }, void 0, _jsx('div', {
    className: classes.item
  }, void 0, _jsx('div', {
    className: classes.number
  }, void 0, '1.'), _react2.default.createElement(
    _SvgIcon2.default,
    _extends({}, props, { className: classes.image }),
    _ref
  ), _ref2)), _jsx(_Grid2.default, {
    item: true,
    xs: 12,
    md: 4
  }, void 0, _jsx('div', {
    className: classes.item
  }, void 0, _jsx('div', {
    className: classes.number
  }, void 0, '2.'), _react2.default.createElement(
    _SvgIcon2.default,
    _extends({}, props, { className: classes.image }),
    _ref3
  ), _ref4)), _jsx(_Grid2.default, {
    item: true,
    xs: 12,
    md: 4
  }, void 0, _jsx('div', {
    className: classes.item
  }, void 0, _jsx('div', {
    className: classes.number
  }, void 0, '3.'), _react2.default.createElement(
    _SvgIcon2.default,
    _extends({}, props, { className: classes.image }),
    _ref5
  ), _ref6)))), _jsx(_Button2.default, {
    color: 'secondary',
    size: 'large',
    variant: 'contained',
    className: classes.button,
    component: function component(linkProps) {
      return _react2.default.createElement(_Link2.default, _extends({}, linkProps, { href: '/sign-up', variant: 'button' }));
    }
  }, void 0, 'Get started')));
}

exports.default = (0, _styles.withStyles)(styles)(ProductHowItWorks);

/***/ }),

/***/ 152:
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

var _ButtonBase = __webpack_require__(106);

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _LayoutBody = __webpack_require__(137);

var _LayoutBody2 = _interopRequireDefault(_LayoutBody);

var _Typography = __webpack_require__(135);

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _imageWrapper;

  return {
    root: {
      marginTop: theme.spacing.unit * 8,
      marginBottom: theme.spacing.unit * 4
    },
    images: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexWrap: 'wrap'
    },
    imageWrapper: (_imageWrapper = {
      position: 'relative',
      display: 'block',
      padding: 0,
      borderRadius: 0,
      height: '40vh'
    }, _defineProperty(_imageWrapper, theme.breakpoints.down('sm'), {
      width: '100% !important',
      height: 100
    }), _defineProperty(_imageWrapper, '&:hover', {
      zIndex: 1
    }), _defineProperty(_imageWrapper, '&:hover $imageBackdrop', {
      opacity: 0.15
    }), _defineProperty(_imageWrapper, '&:hover $imageMarked', {
      opacity: 0
    }), _defineProperty(_imageWrapper, '&:hover $imageTitle', {
      border: '4px solid currentColor'
    }), _imageWrapper),
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%'
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: theme.palette.common.black,
      opacity: 0.5,
      transition: theme.transitions.create('opacity')
    },
    imageTitle: {
      position: 'relative',
      padding: theme.spacing.unit * 2 + 'px ' + theme.spacing.unit * 4 + 'px ' + (theme.spacing.unit + 6) + 'px'
    },
    imageMarked: {
      height: 3,
      width: 18,
      background: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity')
    }
  };
};

var _ref = _jsx(_Typography2.default, {
  variant: 'h4',
  marked: 'center',
  align: 'center',
  component: 'h2'
}, void 0, 'Discover food from around the world');

function ProductCategories(props) {
  var classes = props.classes;


  var images = [{
    url: 'https://www.averiecooks.com/wp-content/uploads/2018/04/butterchicken-11.jpg',
    title: 'Indian',
    width: '40%'
  }, {
    url: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/06/26/14/arigoldburger.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
    title: 'American',
    width: '20%'
  }, {
    url: 'https://images.tienda.com/is/image/LaTienda/mixed-seafood-paella?&wid=1087',
    title: 'Spanish',
    width: '40%'
  }, {
    url: 'https://heatherchristo.com/wp-content/uploads/2014/01/Spicy-Thai-Curry-Soup-from-HeatherChristo.com_.jpg',
    title: 'Thai',
    width: '38%'
  }, {
    url: 'https://www.azamaraclubcruises.com/sites/default/files/heros/japan-food-blog-hero.jpg',
    title: 'Japanese',
    width: '38%'
  }, {
    url: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/155841402.jpg?itok=M7v4Sy3t',
    title: 'Russian',
    width: '24%'
  }, {
    url: 'https://kiskametals.com/wp-content/uploads/2018/12/italian-food-bbcgoodfoodmecom.png',
    title: 'Italian',
    width: '40%'
  }, {
    url: 'http://www.upmixed.com/wp-content/uploads/2019/02/UpMixed-french-food-favorite-traditional-meals-french-cuisine.png',
    title: 'French',
    width: '20%'
  }, {
    url: 'https://static01.nyt.com/images/2018/01/22/dining/22COOKING-OXTAILSTEW/22COOKING-OXTAILSTEW-articleLarge.jpg',
    title: 'Jamaican',
    width: '40%'
  }];

  return _jsx(_LayoutBody2.default, {
    className: classes.root,
    component: 'section',
    width: 'large'
  }, void 0, _ref, _jsx('div', {
    className: classes.images
  }, void 0, images.map(function (image) {
    return _jsx(_ButtonBase2.default, {
      className: classes.imageWrapper,
      style: {
        width: image.width
      }
    }, image.title, _jsx('div', {
      className: classes.imageSrc,
      style: {
        backgroundImage: 'url(' + image.url + ')'
      }
    }), _jsx('div', {
      className: classes.imageBackdrop
    }), _jsx('div', {
      className: classes.imageButton
    }, void 0, _jsx(_Typography2.default, {
      component: 'h3',
      variant: 'h6',
      color: 'inherit',
      className: classes.imageTitle
    }, void 0, image.title, _jsx('div', {
      className: classes.imageMarked
    }))));
  })));
}

exports.default = (0, _styles.withStyles)(styles)(ProductCategories);

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(6);

var _Grid = __webpack_require__(87);

var _Grid2 = _interopRequireDefault(_Grid);

var _Hidden = __webpack_require__(107);

var _Hidden2 = _interopRequireDefault(_Hidden);

var _Typography = __webpack_require__(135);

var _Typography2 = _interopRequireDefault(_Typography);

var _TextField = __webpack_require__(142);

var _TextField2 = _interopRequireDefault(_TextField);

var _TextBox = __webpack_require__(154);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Snackbar = __webpack_require__(155);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _LayoutBody = __webpack_require__(137);

var _LayoutBody2 = _interopRequireDefault(_LayoutBody);

var _Button = __webpack_require__(140);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      marginTop: theme.spacing.unit * 10,
      marginBottom: 80,
      display: 'flex'
    },
    cardWrapper: {
      zIndex: 1
    },
    card: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#002968',
      padding: theme.spacing.unit * 8 + 'px ' + theme.spacing.unit * 3 + 'px'
    },
    cardContent: {
      maxWidth: 400
    },
    textField: {
      width: '100%',
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 1
    },
    textBox: {
      width: '100%',
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 3
    },
    button: {
      width: '100%',
      marginTop: theme.spacing.unit * 2
    },
    imagesWrapper: {
      position: 'relative'
    },
    imageDots: {
      position: 'absolute',
      top: -67,
      left: -67,
      right: 0,
      bottom: 0,
      width: '100%',
      background: 'url(/productCTAImageDots.png)'
    },
    image: {
      position: 'absolute',
      top: -28,
      left: -28,
      right: 0,
      bottom: 0,
      width: '100%',
      maxWidth: 600
    },
    fontLarge: {
      height: 80,
      width: '100%',
      display: 'block',
      fontSize: '50px',
      color: '#FFFFFF'
    },
    font: {
      height: 60,
      width: '100%',
      display: 'block',
      fontSize: '16px',
      color: '#FFFFFF'
    }
  };
};

var ProductCTA = function (_React$Component) {
  _inherits(ProductCTA, _React$Component);

  function ProductCTA() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProductCTA);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProductCTA.__proto__ || Object.getPrototypeOf(ProductCTA)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.setState({
        open: true
      });
    }, _this.handleClose = function () {
      _this.setState({
        open: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProductCTA, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      return _jsx(_LayoutBody2.default, {
        className: classes.root,
        component: 'section',
        width: 'large'
      }, void 0, _jsx(_Grid2.default, {
        container: true,
        spacing: 0
      }, void 0, _jsx(_Grid2.default, {
        item: true,
        xs: 12,
        md: 12,
        className: classes.cardWrapper
      }, void 0, _jsx('div', {
        className: classes.card
      }, void 0, _jsx('form', {
        onSubmit: this.handleSubmit,
        className: classes.cardContent
      }, void 0, _jsx(_Typography2.default, {
        className: classes.fontLarge
      }, void 0, 'CONTACT US'), _jsx(_Typography2.default, {
        className: classes.font
      }, void 0, 'Send us an email to give us your suggestions, offer new recipes, or just say hello!'), _jsx(_Button2.default, {
        type: 'submit',
        color: 'secondary',
        variant: 'contained',
        className: classes.button,
        href: 'mailto:gahayes97@ufl.edu,msamper@ufl.edu?subject=HealthyU User Email'
      }, void 0, 'Send email'))))));
    }
  }]);

  return ProductCTA;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles)(ProductCTA);

/***/ }),

/***/ 154:
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

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(6);

var _Snackbar = __webpack_require__(108);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _Slide = __webpack_require__(109);

var _Slide2 = _interopRequireDefault(_Slide);

var _Close = __webpack_require__(110);

var _Close2 = _interopRequireDefault(_Close);

var _Info = __webpack_require__(111);

var _Info2 = _interopRequireDefault(_Info);

var _IconButton = __webpack_require__(99);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    content: _defineProperty({
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.text.primary,
      flexWrap: 'inherit'
    }, theme.breakpoints.up('md'), {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4
    }),
    contentMessage: {
      fontSize: 16,
      display: 'flex',
      alignItems: 'center'
    },
    contentAction: {
      paddingLeft: theme.spacing.unit * 2
    },
    info: {
      flexShrink: 0,
      marginRight: theme.spacing.unit * 2
    },
    close: {
      padding: theme.spacing.unit
    }
  };
};

function Transition(props) {
  return _react2.default.createElement(_Slide2.default, _extends({}, props, { direction: 'down' }));
}

var _ref = _jsx(_Close2.default, {});

function Snackbar(props) {
  var classes = props.classes,
      onClose = props.onClose,
      message = props.message,
      other = _objectWithoutProperties(props, ['classes', 'onClose', 'message']);

  return _react2.default.createElement(_Snackbar2.default, _extends({
    anchorOrigin: { vertical: 'top', horizontal: 'center' },
    autoHideDuration: 6e3,
    transition: Transition,
    ContentProps: {
      'aria-describedby': 'snackbar',
      classes: {
        root: classes.content,
        message: classes.contentMessage,
        action: classes.contentAction
      }
    },
    message: _jsx(_react2.default.Fragment, {}, void 0, _jsx(_Info2.default, {
      className: classes.info
    }), _jsx('span', {
      id: 'snackbar'
    }, void 0, message)),
    action: [_jsx(_IconButton2.default, {
      'aria-label': 'Close',
      color: 'inherit',
      className: classes.close,
      onClick: onClose
    }, 'close', _ref)]
  }, other));
}

exports.default = (0, _styles.withStyles)(styles)(Snackbar);

/***/ })

};;