var React = require('react');

var About = React.createClass({
  render() {
    return(
      <div className="about col-12">
        <h2 className="title title-2">Me, My Llamas, and I</h2>
        <p className="text">
          I'm a Computer Science graduate student at Virginia Tech, engaged in research related to CS education.
          More specifically, I collect log data as students program in the Eclipse IDE, and am attempting to use
          that data to empirically determine if students are practicing incremental, test-driven development.
          <br/><br/>
          With this information, we hope to have interventions that might change student programming habits for
          the better. Read more at my <a href="http://ayaankazerouni.github.io" target="_blank">personal website</a>.
        </p>
        <p className="text">
          As the presentation layer, the front-end team together with the UX team are responsible for a user's first
          and possibly lasting impression of a web product, regardless of the product's funtionality itself. I like the
          idea that small tweaks on the front-end can lead to lasting impressions on a user.
          <br/><br/>
          Further, there's a lot of scope for creativity with the number of different devices a website or application
          might be accessed from. Mobile calculators are a great example of apps in portrait mode looking complete different
          in landscape, going so far as to change the scope of functionality available.
        </p>
        <h3 className="title title-3">The Application</h3>
        <p className="text">
          This is a voting application where we vote for the winner of 2017's Bahama Llama position. It does these
          things:
          <ul>
            <li>
              This is a single-page application, and the links make this more like a tabbed application (the browser never has to reload to do anything).
            </li>
            <li>
              The table of poll results on the right (on desktop) and on the bottom (on mobile) updates in real-time as votes are cast.
            </li>
          </ul>
        </p>
        <p className="text">
          This 'web application' was built as part of the application to the Front End Developer Intership at
          Zappos. The technologies used here are:

          <ul>
            <li>
              <a href="https://facebook.github.io/react/" target="_blank">React</a>: I've wanted to spend some time working in React for
                quite a while, and this was the perfect opportunity. React lets me modularise my front-end, so that
                each page has one or more 'working parts' (components). React is also very smart about updating the DOM
                (if you follow the rules and don't mess around).
            </li>
            <li>
              <a href="https://github.com/reactjs/react-router" target="_blank">React Router</a>: To help with routing
                and data flow in conjunction with React. ReactRouter is helpful for single page applications like
                this, where the browser doesn't reload for each page.
            </li>
            <li>
              <a href="https://jquery.com/" target="_blank">jQuery</a>: I wrote most of the jQuery that I use, and I
                pulled in a library (image-picker) for choosing Llamas on the 'Vote' page. The file is in the src/third_party/ directory.
            </li>
            <li>
              <a href="https://webpack.github.io/" target="_blank">Webpack</a>: To bundle client side modules and make them available
                through Node's require statement.
            </li>
            <li>
              HTML5, CSS3, and JavaScript. I dealt with most (if not all) responsiveness issues with CSS.
            </li>
            <li>
              <a href="https://babeljs.io/" target="_blank">Babel</a>: For transpiling ES6 and JSX code into JavaScript readable by
                browsers.
            </li>
            <li>
              Less relevant (back end technologies): <a href="https://nodejs.org/en/" target="_blank">Node</a>, <a href="https://expressjs.com/" target="_blank">Express</a>, <a href="http://mongoosejs.com/" target="_blank">Mongoose</a> with <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>.
            </li>
          </ul>
        </p>
      </div>
    )
  }
});

module.exports = About;
