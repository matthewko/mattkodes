var React = require('react');
module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      flexible: false
    };
  },
  render: function() {
    // Extra navbar element needed to keep alignment on top-fixed
    return (
      <div className={'navbar-element navbar-brand'+(this.props.flexible ? ' flexible' : ' inflexible')}>
          {this.props.children}
      </div>
    );
  },
})
