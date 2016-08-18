var React = require('react');
var Constants = require('../lib/constants');
module.exports = React.createClass({
  // This is probably overkill for now, but if in the future I
  // want to have a fancy 404 page, this might be useful.
  render: function() {
     // Extra navbar element needed to keep alignment on top-fixed
    return (
      <div>
        <h1 className="centered-text">
          404
          <br></br>
          Page not found!
        </h1>
        <img className="horizontal-center" src={Constants.IMAGE_PATH+"typing_cat.gif"}></img>
        <h3 className="centered-text">
          I may still be working on making this page!
          <br></br>
          Please come back later!
        </h3>
      </div>
    );
  },
})
