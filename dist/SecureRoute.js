'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _withAuth = require('./withAuth');

var _withAuth2 = _interopRequireDefault(_withAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _withAuth2.default)(function (_Component) {
  (0, _inherits3.default)(SecureRoute, _Component);

  function SecureRoute(props) {
    (0, _classCallCheck3.default)(this, SecureRoute);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SecureRoute.__proto__ || (0, _getPrototypeOf2.default)(SecureRoute)).call(this, props));

    _this.state = {
      authenticated: null
    };

    _this.checkAuthentication = _this.checkAuthentication.bind(_this);
    _this.renderWrapper = _this.renderWrapper.bind(_this);

    _this.checkAuthentication();
    return _this;
  }

  (0, _createClass3.default)(SecureRoute, [{
    key: 'checkAuthentication',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var authenticated;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.auth.isAuthenticated();

              case 2:
                authenticated = _context.sent;

                if (authenticated !== this.state.authenticated) {
                  this.setState({ authenticated: authenticated });
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkAuthentication() {
        return _ref.apply(this, arguments);
      }

      return checkAuthentication;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.checkAuthentication();
    }
  }, {
    key: 'renderWrapper',
    value: function renderWrapper(renderProps) {
      if (this.state.authenticated === null) {
        return null;
      }

      if (!this.state.authenticated) {
        this.props.auth.login();
        return null;
      }

      var C = this.props.component;
      return this.props.render ? this.props.render(renderProps) : _react2.default.createElement(C, renderProps);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouter.Route, { path: this.props.path, render: this.renderWrapper });
    }
  }]);
  return SecureRoute;
}(_react.Component)); /*
                       * Copyright (c) 2017, Okta, Inc. and/or its affiliates. All rights reserved.
                       * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
                       *
                       * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
                       * Unless required by applicable law or agreed to in writing, software
                       * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
                       * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                       *
                       * See the License for the specific language governing permissions and limitations under the License.
                       */