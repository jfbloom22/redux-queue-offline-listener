'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxQueueOffline = require('redux-queue-offline');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NetworkListener = (Provider) => {
  return class NetworkListenerComponent extends _react.Component {
    constructor(props) {
    super(props);
    }
    // static displayName = 'NetworkListener'
    componentDidMount() {
      if (window && window.addEventListener) {
        window.addEventListener('online', this._onlineListener);
        window.addEventListener('offline', this._offlineListener);
      }
    }
    componentWillUnmount() {
      if (window && window.removeEventListener) {
        window.removeEventListener('online', this._onlineListener);
        window.removeEventListener('offline', this._offlineListener);
      }
    }
    render() {
      return _react2.default.createElement(Provider, this.props);
    }
    _onlineListener() {
      this.props.store.dispatch({
        type: _reduxQueueOffline.ONLINE
      });
    }
    _offlineListener() {
      this.props.store.dispatch({
        type: _reduxQueueOffline.OFFLINE
      });
    }
  };
};

exports.default = NetworkListener;