var React = require('react');
var Constants = require('../lib/constants');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      topFixed: this.props.topFixed
    };
  },
  getDefaultProps: function() {
    return {
      topFixed: false
    };
  },
  render: function() {
     // Extra navbar element needed to keep alignment on top-fixed
    return (
      <div className='navbar'>
        <div className={'navbar navbar-inverse'+(this.state.topFixed ? ' top-fixed':'')}>
          {this.props.children}
        </div>
      </div>
    );
  },
})
