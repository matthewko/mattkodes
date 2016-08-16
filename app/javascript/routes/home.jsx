var React = require('react');
var Constants = require('./../lib/constants');
var SelectableImage = require('./../components/selectable-image');
module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="centered-text">Welcome</h1>
        <h4 className="centered-text">
          This is a simple resume site made to tryout <a href="https://facebook.github.io/react">React</a>.
        </h4>
        <div className="flex-container">
          <div className="flexible-x1"></div>
          <a href="/no/where">
            <SelectableImage image={Constants.IMAGE_PATH+"/umich_logo.png"}></SelectableImage>
          </a>
          <a href="/no/where">
            <SelectableImage image={Constants.IMAGE_PATH+"/apple_logo.png"}></SelectableImage>
          </a>
          <a href="/no/where">
            <SelectableImage image={Constants.IMAGE_PATH+"/arbormoon_logo_partial.png"}></SelectableImage>
          </a>
          <div className="flexible-x1"></div>
        </div>
    </div>
    );
  },
})

// Changing background (UM, Apple, Arbormoon, etc...)
// Selection boxes on the right
