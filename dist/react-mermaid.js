'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mermaid = require('mermaid');

var _mermaid2 = _interopRequireDefault(_mermaid);

var PropTypes = require('prop-types');

var createReactClass = require('create-react-class');

var Mermaid = createReactClass({
  displayName: 'Mermaid',

  propTypes: {
    name: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      name: 'mermaid'
    };
  },

  getInitialState: function getInitialState() {
    return {
      diagram: 'Loading diagram...'
    };
  },

  componentDidMount: function componentDidMount() {
    var _this = this;
    if(this.props.children instanceof Array) {
      _mermaid.mermaidAPI.render(this.props.name, this.props.children.join(' ').toString(), function (html) {
        return _this.setState({ diagram: html });
      });
    } else {
      _mermaid.mermaidAPI.render(this.props.name, this.props.children.toString(), function (html) {
        return _this.setState({ diagram: html });
      });
    }

    if(_this.props.onReady) {
      window.setTimeout(_this.props.onReady, 300);
    }

  },

  render: function render() {
    return _react2['default'].createElement('div', { className: 'mermaid', dangerouslySetInnerHTML: { __html: this.state.diagram } });
  }
});

exports['default'] = Mermaid;
module.exports = exports['default'];
