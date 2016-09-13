'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Sample React Native App
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/facebook/react-native
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var react_native_cms = function (_Component) {
  _inherits(react_native_cms, _Component);

  function react_native_cms() {
    _classCallCheck(this, react_native_cms);

    return _possibleConstructorReturn(this, (react_native_cms.__proto__ || Object.getPrototypeOf(react_native_cms)).apply(this, arguments));
  }

  _createClass(react_native_cms, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container },
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.welcome },
          'Welcome to React Native CMS!'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.instructions },
          'To get started, edit index.ios.js'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.instructions },
          'Press Cmd+R to reload,',
          '\n',
          'Cmd+D or shake for dev menu'
        )
      );
    }
  }]);

  return react_native_cms;
}(_react.Component);

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

_reactNative.AppRegistry.registerComponent('react_native_cms', function () {
  return react_native_cms;
});
if (_reactNative.Platform.OS == 'web') {
  var app = document.createElement('div');
  document.body.appendChild(app);
  _reactNative.AppRegistry.runApplication('react_native_cms', {
    rootTag: app
  });
}
//# sourceMappingURL=index.babel.ios.js.map
