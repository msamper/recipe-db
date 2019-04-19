exports.ids = [5];
exports.modules = {

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(7);

var _compose = __webpack_require__(89);

var _compose2 = _interopRequireDefault(_compose);

var _classnames2 = __webpack_require__(24);

var _classnames3 = _interopRequireDefault(_classnames2);

var _Card = __webpack_require__(120);

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = __webpack_require__(121);

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardMedia = __webpack_require__(122);

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _CardContent = __webpack_require__(123);

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardActions = __webpack_require__(124);

var _CardActions2 = _interopRequireDefault(_CardActions);

var _Collapse = __webpack_require__(125);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _IconButton = __webpack_require__(99);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Typography = __webpack_require__(91);

var _Typography2 = _interopRequireDefault(_Typography);

var _Favorite = __webpack_require__(126);

var _Favorite2 = _interopRequireDefault(_Favorite);

var _ExpandMore = __webpack_require__(127);

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _Fastfood = __webpack_require__(128);

var _Fastfood2 = _interopRequireDefault(_Fastfood);

var _Search = __webpack_require__(129);

var _Search2 = _interopRequireDefault(_Search);

var _Grid = __webpack_require__(87);

var _Grid2 = _interopRequireDefault(_Grid);

var _Link = __webpack_require__(25);

var _Link2 = _interopRequireDefault(_Link);

var _Modal = __webpack_require__(130);

var _Modal2 = _interopRequireDefault(_Modal);

var _TextField = __webpack_require__(90);

var _TextField2 = _interopRequireDefault(_TextField);

var _Fab = __webpack_require__(131);

var _Fab2 = _interopRequireDefault(_Fab);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    card: {
      maxWidth: 280,
      marginTop: 40,
      marginBottom: 40,
      marginLeft: 15
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    actions: {
      display: 'flex'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    content: {
      marginLeft: 15
    },
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none'
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      width: '80%'
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    },
    fab: {
      margin: theme.spacing.unit * 2
    }
  };
};

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  var top = 50 + rand();
  var left = 50 + rand();

  return {
    top: top + '%',
    left: left + '%',
    transform: 'translate(-' + top + '%, -' + left + '%)'
  };
}

function randomValue() {
  var cuisineOptions = [{ value: 'african', label: 'African' }, { value: 'indian', label: 'Indian' }, { value: 'french', label: 'French' }, { value: 'british', label: 'British' }, { value: 'italian', label: 'Italian' }, { value: 'asian', label: 'Asian' }, { value: 'thai', label: 'Thai' }, { value: 'chinese', label: 'Chinese' }, { value: 'spanish', label: 'Spanish' }, { value: 'vietnamese', label: 'Vietnamese' }, { value: 'greek', label: 'Greek' }, { value: 'japanese', label: 'Japanese' }, { value: 'diary', label: 'Diary' }, { value: 'seafood', label: 'Seafood' }, { value: 'pasta', label: 'Pasta' }, { value: 'vegetable', label: 'Vegetable' }, { value: 'egg', label: 'Egg' }, { value: 'fish', label: 'Fish' }, { value: 'beef', label: 'Beef' }, { value: 'lamb', label: 'Lamb' }, { value: 'pork', label: 'Pork' }, { value: 'duck', label: 'Duck' }, { value: 'chicken', label: 'Chicken' }];
  return cuisineOptions[Math.floor(Math.random() * cuisineOptions.length)].value;
}

var _ref = _jsx(_Search2.default, {});

var _ref2 = _jsx('b', {}, void 0, 'Diet Preferences: ');

var _ref3 = _jsx('br', {});

var _ref4 = _jsx('b', {}, void 0, 'Diet Restrictions: ');

var _ref5 = _jsx('br', {});

var _ref6 = _jsx(_IconButton2.default, {
  'aria-label': 'Add to favorites'
}, void 0, _jsx(_Favorite2.default, {}));

var _ref7 = _jsx(_Fastfood2.default, {});

var _ref8 = _jsx(_ExpandMore2.default, {});

var _ref9 = _jsx(_Typography2.default, {
  paragraph: true
}, void 0, _jsx('b', {}, void 0, 'Ingredients:'));

var _ref10 = _jsx(_Typography2.default, {
  variant: 'subtitle1',
  id: 'simple-modal-description'
}, void 0, 'Fun nutrition info will go here in an easy to read table!');

