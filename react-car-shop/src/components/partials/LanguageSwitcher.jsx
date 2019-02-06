import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as i18n from '../../actions/i18n';

class LanguageSwitcher extends Component {
  constructor() {
    super();

    this.handleSetLanguage = this.handleSetLanguage.bind(this);
  }

  handleSetLanguage(e) {
    let activeLanguage = e.target.value;
    this.props.setLanguage(activeLanguage);
  }

  render() {
    return (
        <select
          value={this.props.i18n.locale}
          onChange={this.handleSetLanguage}
          className="languageSwitcher"
        >
          <option value="en">EN</option>
          <option value="ro">RO</option>
        </select>
    );
  }
}

const mapStateToProps = (store) => {
  return {...store};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...i18n
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);
