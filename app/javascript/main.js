// Main entry point to our application.
var React = require('react');
var ReactDOM = require('react-dom');

// Create the react app
var WebApp = function(route) {
  // Render the web app
  var WebAppFactory = React.createFactory(require('./web-app'));
  ReactDOM.render(WebAppFactory({route: route}),
                  document.getElementById('web-app'));
}
window.WebApp = WebApp; // Global export
