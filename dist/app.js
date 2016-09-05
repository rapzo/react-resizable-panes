webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(30);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _app = __webpack_require__(163);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('root'));

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

	var _border = __webpack_require__(169);

	var _border2 = _interopRequireDefault(_border);

	var _store2 = __webpack_require__(173);

	var _actions = __webpack_require__(170);

	var _actions2 = _interopRequireDefault(_actions);

	var _style = __webpack_require__(181);

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

	// calculates the initial state based on the window size
	var initialState = function initialState(size) {
	  return {
	    rows: [{
	      panes: defaults.panes,
	      borders: defaults.borders
	    }],
	    size: size
	  };
	};

	// helper so math is not spreaded all around
	var resize = function resize(width) {
	  return {
	    border: defaults.borderSize,
	    pane: (width - defaults.borders * defaults.borderSize) / defaults.panes,
	    width: width
	  };
	};

	// reference for the initial, unpainted window state
	var state = initialState(resize(window.innerWidth));

	// sets up the state machine

	var _store = (0, _store2.store)(state);

	var dispatcher = _store.dispatcher;
	var stores = _store.stores;

	/**
	 * Application container responsible for application wide events, such as
	 * controlling the panes and borders store and dom level events such as
	 * window resize and keyboard events
	 */

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

	    _this.state = _extends({
	      items: stores
	    }, state);
	    return _this;
	  }

	  /**
	   * Registers dom events to component state update actions
	   */


	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      window.addEventListener('resize', function () {
	        return _this2.handleResize();
	      });
	      document.addEventListener('keydown', function (e) {
	        return _this2.handleKeyDown(e);
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
	        case 88:
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
	      var store = this.state.items[0];
	      var items = store.items;


	      return _react2.default.createElement(
	        'section',
	        { className: _style2.default.panes },
	        items.map(function (item, i) {
	          return i % 2 === 0 ? _react2.default.createElement(_pane2.default, { key: i, dispatch: dispatcher.dispatch.bind(dispatcher), trigger: store.addTrigger.bind(store), release: store.removeTrigger.bind(store), pane: item }) : _react2.default.createElement(_border2.default, { key: i, dispatch: dispatcher.dispatch.bind(dispatcher), trigger: store.addTrigger.bind(store), release: store.removeTrigger.bind(store), border: item });
	        })
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

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

	var _style = __webpack_require__(165);

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
	      hidden: false,
	      width: props.pane.width
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

	      var _props = this.props;
	      var pane = _props.pane;
	      var trigger = _props.trigger;


	      document.addEventListener('keydown', function (e) {
	        return _this2.handleKeyDown(e);
	      });

	      trigger(pane.id, function (payload) {
	        return _this2.handleUpdate(payload);
	      });
	    }

	    /**
	     * Unregisters the previous registered triggers
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var _this3 = this;

	      var _props2 = this.props;
	      var pane = _props2.pane;
	      var release = _props2.release;


	      document.removeEventListener('keydown', function (e) {
	        return _this3.handleKeyDown(e);
	      });

	      release(pane.id, function (payload) {
	        return _this3.handleUpdate(payload);
	      });
	    }

	    /**
	     * Handler method for dealing with keyboard interaction
	     * Identifies if the proper select combination was produced altering its state
	     */

	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(e) {
	      if (!this.state.hover || !e.ctrlKey) return;

	      // `r` key
	      if (e.keyCode === 72) {
	        e.preventDefault();

	        this.setState({
	          selected: !this.state.selected
	        });
	      }
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
	    key: 'handleOut',
	    value: function handleOut() {
	      this.setState({
	        hover: false
	      });
	    }

	    /**
	     * Handler function triggered by the store to create a state update and component
	     * re-render
	     */

	  }, {
	    key: 'handleUpdate',
	    value: function handleUpdate(state) {
	      this.setState(state);
	    }

	    /**
	     * Component method that renders it to the dom tree
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var pane = this.props.pane;
	      var _state = this.state;
	      var selected = _state.selected;
	      var width = _state.width;

	      var styles = {
	        width: width + 'px',
	        background: selected ? 'green' : 'red',
	        display: pane.hidden ? 'none' : 'block'
	      };

	      return _react2.default.createElement(
	        'div',
	        {
	          style: styles,
	          className: _style2.default.pane,
	          onMouseEnter: this.handleEnter.bind(this),
	          onMouseOut: this.handleOut.bind(this)
	        },
	        _react2.default.createElement(
	          'ul',
	          null,
	          _react2.default.createElement(
	            'li',
	            null,
	            'Mouse hover: ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              String(this.state.hover)
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            'Width: ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              styles.width
	            )
	          )
	        )
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

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(166);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
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

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, ".pane___G2bQp {\n  background: #eee;\n  height: 100%;\n  float: left;\n}\n", "", {"version":3,"sources":["/./components/pane/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,aAAa;EACb,YAAY;CACb","file":"style.css","sourcesContent":[".pane {\n  background: #eee;\n  height: 100%;\n  float: left;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"pane": "pane___G2bQp"
	};

/***/ },

/***/ 167:
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

/***/ 168:
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

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _actions = __webpack_require__(170);

	var _actions2 = _interopRequireDefault(_actions);

	var _style = __webpack_require__(171);

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
	   * Adds proper state update and re-render trigger to the store
	   */


	  _createClass(Border, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var _props = this.props;
	      var border = _props.border;
	      var trigger = _props.trigger;


	      trigger(border.id, function (payload) {
	        return _this2.handleUpdate(payload);
	      });
	    }

	    /**
	     * Unregisters the previous registered triggers
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var _this3 = this;

	      var _props2 = this.props;
	      var border = _props2.border;
	      var release = _props2.release;


	      release(border.id, function (payload) {
	        return _this3.handleUpdate(payload);
	      });
	    }

	    /**
	     * Action called by the store that create a component render
	     * @type {Object} the state produced by the store
	     */

	  }, {
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
	      this.setState({ grabbed: true, x: e.target.offsetLeft });
	    }

	    /**
	     * Handler method to help with the mouse-up event
	     * Updates the state with the `grabbed` flag off
	     */

	  }, {
	    key: 'handleRelease',
	    value: function handleRelease(e) {
	      this.setState({ grabbed: false, x: e.target.offsetLeft });
	    }

	    /**
	     * Handler method that is called on every drag event emitted by the browser
	     * Dispatches the action `RESIZE` to the store
	     */

	  }, {
	    key: 'handleDrag',
	    value: function handleDrag(e) {
	      var _props3 = this.props;
	      var border = _props3.border;
	      var dispatch = _props3.dispatch;

	      // clears some crazy mouse hops where position is nowhere to be seen

	      if (e.clientX <= 0) return;

	      dispatch((0, _actions2.default)(_actions.RESIZE, {
	        id: border.id,
	        offset: e.clientX
	      }));
	    }

	    /**
	     * Handler method that flags the drag start
	     */

	  }, {
	    key: 'handleDragStart',
	    value: function handleDragStart() {
	      this.setState({
	        dragging: true
	      });
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
	      var _props4 = this.props;
	      var border = _props4.border;
	      var dispatch = _props4.dispatch;


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
	      var border = this.props.border;

	      var styles = {
	        width: border.width + 'px',
	        display: border.hidden ? 'none' : 'block'
	      };

	      return _react2.default.createElement('div', {
	        style: styles,
	        className: _style2.default.border,
	        onMouseDown: this.handleGrab.bind(this),
	        onMouseUp: this.handleRelease.bind(this),
	        onDrag: this.handleDrag.bind(this),
	        onDragStart: this.handleDragStart.bind(this),
	        onDragEnd: this.handleDragEnd.bind(this)
	      });
	    }
	  }]);

	  return Border;
	}(_react.Component);

	exports.default = Border;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var HIDE_LEFT = exports.HIDE_LEFT = 'hide left';
	var HIDE_RIGHT = exports.HIDE_RIGHT = 'hide right';
	var RESIZE = exports.RESIZE = 'resize';
	var LOCK = exports.LOCK = 'lock';

	exports.default = function (action) {
	  var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  return {
	    type: action,
	    payload: payload
	  };
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "actions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(172);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
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

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, ".border___11ASY {\n  position: relative;\n  background: black;\n  height: 100%;\n  float: left;\n  cursor: col-resize;\n}\n", "", {"version":3,"sources":["/./components/border/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,mBAAmB;CACpB","file":"style.css","sourcesContent":[".border {\n  position: relative;\n  background: black;\n  height: 100%;\n  float: left;\n  cursor: col-resize;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"border": "border___11ASY"
	};

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.store = undefined;

	var _flux = __webpack_require__(174);

	var _pane = __webpack_require__(177);

	var _pane2 = _interopRequireDefault(_pane);

	var _border = __webpack_require__(178);

	var _border2 = _interopRequireDefault(_border);

	var _row = __webpack_require__(179);

	var _row2 = _interopRequireDefault(_row);

	var _actions = __webpack_require__(170);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = exports.store = function store(setup) {
	  var stores = setup.rows.map(function (row) {
	    return new _row2.default([new _pane2.default(0, { name: 'left', width: setup.size.pane }), new _border2.default(1, { name: 'left', width: setup.size.border }), new _pane2.default(2, { name: 'main', width: setup.size.pane }), new _border2.default(3, { name: 'right', width: setup.size.border }), new _pane2.default(4, { name: 'right', width: setup.size.pane })]);
	  });

	  var limit = {
	    low: setup.size.width * 0.1,
	    high: setup.size.width * 0.7
	  };

	  var actions = function actions(action) {
	    var type = action.type;
	    var payload = action.payload;
	    var items = stores[0].items;

	    var left = void 0,
	        right = void 0,
	        main = void 0,
	        border = void 0;

	    switch (type) {
	      case _actions.HIDE_LEFT:
	        left = items[0];
	        border = items[1];
	        right = items[2];

	        if (!left.hidden) {
	          left.hidden = true;
	          border.hidden = true;
	          right.width += left.width + border.width;
	        } else {
	          left.hidden = false;
	          border.hidden = false;
	          right.width -= left.width + border.width;
	        }

	        for (var i = 0; i < 2; i++) {
	          stores[0].trigger(i, { hidden: left.hidden });
	        }
	        stores[0].trigger(right.id, { width: right.width });

	        return;

	      case _actions.HIDE_RIGHT:
	        left = items[items.length - 3];
	        border = items[items.length - 2];
	        right = items[items.length - 1];

	        if (!right.hidden) {
	          right.hidden = true;
	          border.hidden = true;
	          left.width += right.width + border.width;
	        } else {
	          right.hidden = false;
	          border.hidden = false;
	          left.width -= right.width + border.width;
	        }

	        for (var _i = 1; _i < 3; _i++) {
	          stores[0].trigger(items.length - _i, { hidden: right.hidden });
	        }
	        stores[0].trigger(left.id, { width: left.width });

	        return;

	      case _actions.RESIZE:
	        left = items[payload.id - 1];
	        right = items[payload.id + 1];
	        border = items[payload.id];

	        var offset = payload.offset - items.slice(0, payload.id).reduce(function (offset, item) {
	          return offset += item.width;
	        }, 0);

	        left.width += offset;
	        right.width -= offset;

	        if (left.width <= limit.low || left.width >= limit.high) return;
	        if (right.width <= limit.low || right.width >= limit.high) return;

	        stores[0].trigger(payload.id - 1, { width: left.width });
	        stores[0].trigger(payload.id + 1, { width: right.width });

	        return;

	      case LOCK:
	        return;

	      default:
	        return;
	    }
	  };

	  var dispatcher = new _flux.Dispatcher();

	  dispatcher.register(actions);

	  return {
	    dispatcher: dispatcher,

	    stores: stores
	  };
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(175);


/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(176);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ?  false ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ?  false ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ?  false ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ?  false ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ?  false ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

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

	    _classCallCheck(this, Pane);

	    this.id = id;
	    this.name = name;
	    this.width = width;
	    this.selected = selected;
	    this.hidden = hidden;
	    this.hover = false;
	  }

	  _createClass(Pane, [{
	    key: 'toString',
	    value: function toString() {
	      return id;
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

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Border = function () {
	  function Border(id, _ref) {
	    var _ref$name = _ref.name;
	    var name = _ref$name === undefined ? '' : _ref$name;
	    var _ref$x = _ref.x;
	    var x = _ref$x === undefined ? 0 : _ref$x;
	    var _ref$width = _ref.width;
	    var width = _ref$width === undefined ? 6 : _ref$width;
	    var _ref$hidden = _ref.hidden;
	    var hidden = _ref$hidden === undefined ? false : _ref$hidden;

	    _classCallCheck(this, Border);

	    this.id = id;
	    this.name = name;
	    this.x = x;
	    this.hidden = false;
	    this.width = width;
	  }

	  _createClass(Border, [{
	    key: 'toString',
	    value: function toString() {
	      return this.id;
	    }
	  }]);

	  return Border;
	}();

	exports.default = Border;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "border.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/ruilima/dev/12FtTS/react-resizable-panes/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(180);

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
	    key: 'getItems',
	    value: function getItems() {
	      return this.items;
	    }
	  }, {
	    key: 'trigger',
	    value: function trigger(e, payload) {
	      this.emit(e, payload);
	    }
	  }, {
	    key: 'addTrigger',
	    value: function addTrigger(e, callback) {
	      this.on(e, callback);
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
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(182);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
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

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "\nhtml {\n  min-width: 100%;\n  min-height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-width: 100%;\n  min-height: 100%;\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #333;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -ms-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  font-weight: 300;\n  overflow: none;\n}\n\n.panes___2f49f {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  clear: both;\n}\n\n.panes___2f49f ul {\n  list-style: none;\n  padding: 5px 20px;\n}\n\n.panes___2f49f ul li {\n  padding: 5px 0;\n}\n\n.panes___2f49f h1 {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  -ms-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n", "", {"version":3,"sources":["/./containers/app/style.css"],"names":[],"mappings":";AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,UAAU;EACV,WAAW;CACZ;;AAED;EACE,gBAAgB;EAChB,iBAAiB;EACjB,0DAA0D;EAC1D,mBAAmB;EACnB,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,oCAAoC;EACpC,iCAAiC;EACjC,gCAAgC;EAChC,4BAA4B;EAC5B,iBAAiB;EACjB,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,YAAY;CACb;;AAED;EACE,iBAAiB;EACjB,kBAAkB;CACnB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,2CAA2C;EAC3C,wCAAwC;EACxC,uCAAuC;EACvC,mCAAmC;CACpC","file":"style.css","sourcesContent":["\nhtml {\n  min-width: 100%;\n  min-height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-width: 100%;\n  min-height: 100%;\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #333;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -ms-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  font-weight: 300;\n  overflow: none;\n}\n\n.panes {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  clear: both;\n}\n\n.panes ul {\n  list-style: none;\n  padding: 5px 20px;\n}\n\n.panes ul li {\n  padding: 5px 0;\n}\n\n.panes h1 {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  -ms-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"panes": "panes___2f49f"
	};

/***/ }

});