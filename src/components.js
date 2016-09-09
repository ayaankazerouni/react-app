var {
  Router,
  Route,
  IndexRoute,
  IndexLink,
  Link
} = ReactRouter;

var Llamas = React.createClass({
  render: function() {
    return (
      <h2>Llamas</h2>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <h2>Home</h2>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Bahama Llama</h1>
        <ul className='header'>
          <li><IndexLink to='/' activeClassName='active'>Home</IndexLink></li>
          <li><Link to='/llamas' activeClassName='active'>Llamas</Link></li>
        </ul>
        <div id='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
});

var destination = document.getElementById('container');
ReactDOM.render(
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/llamas' component={Llamas}/>
    </Route>
  </Router>,
  destination
);
