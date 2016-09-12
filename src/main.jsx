const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.history;

// components
const Container = require('./container')
const Home = require('./home');
const Llamas = require('./llamas');
const About = require('./about');

//jQuery plugins
require('./third_party/image-picker');

var llamas = [
  'sherriff_llama',
  'suspicious_llama',
  'surfer_dude_llama',
  'photogenic_llama',
  'happy_llama',
  'unhappy_llama',
  'deep_llama',
  'canadian_llama'
];

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Home} />
      <Route path="/llamas" llamas={llamas} component={Llamas}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('container')
);
