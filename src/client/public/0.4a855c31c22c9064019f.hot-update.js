webpackHotUpdate(0,{

/***/ 284:
/*!************************************!*\
  !*** ./src/client/app/Pokedex.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(/*! axios */ 285);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Pokedex = function (_React$Component) {
	  _inherits(Pokedex, _React$Component);
	
	  function Pokedex(props) {
	    _classCallCheck(this, Pokedex);
	
	    // Set initial state
	    var _this = _possibleConstructorReturn(this, (Pokedex.__proto__ || Object.getPrototypeOf(Pokedex)).call(this, props));
	    // Pass props to parent class
	
	
	    _this.state = {
	      pokemons: []
	    };
	    _this.apiUrl = '/api/pokedex';
	    return _this;
	  }
	  //  Lifecycle method
	
	
	  _createClass(Pokedex, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      _axios2.default.get(this.apiUrl).then(function (res) {
	        var pokemons = res.data.pokemon;
	        _this2.setState({ pokemons: pokemons });
	      }).catch(function (error) {
	        console.error('axios error', error);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log(this.state.pokemons);
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Pokedex'
	        ),
	        _react2.default.createElement(
	          'ul',
	          null,
	          this.state.pokemons.map(function (item) {
	            return _react2.default.createElement('li', { key: item.name });
	          })
	        )
	      );
	    }
	    //           {this.state.posts.map(post =>
	    //   <li key={post.id}>{post.title}</li>
	    // )}
	
	    //           {this.state.data.map(pokemon =>
	    //   <li key={pokemon.name}></li>
	    // )}
	    // render () {
	    //       return (      
	    //         <div className="all">
	    //           Welcome
	    //         </div>
	    //     )
	    // }
	
	  }]);
	
	  return Pokedex;
	}(_react2.default.Component);
	
	exports.default = Pokedex;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 280); if (makeExportsHot(module, __webpack_require__(/*! react */ 98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Pokedex.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }

})
//# sourceMappingURL=0.4a855c31c22c9064019f.hot-update.js.map