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

var _class, _temp; /*
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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Auth = require('./Auth');

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRouter.withRouter)((_temp = _class = function (_Component) {
  (0, _inherits3.default)(Security, _Component);

  function Security(props) {
    (0, _classCallCheck3.default)(this, Security);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Security.__proto__ || (0, _getPrototypeOf2.default)(Security)).call(this, props));

    _this.auth = props.auth || new _Auth2.default(props);
    return _this;
  }

  (0, _createClass3.default)(Security, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        auth: this.auth
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);
  return Security;
}(_react.Component), _class.childContextTypes = {
  auth: _propTypes2.default.object.isRequired
}, _temp));