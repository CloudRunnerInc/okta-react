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

import React, { Component } from 'react';
import withAuth from './withAuth';

export default withAuth(class ImplicitCallback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: null,
      error: null
    };

    props.auth.handleAuthentication()
    .then(() => {
      this.setState({ authenticated: true });
    })
    .catch(err => this.setState({ authenticated: false, error: err.toString() }));
  }

  render() {
    if (this.state.authenticated === null) {
      return null;
    } else {
      const referrerKey = 'secureRouterReferrerPath';
      const pathname = localStorage.getItem(referrerKey) || '/';
      localStorage.removeItem(referrerKey);
      this.props.history.replace(pathname);
      return null;
    }
  }
});
