import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import RegisterForm from '../components/forms/RegisterForm';
import * as UserActions from '../actions/users';

class Register extends Component {
  constructor(props) {
    super(props);

    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  }

  componentWillUnmount () {
    this.props.removeFormErrors();
  }

  handleRegisterSubmit(data) {
    this.props.addUser(data).then(() => {
      !this.props.users.errorRegisterStatus && this.props.history.push('/');
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">
          <FormattedMessage id="label.register" />
        </h1>
        {this.props.users.errorRegisterStatus &&
          <div className="error">
            <FormattedMessage id="error.registrationForm" />
          </div>
        }
        <RegisterForm
          onSubmit={this.handleRegisterSubmit}
          i18n={this.props.i18n}
        />
      </div>
    );
  }
}

Register.propTypes = {
  removeFormErrors: PropTypes.func,
  addUser: PropTypes.func,
  users: PropTypes.object
};

const mapStateToProps = (store) => {
  return {...store};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...UserActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
