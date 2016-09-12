const React = require('react');
const ReactRouter = require('react-router');
const IndexLink = ReactRouter.IndexLink;
const Link = ReactRouter.Link;

const Results = require('./results');
const helpers = require('./helpers');

var Container = React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  loadVotes() {
    var url = '/votes';
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(url, status, err.toString());
      }
    });
  },
  componentDidMount() {
    helpers.initSmoothScroll();
    this.loadVotes();
    var pollInterval = setInterval(this.loadVotes, 2000);
  },
  render() {
    var topLinkStyle = {textAlign: 'right'};
    return (
      <div className="container col-12">
        <ul className='header'>
          <li><IndexLink to='/' activeClassName='active'>HOME</IndexLink></li>
          <li><Link to='/llamas' activeClassName='active'>VOTE</Link></li>
          <li><Link to='/about' className='right' activeClassName='active'>ABOUT ME</Link></li>
        </ul>
        <div id='content'>
          <div className="row">
            <div className="col-9">
              <div className="jumbotron">
                <h1>Bahama Llama 2017</h1>
              </div>
              {this.props.children}
              <div style={topLinkStyle}>
                <a href="#content" id="top">Back to Top &uarr;</a>
              </div>
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