var RecipeReviewCard = function (_React$Component) {
  _inherits(RecipeReviewCard, _React$Component);

  function RecipeReviewCard() {
    _classCallCheck(this, RecipeReviewCard);

    var _this = _possibleConstructorReturn(this, (RecipeReviewCard.__proto__ || Object.getPrototypeOf(RecipeReviewCard)).call(this));

    _this.handleSearch = function () {
      _this.setState({ q: _this.state.search }, _this.queryBuilder);
    };

    _this.handleExpandClick = function () {
      _this.setState(function (state) {
        return { expanded: !state.expanded };
      });
    };

    _this.handleOpen = function (label) {
      _this.setState({ open: true });
      console.log(label);
      // this.setState({ populateModal: item });
    };

    _this.handleClose = function () {
      _this.setState({ open: false });
      // this.setState({ populateModal: {} });
    };

    _this.handleChange = function (name) {
      return function (event) {
        _this.setState(_defineProperty({}, name, event.target.value));
      };
    };

    _this.state = {
      expanded: false,
      recipes: [],
      profile: {},
      open: false,
      modalOpenIndex: -1,
      title: '',
      query: '',
      q: 'chicken',
      diet: '',
      health: [],
      search: '',
      populateModal: 'fwefewfwe'
    };
    return _this;
  }

  _createClass(RecipeReviewCard, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var id = this.props.auth.user.id;
      _axios2.default.get('/api/users/profile/' + id).then(function (res) {
        _this2.setState({ q: randomValue(), profile: res.data.user, diet: res.data.user.diet_type, health: res.data.user.diet_preferences }, _this2.queryBuilder);
      });
    }
  }, {
    key: 'queryBuilder',
    value: function queryBuilder() {
      var _this3 = this;

      // console.log(this.state.health.map(item => 'health=' + item).join('&'));
      var params = {
        q: this.state.q,
        app_id: '6e473dd6',
        app_key: '1e381d8a43e8a17308fe94b5e3e6d8cd',
        from: '0',
        to: '16',
        diet: this.state.diet,
        health: this.state.health
      };
      var queryString = Object.keys(params).map(function (key) {
        if (key === 'health') {
          return _this3.state.health.map(function (item) {
            return 'health=' + item;
          }).join('&');
        } else {
          return key + '=' + params[key];
        }
      }).join('&');
      this.setState({ query: queryString }, this.submitReq);
    }
  }, {
    key: 'submitReq',
    value: function submitReq() {
      var _this4 = this;

      console.log(this.state.query);
      _axios2.default.get('https://api.edamam.com/search?' + this.state.query).then(function (res) {
        // console.log(res);
        var list = res.data.hits.map(function (obj) {
          return obj.recipe;
        });
        _this4.setState({ recipes: list });
        console.log(_this4.state.recipes);
      });
    }
  }, {
    key: 'render',

    // populateModal = (index) => {
    //   if (this.state.recipes.length > 0 && this.state.modalOpenIndex !== -1) {
    //     this.setState({ title: this.state.recipes[index].label });
    //   }
    // };
    value: function render() {
      var _this5 = this;

      var classes = this.props.classes;

      return _jsx('div', {}, void 0, _jsx(_TextField2.default, {
        fullWidth: true,
        id: 'standard-name',
        label: 'Search',
        placeholder: 'Have something in mind?',
        className: classes.textField,
        value: this.state.search,
        onChange: this.handleChange('search'),
        margin: 'normal',
        variant: 'outlined'
      }), _jsx(_Fab2.default, {
        color: 'primary',
        'aria-label': 'Search',
        onClick: this.handleSearch,
        className: classes.fab
      }, void 0, _ref), _jsx(_Grid2.default, {
        container: true,
        spacing: 8
      }, void 0, this.state.recipes.map(function (item, index) {
        return _jsx(_Grid2.default, {
          item: true
        }, void 0, _jsx(_Card2.default, {
          className: classes.card
        }, index, _jsx(_CardMedia2.default, {
          className: classes.media,
          image: item.image,
          title: item.label
        }), _jsx(_CardHeader2.default, {
          className: classes.title,
          title: item.label,
          subheader: Math.round(item.calories) + ' Cal / Yields ' + item.yield
        }), _jsx(_CardContent2.default, {}, void 0, _jsx(_Typography2.default, {
          component: 'p'
        }, void 0, _ref2, item.dietLabels.map(function (health) {
          return '' + health;
        }).join(', '), _ref3, _ref4, item.healthLabels.map(function (health) {
          return '' + health;
        }).join(', '), _ref5, _jsx(_Link2.default, {
          href: item.url
        }, void 0, 'Check out this recipe'))), _jsx(_CardActions2.default, {
          className: classes.actions,
          disableActionSpacing: true
        }, void 0, _ref6, _jsx(_IconButton2.default, {
          'aria-label': 'View nutrition details',
          onClick: _this5.handleOpen
        }, void 0, _ref7), _jsx(_IconButton2.default, {
          className: (0, _classnames3.default)(classes.expand, _defineProperty({}, classes.expandOpen, _this5.state.expanded)),
          onClick: _this5.handleExpandClick,
          'aria-expanded': _this5.state.expanded,
          'aria-label': 'Show more'
        }, void 0, _ref8)), _jsx(_Collapse2.default, {
          'in': _this5.state.expanded,
          timeout: 'auto',
          unmountOnExit: true
        }, void 0, _jsx(_CardContent2.default, {
          className: classes.content
        }, void 0, _ref9, _jsx(_Typography2.default, {}, void 0, _jsx('ul', {}, void 0, item.ingredientLines.map(function (ingredient, i) {
          return _jsx(_Typography2.default, {
            paragraph: true
          }, i, _jsx('li', {}, void 0, ingredient));
        })))))));
      })), _jsx(_Modal2.default, {
        'aria-labelledby': 'simple-modal-title',
        'aria-describedby': 'simple-modal-description',
        open: this.state.open,
        onClose: this.handleClose
      }, void 0, _jsx('div', {
        style: getModalStyle(),
        className: classes.paper
      }, void 0, _jsx(_Typography2.default, {
        variant: 'h6',
        id: 'modal-title'
      }, void 0, this.state.populateModal), _ref10)));
    }
  }]);

  return RecipeReviewCard;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

exports.default = (0, _compose2.default)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps))(RecipeReviewCard);

/***/ })

};;