var React = require('react');
var ReactRouter = require('react-router');
var IndexLink = ReactRouter.IndexLink;
var Link = ReactRouter.Link;

var Container = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <h1>Bahama Llama 2017</h1>
        <ul className='header'>
          <li><IndexLink to='/' activeClassName='active'>Home</IndexLink></li>
          <li><Link to='/llamas' activeClassName='active'>Llamas</Link></li>
          <li><Link to='/about' className='right' activeClassName='active'>About Me</Link></li>
        </ul>
        <div id='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Container;
