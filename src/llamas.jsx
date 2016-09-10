var React = require('react');
var helpers = require('./helpers');

var Llamas = React.createClass({
  getInitialState() {
    return { email: '' };
  },
  handleVoteChange(e) {
    this.setState({ vote: e.target.value });
  },
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  },
  handleSubmit(e) {
    e.preventDefault()
    var vote = {
      email: this.state.email,
      id: this.state.vote
    };

    this.setState({ email: '', vote: '' });

    $.ajax({
      url: '/votes',
      type: 'post',
      data: vote,
      success: function() {

      }.bind(this),
      error: function() {
        console.error('/votes', status, err.toString());
      }.bind(this)
    });
  },
  render() {
    var llamas = this.props.params.llamas.split(',');
    var llamaRadios = llamas.map((result) => {
      return (
        <div key={result} className="form-group">
          <input type="radio"
            name="vote"
            value={result}
            checked={this.state.vote === result}
            onChange={this.handleVoteChange}/>{helpers.slugToDisplay(result)}
        </div>
      )
    });
    return (
      <div className="llamas col-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-1">
              <label htmlFor="email">Email:</label>
            </div>
            <div className="col-4">
              <input type="text"
                id="email"
                value={this.state.email}
                placeholder="Your email address"
                onChange={this.handleEmailChange}/>
            </div>
          </div>
          { llamaRadios }
          <div className="form-group">
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = Llamas;
