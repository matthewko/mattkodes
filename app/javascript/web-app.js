var React = require('react');
var Constants = require('./lib/constants');
var NavBar = require('./components/nav-bar');
var NavBarElement = require('./components/nav-bar-element');

var Contact = require('./routes/contact');
var Home = require('./routes/home');
var Projects = require('./routes/projects');
var Skills = require('./routes/skills');
var Work = require('./routes/work');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      route: 'home'
    }
  },
  renderContent: function() {
    // I am handling my own routing for now.
    switch(this.props.route) {
      case "home":
        return (<Home></Home>);
      case "work":
        return (<Work></Work>);
      case "projects":
        return (<Projects></Projects>);
      case "skills":
        return (<Skills></Skills>)
      case "contact":
        return (<Contact></Contact>);
      default:
        return (<h1>Uhhh... Something broke...Sorry!</h1>);
    }
  },
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
            <a href="/work">
              Work
            </a>
          </NavBarElement>
          <NavBarElement>
            <a href="/projects">
              Projects
            </a>
          </NavBarElement>
          <NavBarElement>
            <a href="/skills">
              Skills
            </a>
          </NavBarElement>
          <NavBarElement>
            <a href="/contact">
              Contact
            </a>
          </NavBarElement>
        </NavBar>
        { this.renderContent() }
      </div>
    );
  },
})
