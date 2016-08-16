var React = require('react');
var Constants = require('../lib/constants');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      selected: false,
    };
  },
  getDefaultProps: function() {
    return {
      classes: "selectable-image standard-background circular fade grow",
      image: null,
      onSelection: null,
    };
  },
  render: function() {
     // Extra navbar element needed to keep alignment on top-fixed
    return (
      <img className={this.props.classes} src={this.props.image}>
        {this.props.children}
      </img>
    );
  },
})
