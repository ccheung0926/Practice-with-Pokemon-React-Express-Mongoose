webpackHotUpdate(0,{

/***/ 244:
/*!*****************************************!*\
  !*** ./src/client/app/AppComponent.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 189);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 245);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AppComponent = function (_React$Component) {
	  _inherits(AppComponent, _React$Component);
	
	  function AppComponent() {
	    _classCallCheck(this, AppComponent);
	
	    return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
	  }
	
	  _createClass(AppComponent, [{
	    key: 'navigate',
	    value: function navigate() {
	      this.props.router.push("/");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Pokemon Generation 1'
	        ),
	        this.props.children,
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/' },
	            'home'
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: 'pokedex' },
	            'see all Pokemons'
	          )
	        )
	      );
	    }
	  }]);
	
	  return AppComponent;
	}(_react2.default.Component);
	// function Repeat(props) {
	//   let items = [];
	//   for (let i = 0; i < props.numTimes; i++) {
	//     console.log(props);
	//     items.push(props.children(i));
	//   }
	//   return <div>{items}</div>;
	// }
	
	// function ListOfTenThings() {
	//   return (
	//     <Repeat numTimes={10}>
	//       {(index) => <div key={index}>This is item {index} in the list</div>}
	//     </Repeat>
	//   );
	// }
	// render(<App/>, document.getElementById('app'));
	
	
	exports.default = AppComponent;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 280); if (makeExportsHot(module, __webpack_require__(/*! react */ 98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "AppComponent.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }

})
//# sourceMappingURL=0.2280724c824ff6641661.hot-update.js.map