import React, { Component } from 'react';

import ResetPasswordForm from '../forms/ResetPasswordForm.jsx';

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.handleResetPasswordForm = this.handleResetPasswordForm.bind(this);
  }

  handleResetPasswordForm(data) {
  }

  render() {
    return (
      <ResetPasswordForm onSubmit={this.handleResetPasswordForm}/>
    );
  }
}

export default ResetPassword;
