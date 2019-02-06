import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import LoginForm from '../forms/LoginForm.jsx';
import * as UserActions from '../../actions/users';
import * as PopupActions from '../../actions/popups';

class LoginUser extends Component {
  constructor(props) {
    super(props);

    this.handleLoginUserForm = this.handleLoginUserForm.bind(this);
  }

  componentWillUnmount () {
    this.props.removeFormErrors();
  }

  handleLoginUserForm(data) {
    this.props.authUser(data).then(() => {
      !this.props.users.errorLoginStatus && this.props.setLoginPopupVisibility(false);
    });
  }

  render() {
    return (
      <div>
        {this.props.users.errorLoginStatus &&
          <div className="error">
            <FormattedMessage id="error.loginForm" />
          </div>
        }
        <LoginForm
          onSubmit={this.handleLoginUserForm}
          i18n={this.props.i18n}
        />
      </div>
    );
  }
}

LoginUser.propTypes = {
  removeFormErrors: PropTypes.func,
  authUser: PropTypes.func,
  users: PropTypes.object
};

const mapStateToProps = (store) => {
  return {...store};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...UserActions,
    ...PopupActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);
