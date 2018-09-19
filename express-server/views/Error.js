var React = require('react');

class Error extends React.Component {
  render() {
    return <div>404 Error page {this.props.name}</div>;
  }
}

module.exports = Error;