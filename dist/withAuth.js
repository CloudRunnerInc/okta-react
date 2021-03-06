'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Secure = require('./Secure');

var _Secure2 = _interopRequireDefault(_Secure);

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

var withAuth = function withAuth(Component) {
  var C = function C(props) {
    return _react2.default.createElement(_Secure2.default, { render: function render(secureComponentProps) {
        return _react2.default.createElement(Component, (0, _extends3.default)({}, props, secureComponentProps));
      } });
  };

  C.displayName = 'withAuth(' + (Component.displayName || Component.name) + ')';

  return C;
};

exports.default = withAuth;