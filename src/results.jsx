var React = require('react');

var Results = React.createClass({
  render: function() {
    var voteRows = this.props.data.map(function(vote) {
      var display = slugToDisplay(vote._id);
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

function slugToDisplay(slug) {
  slug = slug.replace(new RegExp('_', 'g'), ' ');
  return slug.replace(/(^| )(\w)/g, function(x) {
    return x.toUpperCase();
  });
}

module.exports = Results;
