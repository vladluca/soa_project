import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const TableView = props => {
  const { itemsList, handleAction, redirect } = props;

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th><FormattedMessage id="label.no" /></th>
          <th>
            <FormattedMessage id="car.mark"/>&nbsp;
            <FormattedMessage id="label.and"/>&nbsp;
            <FormattedMessage id="car.model"/>
          </th>
          <th><FormattedMessage id="label.startDate" /></th>
          <th><FormattedMessage id="label.endDate" /></th>
          {(redirect || handleAction) &&
            <th><FormattedMessage id="label.actions" /></th>
          }
        </tr>
      </thead>
      <tbody>
        {itemsList.map((item, index) => {
          return (
            <tr
              className="warning"
              key={index}
            >
              <td>{index + 1}</td>
              <td>{item.carMark + ' ' + item.carModel}</td>
              <td>{moment(item.startDate).format('DD-MM-YYYY')}</td>
              <td>{moment(item.endDate).format('DD-MM-YYYY')}</td>
              {(redirect || handleAction) &&
                <td className="actions-btn">
                  {redirect &&
                    <Link
                      className="action-btn"
                      to={redirect + `${item.bookingId}`}
                    >
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      />
                    </Link>
                  }
                  {handleAction &&
                    <Button
                      className="action-btn"
                      onClick={_.partial(handleAction, item.bookingId)}
                    >
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"
                      />
                    </Button>
                  }
                </td>
              }
             </tr>
          );
        }
        )}
      </tbody>
    </table>
  );
};

TableView.propTypes = {
  listDetails: PropTypes.object,
  handleAction: PropTypes.func,
  redirect: PropTypes.string
};

export default TableView;
