webpackHotUpdate(0,[
/* 0 */
/*!**********************************!*\
  !*** ./src/client/app/route.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(/*! react */ 98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 99);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 189);
	
	var _AppComponent = __webpack_require__(/*! ./AppComponent.jsx */ 244);
	
	var _AppComponent2 = _interopRequireDefault(_AppComponent);
	
	var _PokemonComponent = __webpack_require__(/*! ./PokemonComponent.jsx */ 283);
	
	var _PokemonComponent2 = _interopRequireDefault(_PokemonComponent);
	
	var _Pokedex = __webpack_require__(/*! ./Pokedex.jsx */ 284);
	
	var _Pokedex2 = _interopRequireDefault(_Pokedex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = document.getElementById('app');
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _AppComponent2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _PokemonComponent2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'pokedex', component: _Pokedex2.default })
	  )
	), app);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 280); if (makeExportsHot(module, __webpack_require__(/*! react */ 98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "route.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }
])
//# sourceMappingURL=0.94552b332177d535edbf.hot-update.js.map