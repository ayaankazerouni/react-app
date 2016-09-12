const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

var Home = React.createClass({
  render() {
    return (
      <div className='home'>
        <div className='row'>
          <div className='col-12'>
            <h2 className="title title-2">Welcome to Bahama Llama 2017!</h2>
            <p className="text">
              The Decision for the world's next Bahama Llama is upon us! Untold riches and glory for one lucky Llama!
              And you get to make it happen. You know how you've always wanted to give glory and riches to a Llama,
              right? Yeah, like that. We are here to help make that happen! Up top!
            </p>

            <p className="text">
              As you know, there have been several acts of violence from people in support of their Llamas. If you are
              one such person, have at it. All we ask is that you leave us out of it.
            </p>

            <Link to="/llamas" className="no-decoration"><h3 className="title-3 enlarge-on-hover">Vote &rarr;</h3></Link>
          </div>
        </div>
        <div className='clear'></div>
      </div>
    );
  }
});

module.exports = Home;
