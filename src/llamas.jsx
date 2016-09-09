var React = require('react');

var Llamas = React.createClass({
  render: function() {
    return (
      <div className="llamas col-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-1">
              <label htmlFor="email">Email:</label>
            </div>
            <div className="col-4">
              <input type="text" id="email" placeholder="Your email address" ref="email"/>
            </div>
          </div>
          <div className="form-group">
            <input type="radio" name="vote" value="sherriff_llama"/>Sherriff Llama
          </div>
          <div className="form-group">
            <input type="radio" name="vote" value="sherriff_llama"/>Deep Llama
          </div>
          <div className="form-group">
            <input type="radio" name="vote" value="sherriff_llama"/>Weird Llama
          </div>
          <div className="form-group">
            <input type="radio" name="vote" value="sherriff_llama"/>Cool Dude Llama
          </div>
          <div className="form-group">
            <input type="radio" name="vote" value="sherriff_llama"/>Awkward Llamas
          </div>
          <div className="form-group">
            <input type="submit" value="Post" />
          </div>
        </form>
      </div>
    );
  }
});

module.exports = Llamas;
