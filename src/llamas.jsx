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
        <li key={result}>
          <input type="radio"
            name="vote"
            value={result}
            checked={this.state.vote === result}
            onChange={this.handleVoteChange}/>{helpers.slugToDisplay(result)}
        </li>
      )
    });
    return (
      <div className="llamas col-12">
        <h2 className="form-title">Vote for the next Bahama Llama</h2>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label htmlFor="name">Your Name:</label>
              <input type="text"
                placeholder="Your Name"
                id="name"
                name="name"
                onChange={this.handleNameChange}
                value={this.state.name}
                tabIndex="1"/>
            </li>
            <li>
              <label htmlFor="email">Your Email:</label>
              <input type="email"
                placeholder="Your Email"
                id="email"
                name="email"
                onChange={this.handleEmailChange}
                value={this.state.email}
                tabIndex="2"/>
            </li>
          </ul>
          <input type="submit" value="Vote" id="submit"/>
        </form>
      </div>
    );
  }
});

module.exports = Llamas;
