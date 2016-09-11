const React = require("react");
const helpers = require("./helpers");

var Results = React.createClass({
  render() {
    var voteRows = this.props.data.map(function(vote) {
      var display = helpers.slugToDisplay(vote._id);
      return (
        <tr key={vote._id}>
          <td>{display}</td>
          <td className="number-field">{vote.count}</td>
        </tr>
      );
    });
    return  (
      <div className="results">
        <h3 className="title title-3">
          Polls
        </h3>
        <table id="standings">
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
