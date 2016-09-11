const React = require('react');
const helpers = require('./helpers');

var Llamas = React.createClass({
  getInitialState() {
    return { email: '', vote: '', name: '' };
  },
  handleVoteChange() {
    this.setState({ vote: $(this.voteSelect).val()})
  },
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  },
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  },
  handleSubmit(e) {
    e.preventDefault()
    var vote = {
      email: this.state.email,
      name: this.state.name,
      id: this.state.vote
    };

    this.setState({ email: '', name: '', vote: '' });

    var url = '/votes';
    $.ajax({
      url: url,
      type: 'post',
      data: vote,
      success: (data) => {
        console.log(data);
      },
      error: (xhr, status, err) => {
        console.error('/votes', status, err.toString());
      }
    });
  },
  componentDidMount() {
    helpers.initImagePicker();
    helpers.initFormEventListeners();

    $('.thumbnails').find('li').click(() => {
      this.handleVoteChange();
    });
  },
  render() {
    var llamas = this.props.params.llamas.split(',');
    var llamaSelect = llamas.map((result) => {
      return (
        // <li key={result}>
        //   <input type="radio"
        //     name="vote"
        //     value={result}
        //     checked={this.state.vote === result}
        //     onChange={this.handleVoteChange}/>{helpers.slugToDisplay(result)}
        // </li>
        <option key={result}
          data-img-src='./images/icon.png'
          value={result}>{helpers.slugToDisplay(result)}</option>
      )
    });

    return (
      <div className="llamas col-12">
        <h2 className="form-title">Vote for the next Bahama Llama</h2>
        <form onSubmit={this.handleSubmit}>
          <ul className="input-list">
            <li className="form-input">
              <label htmlFor="name">Your Name:</label>
              <input type="text"
                placeholder="Your Name"
                id="name"
                name="name"
                onChange={this.handleNameChange}
                value={this.state.name}
                tabIndex="1"/>
            </li>
            <li className="form-input">
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
          <select ref={(ref) => this.voteSelect = ref}
            className="image-picker show-html"
            value={this.state.vote}>
            {llamaSelect}
          </select>
          <input type="submit" value="Vote" id="submit"/>
        </form>
      </div>
    );
  }
});

module.exports = Llamas;
