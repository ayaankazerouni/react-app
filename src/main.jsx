var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Container = require('./container')
var Home = require('./home');
var Llamas = require('./llamas');

ReactDOM.render(
  <Router>
    <Route path="/" component={Container}>
      <IndexRoute component={Home} />
      <Route path="llamas" component={Llamas}/>
    </Route>
  </Router>,
  document.getElementById('container')
);
