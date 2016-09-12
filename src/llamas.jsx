const React = require('react');
const Modal = require('react-modal-dialog');
const ModalContainer = Modal.ModalContainer;
const ModalDialog = Modal.ModalDialog;
const helpers = require('./helpers');

var Llamas = React.createClass({
  getInitialState() {
    var sherriffBio = helpers.getLlamaBio('sherriff_llama');
    return {
      email: '',
      vote: 'sherriff_llama',
      name: '',
      isShowingModal: false,
      voteDisplay: 'sherriff_llama',
      llamaBio: sherriffBio
    };
  },
  handleOpenModal() {
    this.setState({ isShowingModal: true });
  },
  handleCloseModal() {
    this.setState({ isShowingModal: false });
  },
  handleVoteChange() {
    this.setState({ vote: $(this.voteSelect).val()})
    this.setState({ voteDisplay: $(this.voteSelect).find('option:selected').text()});
    this.setState({ llamaBio: helpers.getLlamaBio($(this.voteSelect).val())});
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

    this.setState({
      email: '',
      name: '',
      vote: 'sherriff_llama',
      voteDisplay: 'Sherriff Llama',
      llamaBio: helpers.getLlamaBio('sherriff_llama')
     });

    var url = '/votes';
    $.ajax({
      url: url,
      type: 'post',
      data: vote,
      success: (data) => {

        $('ul.thumbnails .thumbnail').removeClass('selected');
        $('ul.thumbnails li:first').find('.thumbnail').addClass('selected');
        var interval = setInterval(function() {
          $('#standings').fadeOut(200);
          $('#standings').fadeIn(200);
        }, 100);

        setTimeout(function() {
          clearInterval(interval);
        }, 500);
      },
      error: (xhr, status, err) => {
        console.error('/votes', status, err.toString());
      }
    });
  },
  componentDidMount() {
    helpers.initImagePicker();
    helpers.initFormEvents();
    var self = this;

    $('.thumbnails li').on('click tap', function() {
      $('ul.thumbnails .thumbnail').removeClass('selected');
      $(this).find('div').addClass('selected');
      self.handleVoteChange();
    });

    $('.thumbnails li').on('dblclick taphold', function() {
      self.handleOpenModal();
    });
  },
  render() {
    var llamaSelect = this.props.route.llamas.map((result) => {
      return (
        <option key={result}
          data-img-src={`./images/resized/${result}.jpg`}
          value={result}>{helpers.slugToDisplay(result)}</option>
      )
    });

    return (
      <div className="llamas col-12">
        <div>
          {
            this.state.isShowingModal &&
            <div className="col-8">
              <ModalContainer onClose={this.handleCloseModal}>
                <ModalDialog onClose={this.handleCloseModal}>
                  <h2 className="title title2">
                    {this.state.voteDisplay}
                  </h2>
                  <p>
                    {this.state.llamaBio}
                  </p>
                </ModalDialog>
              </ModalContainer>
            </div>
          }
        </div>
        <h2 className="title title-2">Vote for the next Bahama Llama</h2>
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
                tabIndex="2"
                required/>
            </li>
          </ul>
          <p className="text">
            Double tap on a contestant to view his or her bio.
          </p>
          <select ref={(ref) => this.voteSelect = ref}
            className="image-picker show-html"
            value={this.state.vote}>
            {llamaSelect}
          </select>
          <input type="submit" className="enlarge-on-hover" value="Cast Vote" id="submit"/>
        </form>
      </div>
    );
  }
});

module.exports = Llamas;
