var React = require('react'),
  ReactDOM = require('react-dom'),
  // Create the react app
  WebApp = React.createFactory(require('./WebApp'));

// Render the web app
ReactDOM.render(WebApp(), document.getElementById('web-app'));
