webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(30);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _row = __webpack_require__(163);

	var _row2 = _interopRequireDefault(_row);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_row2.default, null), document.getElementById('root'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pane = __webpack_require__(164);

	var _pane2 = _interopRequireDefault(_pane);

	var _store = __webpack_require__(173);

	var _actions = __webpack_require__(165);

	var _actions2 = _interopRequireDefault(_actions);

	var _style = __webpack_require__(180);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// default properties for this test case
	var defaults = {
	  panes: 3,
	  borders: 2,
	  borderSize: 6
	};

	// helper so math is not spreaded all around
	var resize = function resize(width) {
	  return {
	    border: defaults.borderSize,
	    pane: width / defaults.panes,
	    width: width
	  };
	};

	// sets up the state machine

	var _RowStore = (0, _store.RowStore)(resize(window.innerWidth));

	var dispatcher = _RowStore.dispatcher;
	var store = _RowStore.store;

	/**
	 * Application container responsible for application wide events, such as
	 * controlling the panes and borders store and dom level events such as
	 * window resize and keyboard events
	 */

	var Row = function (_Component) {
	  _inherits(Row, _Component);

	  function Row() {
	    _classCallCheck(this, Row);

	    var _this = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this));

	    _this.state = _extends({}, Row.getState());
	    return _this;
	  }

	  _createClass(Row, [{
	    key: 'componentDidMount',


	    /**
	     * Registers dom events to component state update actions
	     */
	    value: function componentDidMount() {
	      var _this2 = this;

	      window.addEventListener('resize', function () {
	        return _this2.handleResize();
	      });
	      document.addEventListener('keydown', function (e) {
	        return _this2.handleKeyDown(e);
	      });

	      store.addTrigger(function () {
	        return _this2.handleUpdate();
	      });
	    }

	    /**
	     * Unregisters dom events to component state update actions
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var _this3 = this;

	      window.removeEventListener('resize', function () {
	        return _this3.handleResize();
	      });
	      document.removeEventListener('keydown', function (e) {
	        return _this3.handleKeyDown(e);
	      });
	    }
	  }, {
	    key: 'handleUpdate',
	    value: function handleUpdate() {
	      this.setState(Row.getState());
	    }

	    /**
	     * Handler method that triggers state updates when the window is resized
	     */

	  }, {
	    key: 'handleResize',
	    value: function handleResize() {
	      this.setState({
	        size: resize(window.innerWidth)
	      });
	    }

	    /**
	     * Hanlder method that parses keyboard events into proper dispatcher calls
	     */

	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(e) {
	      if (!e.ctrlKey) return;

	      e.preventDefault();

	      switch (e.keyCode) {
	        case 76:
	          dispatcher.dispatch((0, _actions2.default)(_actions.HIDE_LEFT));
	          return;
	        case 82:
	          dispatcher.dispatch((0, _actions2.default)(_actions.HIDE_RIGHT));
	          return;
	        default:
	          return;
	      }
	    }

	    /**
	     * Component render method
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var items = this.state.items;


	      return _react2.default.createElement(
	        'section',
	        { className: _style2.default.panes },
	        items.map(function (item, i) {
	          return _react2.default.createElement(_pane2.default, {
	            key: i,
	            pane: item,
	            id: item.id,
	            width: item.width,
	            hidden: item.hidden,
	            dispatch: dispatcher.dispatch.bind(dispatcher)
	          });
	        })
	      );
	    }
	  }], [{
	    key: 'getState',
	    value: function getState() {
	      return {
	        items: store.items
	      };
	    }
	  }]);

	  return Row;
	}(_react.Component);

	exports.default = Row;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _actions = __webpack_require__(165);

	var _actions2 = _interopRequireDefault(_actions);

	var _border = __webpack_require__(166);

	var _border2 = _interopRequireDefault(_border);

	var _style = __webpack_require__(171);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Class for the pane component
	 * The pane component should have a keyboard handler event to trigger selection
	 * and deselection when triggered.
	 * The pane should update its width when a border is moved
	 * The pane should hide itself when the parent container receives a hide keyboard
	 * event
	 */
	var Pane = function (_Component) {
	  _inherits(Pane, _Component);

	  /**
	   * Populates the internal state and properties from parent container
	   */
	  function Pane(props) {
	    _classCallCheck(this, Pane);

	    var _this = _possibleConstructorReturn(this, (Pane.__proto__ || Object.getPrototypeOf(Pane)).call(this, props));

	    _this.state = {
	      hover: false,
	      selected: false,
	      hidden: props.hidden,
	      width: props.width
	    };
	    return _this;
	  }

	  /**
	   * Adds proper state update and re-render trigger to the store
	   */


	  _createClass(Pane, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      document.addEventListener('keydown', function (e) {
	        return _this2.handleKeyDown(e);
	      });
	    }

	    /**
	     * Unregisters the previous registered triggers
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var _this3 = this;

	      document.removeEventListener('keydown', function (e) {
	        return _this3.handleKeyDown(e);
	      });
	    }
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(e) {
	      if (!e.ctrlKey) return;

	      e.preventDefault();

	      if (e.keyCode !== 72) return;

	      if (!this.state.hover) return;

	      this.setState({
	        selected: !this.state.selected
	      });
	    }

	    /**
	     * Handler method for dealing when the mouse enters the pane, setting its state
	     * to identify the mouse over event
	     */

	  }, {
	    key: 'handleEnter',
	    value: function handleEnter() {
	      // if already there - for changing windows situations that would trigger a
	      // re-render
	      if (this.state.hover) return;

	      this.setState({
	        hover: true
	      });
	    }

	    /**
	     * Handler method for dealing when the mouse leaves the pane, setting its state
	     * to identify the mouse out event
	     */

	  }, {
	    key: 'handleLeave',
	    value: function handleLeave() {
	      this.setState({
	        hover: false
	      });
	    }

	    /**
	     * Handler method that is called on every drag event emitted by the browser
	     * Dispatches the action `RESIZE` to the store
	     */

	  }, {
	    key: 'handleDrag',
	    value: function handleDrag(e) {
	      var dispatch = this.props.dispatch;

	      // clears some crazy mouse hops where position is nowhere to be seen

	      if (e.clientX <= 0) return;

	      dispatch((0, _actions2.default)(_actions.RESIZE, {
	        offset: e.clientX
	      }));
	    }

	    /**
	     * Handler method that flags the drop of the draggable component
	     * Dispatches the action `RESIZE` to the store to update with the
	     * latest coordinates for the leftmost and rightmost panes
	     * Flags the end of the drag event
	     */

	  }, {
	    key: 'handleDragEnd',
	    value: function handleDragEnd(e) {
	      var _props = this.props;
	      var border = _props.border;
	      var dispatch = _props.dispatch;


	      dispatch((0, _actions2.default)(_actions.RESIZE, {
	        id: border.id,
	        offset: e.clientX
	      }));

	      this.setState({
	        dragging: false
	      });
	    }

	    /**
	     * Component method that renders it to the dom tree
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var id = _props2.id;
	      var dispatch = _props2.dispatch;
	      var pane = _props2.pane;
	      var _state = this.state;
	      var width = _state.width;
	      var selected = _state.selected;

	      var styles = {
	        width: pane.width + 'px',
	        background: selected ? 'red' : 'green',
	        display: pane.hidden ? 'none' : 'block'
	      };

	      var border = pane.border ? _react2.default.createElement(_border2.default, { className: _style2.default.border, id: id, width: width, dispatch: dispatch }) : null;

	      return _react2.default.createElement(
	        'div',
	        {
	          style: styles,
	          className: _style2.default.pane,
	          onMouseEnter: this.handleEnter.bind(this),
	          onMouseLeave: this.handleLeave.bind(this)
	        },
	        border
	      );
	    }
	  }]);

	  return Pane;
	}(_react.Component);

	exports.default = Pane;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var HIDE_LEFT = exports.HIDE_LEFT = 'hide left';
	var HIDE_RIGHT = exports.HIDE_RIGHT = 'hide right';
	var RESIZE = exports.RESIZE = 'resize';

	exports.default = function (action) {
	  var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  return {
	    type: action,
	    payload: payload
	  };
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "actions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _actions = __webpack_require__(165);

	var _actions2 = _interopRequireDefault(_actions);

	var _style = __webpack_require__(167);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Class for the border component
	 * The border component should signal resize events for the adjacent panes
	 * The border component also should be hidden when the leftmost or the
	 * rightmost panes are triggered to be hidden
	 */
	var Border = function (_Component) {
	  _inherits(Border, _Component);

	  /**
	   * Populates the internal state and properties from parent container
	   */
	  function Border(props) {
	    _classCallCheck(this, Border);

	    var _this = _possibleConstructorReturn(this, (Border.__proto__ || Object.getPrototypeOf(Border)).call(this, props));

	    _this.state = {
	      position: 'relative',
	      x: 0,
	      moved: false,
	      locked: false,
	      grabbed: false,
	      hidden: false
	    };
	    return _this;
	  }

	  /**
	   * Action called by the store that create a component render
	   * @type {Object} the state produced by the store
	   */


	  _createClass(Border, [{
	    key: 'handleUpdate',
	    value: function handleUpdate(state) {
	      this.setState(state);
	    }

	    /**
	     * Handler method to help with the mouse-down event
	     * Updates the state with the `grabbed` flag on
	     */

	  }, {
	    key: 'handleGrab',
	    value: function handleGrab(e) {
	      var _this2 = this;

	      this.setState({ grabbed: true, x: e.target.offsetLeft });
	      document.addEventListener('mousemove', function (e) {
	        return _this2.handleDrag(e);
	      });
	      document.addEventListener('mouseup', function (e) {
	        return _this2.handleRelease(e);
	      });
	    }

	    /**
	     * Handler method to help with the mouse-up event
	     * Updates the state with the `grabbed` flag off
	     */

	  }, {
	    key: 'handleRelease',
	    value: function handleRelease(e) {
	      var _this3 = this;

	      var _props = this.props;
	      var id = _props.id;
	      var dispatch = _props.dispatch;


	      dispatch((0, _actions2.default)(_actions.RESIZE, {
	        id: id,
	        offset: e.clientX
	      }));

	      this.setState({
	        grabbed: false,
	        dragging: false,
	        x: e.target.offsetLeft
	      });

	      document.removeEventListener('mousemove', function (e) {
	        return _this3.handleDrag(e);
	      });
	      document.removeEventListener('mouseup', function (e) {
	        return _this3.handleRelease(e);
	      });
	    }

	    /**
	     * Handler method that is called on every drag event emitted by the browser
	     * Dispatches the action `RESIZE` to the store
	     */

	  }, {
	    key: 'handleDrag',
	    value: function handleDrag(e) {
	      e.preventDefault();

	      var _props2 = this.props;
	      var id = _props2.id;
	      var dispatch = _props2.dispatch;
	      var width = _props2.width;


	      if (!this.state.grabbed) return;

	      // clears some crazy mouse hops where position is nowhere to be seen
	      if (e.clientX <= 0) return;

	      dispatch((0, _actions2.default)(_actions.RESIZE, {
	        id: id,
	        offset: e.clientX,
	        width: width
	      }));
	    }

	    /**
	     * Component method that renders it to the dom tree
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', {
	        className: _style2.default.border,
	        onMouseDown: this.handleGrab.bind(this),
	        onMouseOver: function onMouseOver(e) {
	          return e.preventDefault();
	        },
	        onMouseOut: function onMouseOut(e) {
	          return e.preventDefault();
	        }
	      });
	    }
	  }]);

	  return Border;
	}(_react.Component);

	exports.default = Border;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(168);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(170)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(169)();
	// imports


	// module
	exports.push([module.id, ".border___11ASY {\n  position: relative;\n  background: black;\n  height: 100%;\n  float: left;\n  width: 6px;\n  cursor: col-resize;\n}\n", "", {"version":3,"sources":["/./components/border/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,WAAW;EACX,mBAAmB;CACpB","file":"style.css","sourcesContent":[".border {\n  position: relative;\n  background: black;\n  height: 100%;\n  float: left;\n  width: 6px;\n  cursor: col-resize;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"border": "border___11ASY"
	};

/***/ },

/***/ 169:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(172);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(170)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(169)();
	// imports


	// module
	exports.push([module.id, ".pane___G2bQp {\n  background: green;\n  height: 100%;\n  float: left;\n  overflow: auto;\n}\n", "", {"version":3,"sources":["/./components/pane/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,eAAe;CAChB","file":"style.css","sourcesContent":[".pane {\n  background: green;\n  height: 100%;\n  float: left;\n  overflow: auto;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"pane": "pane___G2bQp"
	};

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RowStore = undefined;

	var _flux = __webpack_require__(174);

	var _pane = __webpack_require__(177);

	var _pane2 = _interopRequireDefault(_pane);

	var _row = __webpack_require__(178);

	var _row2 = _interopRequireDefault(_row);

	var _actions = __webpack_require__(165);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RowStore = exports.RowStore = function RowStore(setup) {
	  var store = new _row2.default([new _pane2.default(0, { name: 'left', width: setup.pane, border: false }), new _pane2.default(1, { name: 'main', width: setup.pane }), new _pane2.default(2, { name: 'right', width: setup.pane })]);

	  var limit = {
	    low: setup.width * 0.1,
	    high: setup.width * 0.7
	  };

	  var actions = function actions(action) {
	    var type = action.type;
	    var payload = action.payload;

	    var left = void 0;
	    var right = void 0;

	    switch (type) {
	      case _actions.HIDE_LEFT:
	        left = store.items[0];
	        right = store.items[1];

	        if (!left.hidden) {
	          left.hidden = true;
	          right.width += left.width;
	          right.border = false;
	        } else {
	          left.hidden = false;
	          right.border = true;
	          right.width -= left.width;
	        }

	        store.trigger([{
	          id: left.id,
	          hidden: left.hidden
	        }, {
	          id: right.id,
	          width: right.width
	        }]);

	        return;

	      case _actions.HIDE_RIGHT:
	        right = store.items[store.items.length - 1];
	        left = store.items[store.items.length - 2];

	        if (!right.hidden) {
	          right.hidden = true;
	          left.width += right.width;
	        } else {
	          right.hidden = false;
	          left.width -= right.width;
	        }

	        store.trigger([{
	          id: left.id,
	          width: left.width
	        }, {
	          id: right.id,
	          hidden: right.hidden
	        }]);

	        return;

	      case _actions.RESIZE:
	        left = store.items[payload.id - 1];
	        right = store.items[payload.id];

	        var offset = payload.offset - store.items.slice(0, payload.id).reduce(function (o, item) {
	          return o += item.width;
	        }, 0);

	        if (left.width + offset <= limit.low || left.width + offset >= limit.high) return;
	        if (right.width - offset <= limit.low || right.width - offset >= limit.high) return;

	        left.width += offset;
	        right.width -= offset;

	        store.trigger([{
	          id: left.id,
	          width: left.width
	        }, {
	          id: right.id,
	          width: right.width
	        }]);

	        return;
	      default:
	        return;
	    }
	  };

	  var dispatcher = new _flux.Dispatcher();

	  dispatcher.register(actions);

	  return {
	    dispatcher: dispatcher,

	    store: store
	  };
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Pane = function () {
	  function Pane(id, _ref) {
	    var _ref$name = _ref.name;
	    var name = _ref$name === undefined ? '' : _ref$name;
	    var _ref$width = _ref.width;
	    var width = _ref$width === undefined ? 0 : _ref$width;
	    var _ref$selected = _ref.selected;
	    var selected = _ref$selected === undefined ? false : _ref$selected;
	    var _ref$hidden = _ref.hidden;
	    var hidden = _ref$hidden === undefined ? false : _ref$hidden;
	    var _ref$border = _ref.border;
	    var border = _ref$border === undefined ? true : _ref$border;

	    _classCallCheck(this, Pane);

	    this.id = id;
	    this.name = name;
	    this.width = width;
	    this.selected = selected;
	    this.hidden = hidden;
	    this.hover = false;
	    this.border = border;
	  }

	  _createClass(Pane, [{
	    key: 'toString',
	    value: function toString() {
	      return this.id;
	    }
	  }]);

	  return Pane;
	}();

	exports.default = Pane;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "pane.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(179);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Row = function (_EventEmitter) {
	  _inherits(Row, _EventEmitter);

	  function Row(items) {
	    _classCallCheck(this, Row);

	    var _this = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this));

	    _this.items = items;
	    return _this;
	  }

	  _createClass(Row, [{
	    key: 'trigger',
	    value: function trigger() {
	      var payload = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      this.emit('row', payload);
	    }
	  }, {
	    key: 'addTrigger',
	    value: function addTrigger(callback) {
	      this.on('row', callback);
	    }
	  }, {
	    key: 'removeTrigger',
	    value: function removeTrigger(e, cb) {
	      this.removeListener(e, cb);
	    }
	  }]);

	  return Row;
	}(_events.EventEmitter);

	exports.default = Row;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "row.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(181);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(170)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(169)();
	// imports


	// module
	exports.push([module.id, "\nhtml {\n  min-width: 100%;\n  min-height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-width: 100%;\n  min-height: 100%;\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #333;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -ms-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  font-weight: 300;\n  overflow: none;\n  user-select: none;\n}\n\n.panes___3I7yl {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  clear: both;\n}\n\n.panes___3I7yl ul {\n  list-style: none;\n  padding: 5px 20px;\n}\n\n.panes___3I7yl ul li {\n  padding: 5px 0;\n}\n\n.panes___3I7yl h1 {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  -ms-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n", "", {"version":3,"sources":["/./containers/row/style.css"],"names":[],"mappings":";AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,UAAU;EACV,WAAW;CACZ;;AAED;EACE,gBAAgB;EAChB,iBAAiB;EACjB,0DAA0D;EAC1D,mBAAmB;EACnB,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,oCAAoC;EACpC,iCAAiC;EACjC,gCAAgC;EAChC,4BAA4B;EAC5B,iBAAiB;EACjB,eAAe;EACf,kBAAkB;CACnB;;AAED;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,YAAY;CACb;;AAED;EACE,iBAAiB;EACjB,kBAAkB;CACnB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,2CAA2C;EAC3C,wCAAwC;EACxC,uCAAuC;EACvC,mCAAmC;CACpC","file":"style.css","sourcesContent":["\nhtml {\n  min-width: 100%;\n  min-height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-width: 100%;\n  min-height: 100%;\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #333;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -ms-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  font-weight: 300;\n  overflow: none;\n  user-select: none;\n}\n\n.panes {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  clear: both;\n}\n\n.panes ul {\n  list-style: none;\n  padding: 5px 20px;\n}\n\n.panes ul li {\n  padding: 5px 0;\n}\n\n.panes h1 {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  -ms-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"panes": "panes___3I7yl"
	};

/***/ }

});