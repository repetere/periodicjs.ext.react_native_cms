(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

System.register([], function (_export2, _context2) {
  "use strict";

  var _typeof;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      System.register(['react', 'react-native', 'react-native-router-flux'], function (_export, _context) {
        "use strict";

        var React, Component, AppRegistry, StyleSheet, Text, View, Platform, Router, Scene, _createClass, react_native_cms, styles, app;

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        return {
          setters: [function (_react) {
            React = _react.default;
            Component = _react.Component;
          }, function (_reactNative) {
            AppRegistry = _reactNative.AppRegistry;
            StyleSheet = _reactNative.StyleSheet;
            Text = _reactNative.Text;
            View = _reactNative.View;
            Platform = _reactNative.Platform;
          }, function (_reactNativeRouterFlux) {
            Router = _reactNativeRouterFlux.Router;
            Scene = _reactNativeRouterFlux.Scene;
          }],
          execute: function execute() {
            _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }

              return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();

            react_native_cms = function (_Component) {
              _inherits(react_native_cms, _Component);

              function react_native_cms() {
                _classCallCheck(this, react_native_cms);

                return _possibleConstructorReturn(this, (react_native_cms.__proto__ || Object.getPrototypeOf(react_native_cms)).apply(this, arguments));
              }

              _createClass(react_native_cms, [{
                key: 'render',
                value: function render() {
                  return React.createElement(View, { style: styles.container }, React.createElement(Text, { style: styles.welcome }, 'Welcome to React Native CMS!'), React.createElement(Text, { style: styles.instructions }, 'To get started, edit index.ios.js'), React.createElement(Text, { style: styles.instructions }, 'Press Cmd+R to reload,', '\n', 'Cmd+D or shake for dev menu'));
                }
              }]);

              return react_native_cms;
            }(Component);

            styles = StyleSheet.create({
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

            AppRegistry.registerComponent('react_native_cms', function () {
              return react_native_cms;
            });
            if (Platform.OS == 'web') {
              app = document.createElement('div');

              document.body.appendChild(app);
              AppRegistry.runApplication('react_native_cms', {
                rootTag: app
              });
            }
          }
        };
      });
    }
  };
});

},{}]},{},[1]);
