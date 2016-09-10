var React = require('react');
var ReactRouter = require('react-router');
var IndexLink = ReactRouter.IndexLink;
var Link = ReactRouter.Link;

var Results = require('./results');

var Container = React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  loadVotes: function () {
    var url = '/votes';
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadVotes()
    pollInterval = setInterval(this.loadVotes, 2000);
  },
  render: function() {
    return (
      <div className='col-12'>
        <h1>Bahama Llama 2017</h1>
        <ul className='header'>
          <li><IndexLink to='/' activeClassName='active'>Home</IndexLink></li>
          <li><Link to='/llamas' activeClassName='active'>Llamas</Link></li>
          <li><Link to='/about' className='right' activeClassName='active'>About Me</Link></li>
        </ul>
        <div id='content'>
          <div className="row">
            <div className="col-9">
              {this.props.children}
            </div>
            <div className="col-3 sidebar">
              <Results data={this.state.data}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Container;
