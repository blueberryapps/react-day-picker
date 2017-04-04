import Radium from 'radium';
import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';
import defaultStyles from './defaultStyles';

const Weekdays = ({
  styles,
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
      style: styles.weekday,
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
    <div style={[defaultStyles.weekdays, styles.weekdays]} role="rowgroup">
      <div style={[defaultStyles.weekdaysRow, styles.weekdaysRow]} role="row">
        { days }
      </div>
    </div>
  );
}

export default Radium(Weekdays);

Weekdays.propTypes = {

  styles: PropTypes.shape({
    weekday: PropTypes.object,
    weekdays: PropTypes.object,
    weekdaysRow: PropTypes.object,
  }),

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
