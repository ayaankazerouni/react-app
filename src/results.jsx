var React = require('react');

var Results = React.createClass({
  render: function() {
    var voteRows = this.props.data.map(function(vote) {
      return (
        <tr key={vote._id}>
          <td>{vote._id}</td>
          <td className='number-field'>{vote.count}</td>
        </tr>
      );
    });
    return  (
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
    );
  }
})

module.exports = Results;
