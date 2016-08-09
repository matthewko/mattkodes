var React = require('react');
var Constants = require('./lib/constants');
var NavBar = require('./components/nav-bar');
var NavBarElement = require('./components/nav-bar-element');
var Maintenance = require('./components/maintenance');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar topFixed>
          <NavBarElement>
            <img className="nav-logo" src={Constants.IMAGE_PATH+"matt_kodes.png"}></img>
          </NavBarElement>
          <NavBarElement flexible>
          </NavBarElement>
          <NavBarElement>
            HELLO
          </NavBarElement>
          <NavBarElement>
            HELLO
          </NavBarElement>
          <NavBarElement>
            HELLO
          </NavBarElement>
        </NavBar>
        <Maintenance></Maintenance>
        <Maintenance></Maintenance>
        <Maintenance></Maintenance>
        <Maintenance></Maintenance>

      </div>
    );
  },
})
