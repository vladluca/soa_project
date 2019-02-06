import _ from 'lodash';
import moment from 'moment';

export function requestFormat(data) {
  return _.omit(data, ['__v', '_id']);
}

export function requestUserFormat(data) {
  return _.omit(data, ['confirmPassword']);
}

export function requestBookingFormat(data) {
  data.startDate = moment.utc(data.startDate).format('YYYY-MM-DD');
  data.endDate = moment.utc(data.endDate).format('YYYY-MM-DD');

  return data;
}

export function bookingDetailsFormat(carDetails, bookingDetails) {
  let bookingDetailsFormat = {
    carId: carDetails._id,
    carModel: carDetails.model,
    carMark: carDetails.mark,
    bookingId: bookingDetails._id,
    startDate: bookingDetails.startDate,
    endDate: bookingDetails.endDate
  };

  return bookingDetailsFormat;
}

export const filterByDate = ({startDate, endDate}, list) => {
  return _.filter(list, function(item) {
    if (appliedCondition(startDate, endDate, item)) {
      return item;
    }
  });
};

function appliedCondition(startDate, endDate, item) {
  if (startDate && endDate) {
    return dateAndCondition(startDate, endDate, item);
  }
  else {
    return dateOrCondition(startDate, endDate, item);
  }
}
function dateOrCondition(startDate, endDate, item) {
  return (startDate
    &&
    moment.utc(item.startDate).isSameOrAfter(moment.utc(startDate)) ||
    endDate &&
    moment.utc(item.endDate).isSameOrBefore(moment.utc(endDate)));
}

function dateAndCondition(startDate, endDate, item) {
  return (moment.utc(item.startDate).isSameOrAfter(moment.utc(startDate)) &&
    moment.utc(item.endDate).isSameOrBefore(moment.utc(endDate)));
}
