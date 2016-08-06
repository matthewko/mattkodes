// Main entry point to our application.
var React = require('react');
var ReactDOM = require('react-dom');

// Create the react app
var WebApp = React.createFactory(require('./WebApp'));

// Render the web app
ReactDOM.render(WebApp(), document.getElementById('web-app'));
