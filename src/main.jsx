const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

const Container = require('./container')
const Home = require('./home');
const Llamas = require('./llamas');

require('./third_party/image-picker')

ReactDOM.render(
  <Router>
    <Route path="/" component={Container}>
      <IndexRoute component={Home} />
      <Route path="llamas/:llamas" component={Llamas}/>
    </Route>
  </Router>,
  document.getElementById('container')
);
