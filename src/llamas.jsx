var React = require('react');

var Llamas = React.createClass({
  getInitialState: function() {
    return { email: '' };
  },
  handleVoteChange: function(e) {
    this.setState({ vote: e.target.value });
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  handleSubmit: function(e) {
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
  render: function() {
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
          <div className="form-group">
            <input type="radio"
              name="vote"
              value="sherriff_llama"
              onChange={this.handleVoteChange}/>Sherriff Llama
          </div>
          <div className="form-group">
            <input type="radio"
              name="vote"
              value="deep_llama"
              onChange={this.handleVoteChange}/>Deep Llama
          </div>
          <div className="form-group">
            <input type="radio"
              name="vote"
              value="weird_llama"
              onChange={this.handleVoteChange}/>Weird Llama
          </div>
          <div className="form-group">
            <input type="radio"
              name="vote"
              value="surfer_dude_llama"
              onChange={this.handleVoteChange}/>Surfer Dude Llama
          </div>
          <div className="form-group">
            <input type="radio"
              name="vote"
              value="awkward_llama"
              onChange={this.handleVoteChange}/>Awkward Llama
          </div>
          <div className="form-group">
            <input type="radio"
              name="vote"
              value="hippe_llama"
              onChange={this.handleVoteChange}/>Hippie Llama
          </div>
          <div className="form-group">
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = Llamas;
