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

	const React = __webpack_require__(1);
	const ReactDOM = __webpack_require__(2);
	const ReactRouter = __webpack_require__(3);

	const Router = ReactRouter.Router;
	const Route = ReactRouter.Route;
	const IndexRoute = ReactRouter.IndexRoute;

	// components
	const Container = __webpack_require__(4);
	const Home = __webpack_require__(7);
	const Llamas = __webpack_require__(8);
	const About = __webpack_require__(9);

	//jQuery plugins
	__webpack_require__(10);

	var llamas = ['sherriff_llama', 'suspicious_llama', 'canadian_llama', 'photogenic_llama', 'happy_llama', 'unhappy_llama', 'surfer_dude_llama', 'deep_llama'];

	ReactDOM.render(React.createElement(
	  Router,
	  null,
	  React.createElement(
	    Route,
	    { path: '/', component: Container },
	    React.createElement(IndexRoute, { component: Home }),
	    React.createElement(Route, { path: '/llamas', llamas: llamas, component: Llamas }),
	    React.createElement(Route, { path: '/about', component: About })
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

	const React = __webpack_require__(1);
	const ReactRouter = __webpack_require__(3);
	const IndexLink = ReactRouter.IndexLink;
	const Link = ReactRouter.Link;

	const Results = __webpack_require__(5);
	const helpers = __webpack_require__(6);

	var Container = React.createClass({
	  displayName: 'Container',

	  getInitialState: function () {
	    return { data: [] };
	  },
	  loadVotes() {
	    var url = '/votes';
	    $.ajax({
	      url: url,
	      type: 'get',
	      dataType: 'json',
	      cache: false,
	      success: data => {
	        this.setState({ data: data });
	      },
	      error: (xhr, status, err) => {
	        console.error(url, status, err.toString());
	      }
	    });
	  },
	  componentDidMount() {
	    helpers.initSmoothScroll();
	    this.loadVotes();
	    pollInterval = setInterval(this.loadVotes, 2000);
	  },
	  render() {
	    var topLinkStyle = { textAlign: 'right' };
	    return React.createElement(
	      'div',
	      { className: 'container col-12' },
	      React.createElement(
	        'ul',
	        { className: 'header' },
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            IndexLink,
	            { to: '/', activeClassName: 'active' },
	            'HOME'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            Link,
	            { to: '/llamas', activeClassName: 'active' },
	            'VOTE'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            Link,
	            { to: '/about', className: 'right', activeClassName: 'active' },
	            'ABOUT ME'
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { id: 'content' },
	        React.createElement(
	          'div',
	          { className: 'row' },
	          React.createElement(
	            'div',
	            { className: 'col-9' },
	            React.createElement(
	              'div',
	              { className: 'title' },
	              React.createElement(
	                'h1',
	                null,
	                'Bahama Llama 2017'
	              )
	            ),
	            this.props.children
	          ),
	          React.createElement(
	            'div',
	            { className: 'col-3 sidebar' },
	            React.createElement(Results, { data: this.state.data })
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: topLinkStyle },
	        React.createElement(
	          'a',
	          { href: '#content', id: 'top' },
	          'Back to Top'
	        )
	      )
	    );
	  }
	});

	module.exports = Container;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const React = __webpack_require__(1);
	const helpers = __webpack_require__(6);

	var Results = React.createClass({
	  displayName: "Results",

	  render() {
	    var voteRows = this.props.data.map(function (vote) {
	      var display = helpers.slugToDisplay(vote._id);
	      return React.createElement(
	        "tr",
	        { key: vote._id },
	        React.createElement(
	          "td",
	          null,
	          display
	        ),
	        React.createElement(
	          "td",
	          { className: "number-field" },
	          vote.count
	        )
	      );
	    });
	    return React.createElement(
	      "div",
	      { className: "results" },
	      React.createElement(
	        "h3",
	        { className: "title-3" },
	        "Polls"
	      ),
	      React.createElement(
	        "table",
	        { id: "standings" },
	        React.createElement(
	          "thead",
	          null,
	          React.createElement(
	            "tr",
	            null,
	            React.createElement(
	              "th",
	              null,
	              "Llama in Question"
	            ),
	            React.createElement(
	              "th",
	              null,
	              "Votes"
	            )
	          )
	        ),
	        React.createElement(
	          "tbody",
	          null,
	          voteRows
	        )
	      )
	    );
	  }
	});

	module.exports = Results;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var helpers = {
	  slugToDisplay(slug) {
	    slug = slug.replace(new RegExp('_', 'g'), ' ');
	    return slug.replace(/(^| )(\w)/g, x => {
	      return x.toUpperCase();
	    });
	  },
	  initSmoothScroll() {
	    $('#top').on('click', function (e) {
	      var hash = this.hash;

	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function () {
	        window.location.hash = hash;
	      });
	    });
	  },
	  initImagePicker() {
	    $('select').imagepicker({
	      show_label: true
	    });
	  },
	  initFormEvents() {
	    $.support.placeholder = false;
	    test = document.createElement('input');
	    if ('placeholder' in test) $.support.placeholder = true;

	    if ($.support.placeholder) {
	      $('form li.form-input').each(function () {
	        $(this).addClass('js-hide-label');
	      });
	    }

	    $('form li.form-input').find('input').on('keyup blur focus', function (e) {
	      var self = $(this);
	      var parent = self.parent();

	      if (e.type == 'keyup') {
	        parent.toggleClass('js-hide-label', self.val() === '');
	      } else if (e.type == 'blur') {
	        parent.toggleClass('js-hide-label', self.val() === '');
	        if (self.val() !== '') {
	          parent.addClass('js-unhighlight-label');
	        }
	      } else if (e.type == 'focus') {
	        if (self.val() !== '') {
	          parent.removeClass('js-unhighlight-label');
	        } else {
	          parent.toggleClass('js-hide-label');
	        }
	      }
	    });

	    $('ul.thumbnails li').on('click tap', function () {
	      $('ul.thumbnails .thumbnail').removeClass('selected');
	      $(this).find('div').addClass('selected');
	    });
	  }
	};

	module.exports = helpers;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	const React = __webpack_require__(1);
	const ReactRouter = __webpack_require__(3);
	const Link = ReactRouter.Link;

	var Home = React.createClass({
	  displayName: 'Home',

	  render() {
	    return React.createElement(
	      'div',
	      { className: 'home' },
	      React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	          'div',
	          { className: 'col-12' },
	          React.createElement(
	            'h2',
	            { className: 'title-2' },
	            'Welcome to Bahama LLama 2017!'
	          ),
	          React.createElement(
	            'p',
	            { className: 'text' },
	            'The Decision for the world\'s next Bahama Llama is upon us! Untold riches and glory for one lucky Llama! And you get to make it happen. You know how you\'ve always wanted to give glory and riches to a Llama, right? Yeah, like that. We are here to help make that happen! Up top!'
	          ),
	          React.createElement(
	            'p',
	            { className: 'text' },
	            'As you know, there have been several acts of violence from people in support of their Llamas. If you are one such person, have at it. All we ask is that you leave us out of it.'
	          ),
	          React.createElement(
	            Link,
	            { to: '/llamas', className: 'no-decoration' },
	            React.createElement(
	              'h3',
	              { className: 'title-3 enlarge-on-hover' },
	              'Vote →'
	            )
	          )
	        )
	      ),
	      React.createElement('div', { className: 'clear' })
	    );
	  }
	});

	module.exports = Home;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	const React = __webpack_require__(1);
	const helpers = __webpack_require__(6);

	var Llamas = React.createClass({
	  displayName: 'Llamas',

	  getInitialState() {
	    return { email: '', vote: 'sherriff_llama', name: '' };
	  },
	  handleVoteChange() {
	    this.setState({ vote: $(this.voteSelect).val() });
	  },
	  handleEmailChange(e) {
	    this.setState({ email: e.target.value });
	  },
	  handleNameChange(e) {
	    this.setState({ name: e.target.value });
	  },
	  handleSubmit(e) {
	    e.preventDefault();
	    var vote = {
	      email: this.state.email,
	      name: this.state.name,
	      id: this.state.vote
	    };

	    this.setState({ email: '', name: '', vote: 'sherriff_llama' });

	    var url = '/votes';
	    $.ajax({
	      url: url,
	      type: 'post',
	      data: vote,
	      success: data => {
	        console.log(data);
	      },
	      error: (xhr, status, err) => {
	        console.error('/votes', status, err.toString());
	      }
	    });
	  },
	  componentDidMount() {
	    helpers.initImagePicker();
	    helpers.initFormEvents();

	    $('.thumbnails').find('li').click(() => {
	      this.handleVoteChange();
	    });
	  },
	  render() {
	    var llamaSelect = this.props.route.llamas.map(result => {
	      return React.createElement(
	        'option',
	        { key: result,
	          'data-img-src': `./images/resized/${ result }.jpg`,
	          value: result },
	        helpers.slugToDisplay(result)
	      );
	    });

	    return React.createElement(
	      'div',
	      { className: 'llamas col-12' },
	      React.createElement(
	        'h2',
	        { className: 'title-2' },
	        'Vote for the next Bahama Llama'
	      ),
	      React.createElement(
	        'form',
	        { onSubmit: this.handleSubmit },
	        React.createElement(
	          'ul',
	          { className: 'input-list' },
	          React.createElement(
	            'li',
	            { className: 'form-input' },
	            React.createElement(
	              'label',
	              { htmlFor: 'name' },
	              'Your Name:'
	            ),
	            React.createElement('input', { type: 'text',
	              placeholder: 'Your Name',
	              id: 'name',
	              name: 'name',
	              onChange: this.handleNameChange,
	              value: this.state.name,
	              tabIndex: '1' })
	          ),
	          React.createElement(
	            'li',
	            { className: 'form-input' },
	            React.createElement(
	              'label',
	              { htmlFor: 'email' },
	              'Your Email:'
	            ),
	            React.createElement('input', { type: 'email',
	              placeholder: 'Your Email',
	              id: 'email',
	              name: 'email',
	              onChange: this.handleEmailChange,
	              value: this.state.email,
	              tabIndex: '2',
	              required: true })
	          )
	        ),
	        React.createElement(
	          'select',
	          { ref: ref => this.voteSelect = ref,
	            className: 'image-picker show-html',
	            value: this.state.vote },
	          llamaSelect
	        ),
	        React.createElement('input', { type: 'submit', className: 'enlarge-on-hover', value: 'Vote', id: 'submit' })
	      )
	    );
	  }
	});

	module.exports = Llamas;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var About = React.createClass({
	  displayName: "About",

	  render() {
	    return React.createElement(
	      "div",
	      { className: "about col-12" },
	      React.createElement(
	        "h2",
	        { className: "title-2" },
	        "Me, My Llamas, and I"
	      ),
	      React.createElement(
	        "p",
	        { className: "text" },
	        "I'm a Computer Science graduate student at Virginia Tech, engaged in research related to CS education. More specifically, I collect log data as students program in the Eclipse IDE, and am attempting to use that data to empirically determine if students are practicing incremental, test-driven development.",
	        React.createElement("br", null),
	        React.createElement("br", null),
	        "With this information, we hope to have interventions that might change student programming habits for the better. Read more at my ",
	        React.createElement(
	          "a",
	          { href: "ayaankazerouni.github.io" },
	          "personal website"
	        ),
	        "."
	      ),
	      React.createElement(
	        "p",
	        { className: "text" },
	        "As the presentation layer, the front-end team together with the UX team are responsible for a user's first and possibly lasting impression of a web product, regardless of the product's funtionality itself. I like the idea that small tweaks on the front-end can lead to lasting impressions on a user.",
	        React.createElement("br", null),
	        React.createElement("br", null),
	        "Further, there's a lot of scope for creativity with the number of different devices a website or application might be used on. Mobile calculators are a great example of apps in portrait mode looking complete different in landscape, going so far as to change the scope of functionality available."
	      ),
	      React.createElement(
	        "p",
	        { className: "text" },
	        "This 'web application' was built as part of the application to the Front End Developer Intership at Zappos. The technologies used here are:",
	        React.createElement(
	          "ul",
	          null,
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "https://facebook.github.io/react/" },
	              "React"
	            ),
	            ": I've wanted to spend some time working in React for quite a while, and this was the perfect opportunity. React lets me modularise my front-end, so that page has one or more 'working parts' (components). React is also very smart about updating the DOM (if you follow the rules and don't mess around)."
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "https://github.com/reactjs/react-router" },
	              "React Router"
	            ),
	            ": To help with routing and data flow in conjunction with React."
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "https://jquery.com/" },
	              "jQuery"
	            ),
	            ": Some my own, some libraries pulled in (visible in the src/third_party/ directory)."
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "https://webpack.github.io/" },
	              "Webpack"
	            ),
	            ": To bundle client side modules and make them available through Node's require statement."
	          ),
	          React.createElement(
	            "li",
	            null,
	            "HTML5, CSS3, and JavaScript. I dealt with most (if not all) responsiveness issues with CSS."
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "https://babeljs.io/" },
	              "Babel"
	            ),
	            ": For transpiling ES6 and JSX code into JavaScript readable by browsers."
	          ),
	          React.createElement(
	            "li",
	            null,
	            "Less relevant (back end technologies): ",
	            React.createElement(
	              "a",
	              { href: "https://nodejs.org/en/" },
	              "Node"
	            ),
	            ", ",
	            React.createElement(
	              "a",
	              { href: "https://expressjs.com/" },
	              "Express"
	            ),
	            ", ",
	            React.createElement(
	              "a",
	              { href: "http://mongoosejs.com/" },
	              "Mongoose"
	            ),
	            " with ",
	            React.createElement(
	              "a",
	              { href: "https://www.mongodb.com/" },
	              "MongoDB"
	            ),
	            "."
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = About;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// Image Picker
	// by Rodrigo Vera
	//
	// Version 0.2.4
	// Full source at https://github.com/rvera/image-picker
	// MIT License, https://github.com/rvera/image-picker/blob/master/LICENSE
	// Generated by CoffeeScript 1.4.0
	(function () {
	  var ImagePicker,
	      ImagePickerOption,
	      both_array_are_equal,
	      sanitized_options,
	      __bind = function (fn, me) {
	    return function () {
	      return fn.apply(me, arguments);
	    };
	  },
	      __indexOf = [].indexOf || function (item) {
	    for (var i = 0, l = this.length; i < l; i++) {
	      if (i in this && this[i] === item) return i;
	    }return -1;
	  };

	  jQuery.fn.extend({
	    imagepicker: function (opts) {
	      if (opts == null) {
	        opts = {};
	      }
	      return this.each(function () {
	        var select;
	        select = jQuery(this);
	        if (select.data("picker")) {
	          select.data("picker").destroy();
	        }
	        select.data("picker", new ImagePicker(this, sanitized_options(opts)));
	        if (opts.initialized != null) {
	          return opts.initialized.call(select.data("picker"));
	        }
	      });
	    }
	  });

	  sanitized_options = function (opts) {
	    var default_options;
	    default_options = {
	      hide_select: true,
	      show_label: false,
	      initialized: void 0,
	      changed: void 0,
	      clicked: void 0,
	      selected: void 0,
	      limit: void 0,
	      limit_reached: void 0
	    };
	    return jQuery.extend(default_options, opts);
	  };

	  both_array_are_equal = function (a, b) {
	    return jQuery(a).not(b).length === 0 && jQuery(b).not(a).length === 0;
	  };

	  ImagePicker = function () {

	    function ImagePicker(select_element, opts) {
	      this.opts = opts != null ? opts : {};
	      this.sync_picker_with_select = __bind(this.sync_picker_with_select, this);

	      this.select = jQuery(select_element);
	      this.multiple = this.select.attr("multiple") === "multiple";
	      if (this.select.data("limit") != null) {
	        this.opts.limit = parseInt(this.select.data("limit"));
	      }
	      this.build_and_append_picker();
	    }

	    ImagePicker.prototype.destroy = function () {
	      var option, _i, _len, _ref;
	      _ref = this.picker_options;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        option = _ref[_i];
	        option.destroy();
	      }
	      this.picker.remove();
	      this.select.unbind("change");
	      this.select.removeData("picker");
	      return this.select.show();
	    };

	    ImagePicker.prototype.build_and_append_picker = function () {
	      var _this = this;
	      if (this.opts.hide_select) {
	        this.select.hide();
	      }
	      this.select.change(function () {
	        return _this.sync_picker_with_select();
	      });
	      if (this.picker != null) {
	        this.picker.remove();
	      }
	      this.create_picker();
	      this.select.after(this.picker);
	      return this.sync_picker_with_select();
	    };

	    ImagePicker.prototype.sync_picker_with_select = function () {
	      var option, _i, _len, _ref, _results;
	      _ref = this.picker_options;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        option = _ref[_i];
	        if (option.is_selected()) {
	          _results.push(option.mark_as_selected());
	        } else {
	          _results.push(option.unmark_as_selected());
	        }
	      }
	      return _results;
	    };

	    ImagePicker.prototype.create_picker = function () {
	      this.picker = jQuery("<ul class='thumbnails image_picker_selector'></ul>");
	      this.picker_options = [];
	      this.recursively_parse_option_groups(this.select, this.picker);
	      return this.picker;
	    };

	    ImagePicker.prototype.recursively_parse_option_groups = function (scoped_dom, target_container) {
	      var container, option, option_group, _i, _j, _len, _len1, _ref, _ref1, _results;
	      _ref = scoped_dom.children("optgroup");
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        option_group = _ref[_i];
	        option_group = jQuery(option_group);
	        container = jQuery("<ul></ul>");
	        container.append(jQuery("<li class='group_title'>" + option_group.attr("label") + "</li>"));
	        target_container.append(jQuery("<li>").append(container));
	        this.recursively_parse_option_groups(option_group, container);
	      }
	      _ref1 = function () {
	        var _k, _len1, _ref1, _results1;
	        _ref1 = scoped_dom.children("option");
	        _results1 = [];
	        for (_k = 0, _len1 = _ref1.length; _k < _len1; _k++) {
	          option = _ref1[_k];
	          _results1.push(new ImagePickerOption(option, this, this.opts));
	        }
	        return _results1;
	      }.call(this);
	      _results = [];
	      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
	        option = _ref1[_j];
	        this.picker_options.push(option);
	        if (!option.has_image()) {
	          continue;
	        }
	        _results.push(target_container.append(option.node));
	      }
	      return _results;
	    };

	    ImagePicker.prototype.has_implicit_blanks = function () {
	      var option;
	      return function () {
	        var _i, _len, _ref, _results;
	        _ref = this.picker_options;
	        _results = [];
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          option = _ref[_i];
	          if (option.is_blank() && !option.has_image()) {
	            _results.push(option);
	          }
	        }
	        return _results;
	      }.call(this).length > 0;
	    };

	    ImagePicker.prototype.selected_values = function () {
	      if (this.multiple) {
	        return this.select.val() || [];
	      } else {
	        return [this.select.val()];
	      }
	    };

	    ImagePicker.prototype.toggle = function (imagepicker_option) {
	      var new_values, old_values, selected_value;
	      old_values = this.selected_values();
	      selected_value = imagepicker_option.value().toString();
	      if (this.multiple) {
	        if (__indexOf.call(this.selected_values(), selected_value) >= 0) {
	          new_values = this.selected_values();
	          new_values.splice(jQuery.inArray(selected_value, old_values), 1);
	          this.select.val([]);
	          this.select.val(new_values);
	        } else {
	          if (this.opts.limit != null && this.selected_values().length >= this.opts.limit) {
	            if (this.opts.limit_reached != null) {
	              this.opts.limit_reached.call(this.select);
	            }
	          } else {
	            this.select.val(this.selected_values().concat(selected_value));
	          }
	        }
	      } else {
	        if (this.has_implicit_blanks() && imagepicker_option.is_selected()) {
	          this.select.val("");
	        } else {
	          this.select.val(selected_value);
	        }
	      }
	      if (!both_array_are_equal(old_values, this.selected_values())) {
	        this.select.change();
	        if (this.opts.changed != null) {
	          return this.opts.changed.call(this.select, old_values, this.selected_values());
	        }
	      }
	    };

	    return ImagePicker;
	  }();

	  ImagePickerOption = function () {

	    function ImagePickerOption(option_element, picker, opts) {
	      this.picker = picker;
	      this.opts = opts != null ? opts : {};
	      this.clicked = __bind(this.clicked, this);

	      this.option = jQuery(option_element);
	      this.create_node();
	    }

	    ImagePickerOption.prototype.destroy = function () {
	      return this.node.find(".thumbnail").unbind();
	    };

	    ImagePickerOption.prototype.has_image = function () {
	      return this.option.data("img-src") != null;
	    };

	    ImagePickerOption.prototype.is_blank = function () {
	      return !(this.value() != null && this.value() !== "");
	    };

	    ImagePickerOption.prototype.is_selected = function () {
	      var select_value;
	      select_value = this.picker.select.val();
	      if (this.picker.multiple) {
	        return jQuery.inArray(this.value(), select_value) >= 0;
	      } else {
	        return this.value() === select_value;
	      }
	    };

	    ImagePickerOption.prototype.mark_as_selected = function () {
	      return this.node.find(".thumbnail").addClass("selected");
	    };

	    ImagePickerOption.prototype.unmark_as_selected = function () {
	      return this.node.find(".thumbnail").removeClass("selected");
	    };

	    ImagePickerOption.prototype.value = function () {
	      return this.option.val();
	    };

	    ImagePickerOption.prototype.label = function () {
	      if (this.option.data("img-label")) {
	        return this.option.data("img-label");
	      } else {
	        return this.option.text();
	      }
	    };

	    ImagePickerOption.prototype.clicked = function () {
	      this.picker.toggle(this);
	      if (this.opts.clicked != null) {
	        this.opts.clicked.call(this.picker.select, this);
	      }
	      if (this.opts.selected != null && this.is_selected()) {
	        return this.opts.selected.call(this.picker.select, this);
	      }
	    };

	    ImagePickerOption.prototype.create_node = function () {
	      var image, thumbnail;
	      this.node = jQuery("<li/>");
	      image = jQuery("<img class='image_picker_image'/>");
	      image.attr("src", this.option.data("img-src"));
	      thumbnail = jQuery("<div class='thumbnail'>");
	      thumbnail.click({
	        option: this
	      }, function (event) {
	        return event.data.option.clicked();
	      });
	      thumbnail.append(image);
	      if (this.opts.show_label) {
	        thumbnail.append(jQuery("<p/>").html(this.label()));
	      }
	      this.node.append(thumbnail);
	      return this.node;
	    };

	    return ImagePickerOption;
	  }();
	}).call(this);

/***/ }
/******/ ]);