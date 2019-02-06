import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage, IntlProvider } from 'react-intl';

import Header from './partials/Header.jsx';
import Footer from './partials/Footer.jsx';
import Login from './popups/Login.jsx';
import * as PopupActions from '../actions/popups';
import * as i18nActions from '../actions/i18n';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLoginPopupVisibility = this.handleLoginPopupVisibility.bind(this);
    this.handleMessagePopupVisibility = this.handleMessagePopupVisibility.bind(this);
  }

  componentWillMount() {
    if (!this.props.messages) {
      this.props.setLanguage();
    }
  }

  handleLoginPopupVisibility() {
    this.props.setLoginPopupVisibility(false);
  }

  handleMessagePopupVisibility() {
    this.props.setMessagePopupVisibility(false);
  }

  render() {
    if (!this.props.i18n.messages) {
      return null;
    }

    return (
      <IntlProvider
        locale={this.props.i18n.locale}
        messages={this.props.i18n.messages}
      >
        <div>
          <Modal
            show={this.props.popups.isLoginPopupVisible}
            onHide={this.handleLoginPopupVisibility}
            className="modal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="modal-title">
                <FormattedMessage id="label.login" />
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Login/>
            </Modal.Body>
          </Modal>

          <Modal
            show={this.props.popups.isMessagePopupVisible}
            onHide={this.handleMessagePopupVisibility}
          >
            <Modal.Header closeButton>
              <FormattedMessage id="label.message" />
            </Modal.Header>

            <Modal.Body>
              {this.props.popups.message}
            </Modal.Body>
          </Modal>

          <Header/>
          <main>
            {this.props.children}
          </main>
          <Footer />
        </div>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  setLoginPopupVisibility: PropTypes.func,
  setMessagePopupVisibility: PropTypes.func,
  popups: PropTypes.object,
  children: PropTypes.object.isRequired
};

const mapStateProps = (store) => {
  return {...store};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...PopupActions,
    ...i18nActions
  }, dispatch);
};

export default withRouter(connect(mapStateProps, mapDispatchToProps)(App));
