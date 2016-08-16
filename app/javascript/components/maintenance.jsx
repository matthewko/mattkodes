var React = require('react');
var Constants = require('./../lib/constants');
module.exports = React.createClass({
  // Small component to make it seem like I am actually working...
  render: function() {
    var center = {
      textAlign: "center"
    }

    var divStyle = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    };

    return (
      <div>
        <h1 style={center}>This site is under construction!</h1>
        <div>
          <img src={Constants.IMAGE_PATH+"typing_cat.gif"} alt="Typing Cat" style={divStyle}></img>
        </div>
        <h1 style={center}>Please come back later.</h1>
      </div>
    );
  },
})
