/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var ReactRouter = __webpack_require__(3);

	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRoute;

	var App = __webpack_require__(4);
	var Home = __webpack_require__(5);
	var Llamas = __webpack_require__(6);

	ReactDOM.render(React.createElement(
	  Router,
	  null,
	  React.createElement(
	    Route,
	    { path: '/', component: App },
	    React.createElement(IndexRoute, { component: Home }),
	    React.createElement(Route, { path: 'llamas', component: Llamas })
	  )
	), document.getElementById('container'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(3);
	var IndexLink = ReactRouter.IndexLink;
	var Link = ReactRouter.Link;

	var App = React.createClass({
	  displayName: 'App',

	  render: function () {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h1',
	        null,
	        'Bahama Llama'
	      ),
	      React.createElement(
	        'ul',
	        { className: 'header' },
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            IndexLink,
	            { to: '/', activeClassName: 'active' },
	            'Home'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            Link,
	            { to: '/llamas', activeClassName: 'active' },
	            'Llamas'
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { id: 'content' },
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = App;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var Home = React.createClass({
	  displayName: 'Home',

	  render: function () {
	    return React.createElement(
	      'h2',
	      null,
	      'Home'
	    );
	  }
	});

	module.exports = Home;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var Llamas = React.createClass({
	  displayName: 'Llamas',

	  render: function () {
	    return React.createElement(
	      'h2',
	      null,
	      'Llamas'
	    );
	  }
	});

	module.exports = Llamas;

/***/ }
/******/ ]);