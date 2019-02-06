import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import * as PopupActions from '../../actions/popups';
import * as UserActions from '../../actions/users';
import LogoImg from '../../assets/images/logo.png';
import LanguageSwitcher from '../partials/LanguageSwitcher';

class Header extends Component {
  render() {
    const { users } = this.props;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="logo">
              <Link to={`/`}>
                <img
                  src={LogoImg}
                  alt="Logo car shop"
                />
              </Link>
            </div>
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand">{_.get(users, 'userData.email', null)}</a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <LanguageSwitcher />
            <ul className="nav navbar-nav navbar-right">
              <li>
                {
                  users.userData ? (
                    <div>
                      <Link to="/my-bookings">
                        <FormattedMessage id="booking.myBookings" />
                      </Link>
                      <Button onClick={_.partial(this.props.logoutUser)}>
                        <FormattedMessage id="label.logout" />
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Button
                        onClick={_.partial(this.props.setLoginPopupVisibility, true)}
                      >
                        <FormattedMessage id="label.login" />
                      </Button>
                      <Link to="/register">
                        <FormattedMessage id="label.register" />
                      </Link>
                    </div>
                  )
                }
              </li>
            </ul>
          </div>
        </div>
    </nav>
    );
  }
}

Header.propTypes = {
  users: PropTypes.object,
  setLoginPopupVisibility: PropTypes.func,
  logoutUser: PropTypes.func
};

const mapStateToProps = (store) => {
  return {...store};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...PopupActions,
    ...UserActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
