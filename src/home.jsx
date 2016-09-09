var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div className='home'>
        <div className='row'>
          <div className='col-8'>
            <h2>Home</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='col-4'>
            <table id='standings'>
              <thead>
                <tr>
                  <th>Llama in Question</th>
                  <th>Votes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sherriff Llama</td>
                  <td className='number-field'>6</td>
                </tr>
                <tr>
                  <td>Deep Llama</td>
                  <td className='number-field'>5</td>
                </tr>
                <tr>
                  <td>Weird Llama</td>
                  <td className='number-field'>2</td>
                </tr>
                <tr>
                  <td>Cool Dude Llama</td>
                  <td className='number-field'>0</td>
                </tr>
                <tr>
                  <td>Last Llama</td>
                  <td className='number-field'>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='clear'></div>
      </div>
    );
  }
});

module.exports = Home;
