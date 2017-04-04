import Radium from 'radium';
import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';
import defaultStyles from './defaultStyles';

const Weekdays = ({
  classNames,
  firstDayOfWeek,
  weekdaysLong,
  weekdaysShort,
  locale,
  localeUtils,
  weekdayElement,
}) => {
  const days = [];
  for (let i = 0; i < 7; i += 1) {
    const weekday = (i + firstDayOfWeek) % 7;
    const elementProps = {
      key: i,
      className: classNames.weekday,
      weekday,
      weekdaysLong,
      weekdaysShort,
      localeUtils,
      locale,
    };
    const element = React.isValidElement(weekdayElement) ?
      React.cloneElement(weekdayElement, elementProps) :
      React.createElement(weekdayElement, elementProps);
    days.push(element);
  }

  return (
    <div style={[defaultStyles.weekdays, classNames.weekdays]} role="rowgroup">
      <div style={[defaultStyles.weekdaysRow, classNames.weekdaysRow]} role="row">
        { days }
      </div>
    </div>
  );
}

export default Radium(Weekdays);

Weekdays.propTypes = {

  classNames: PropTypes.shape({
    weekday: PropTypes.object.isRequired,
    weekdays: PropTypes.object.isRequired,
    weekdaysRow: PropTypes.object.isRequired,
  }).isRequired,

  firstDayOfWeek: PropTypes.number.isRequired,
  weekdaysLong: PropTypes.arrayOf(PropTypes.string),
  weekdaysShort: PropTypes.arrayOf(PropTypes.string),
  locale: PropTypes.string.isRequired,
  localeUtils: DayPickerPropTypes.localeUtils.isRequired,
  weekdayElement: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.instanceOf(React.Component),
  ]),
};
