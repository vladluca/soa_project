import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ContactActions from '../../actions/contact';

class Footer extends Component {

  componentDidMount() {
    this.props.getContactInfo();
  }

  render() {
    const { email, telephone } = this.props.contactInfo;

    return (
      <footer>
        <div className="container">
          <FormattedMessage id="footer.copyright" />

          <div style={{ textAlign: "right" }}>
            <FormattedMessage
              id="footer.contact_info"
              values={{ email, telephone }}
            />
          </div>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    contactInfo: {
      email: store.contact.email,
      telephone: store.contact.telephone
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...ContactActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
