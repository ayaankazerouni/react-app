var React = require('react');
var helpers = require('./helpers');

var Results = React.createClass({
  render() {
    var voteRows = this.props.data.map(function(vote) {
      var display = helpers.slugToDisplay(vote._id);
      return (
        <tr key={vote._id}>
          <td>{display}</td>
          <td className='number-field'>{vote.count}</td>
        </tr>
      );
    });
    return  (
      <div className='results'>
        <h2>
          Polls
        </h2>
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
    );
  }
});

module.exports = Results;
