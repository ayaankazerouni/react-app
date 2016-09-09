var React = require('react');
var ReactRouter = require('react-router');
var IndexLink = ReactRouter.IndexLink;
var Link = ReactRouter.Link;

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

module.exports = App;
