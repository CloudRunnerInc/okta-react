'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _withAuth = require('./withAuth');

var _withAuth2 = _interopRequireDefault(_withAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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

exports.default = (0, _withAuth2.default)(function (_Component) {
  (0, _inherits3.default)(ImplicitCallback, _Component);

  function ImplicitCallback(props) {
    (0, _classCallCheck3.default)(this, ImplicitCallback);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ImplicitCallback.__proto__ || (0, _getPrototypeOf2.default)(ImplicitCallback)).call(this, props));

    _this.state = {
      authenticated: null,
      error: null
    };

    props.auth.handleAuthentication().then(function () {
      _this.setState({ authenticated: true });
    }).catch(function (err) {
      return _this.setState({ authenticated: false, error: err.toString() });
    });
    return _this;
  }

  (0, _createClass3.default)(ImplicitCallback, [{
    key: 'render',
    value: function render() {
      if (this.state.authenticated === null) {
        return null;
      } else {
        var referrerKey = 'secureRouterReferrerPath';
        var pathname = localStorage.getItem(referrerKey) || '/';
        localStorage.removeItem(referrerKey);
        this.props.history.replace(pathname);
        return null;
      }
    }
  }]);
  return ImplicitCallback;
}(_react.Component));