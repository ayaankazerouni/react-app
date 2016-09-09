var React = require('react');

var Home = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadInitialVotes: function () {
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
    this.loadInitialVotes()
  },
  render: function () {
    var voteRows = this.state.data.map(function(vote) {
      return (
        <tr key={vote._id}>
          <td>{vote._id}</td>
          <td className='number-field'>{vote.count}</td>
        </tr>
      );
    });

    return (
      <div className='home'>
        <div className='row'>
          <div className='col-8'>
            <h2>Home</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='col-4'>
            <table id='standings'>
              <thead>
                <tr>
                  <th>Llama in Question</th>
                  <th>Votes</th>
                </tr>
              </thead>
              <tbody>
                {voteRows}
              </tbody>
            </table>
          </div>
        </div>
        <div className='clear'></div>
      </div>
    );
  }
});

module.exports = Home;
