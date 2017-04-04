import Radium from 'radium';
import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';
import defaultStyles from './defaultStyles';

const Weekday = ({
  weekday,
  className,
  weekdaysLong,
  weekdaysShort,
  localeUtils,
  locale,
}) => {
  let title;
  if (weekdaysLong) {
    title = weekdaysLong[weekday];
  } else {
    title = localeUtils.formatWeekdayLong(weekday, locale);
  }
  let content;
  if (weekdaysShort) {
    content = weekdaysShort[weekday];
  } else {
    content = localeUtils.formatWeekdayShort(weekday, locale);
  }

  return (
    <div style={[defaultStyles.weekday, className]} role="columnheader">
      <abbr title={ title }>
        {content}
      </abbr>
    </div>
  );
}

export default Radium(Weekday);

export const WeekdayPropTypes = {
  weekday: PropTypes.number,
  className: PropTypes.object,
  locale: PropTypes.string,
  localeUtils: DayPickerPropTypes.localeUtils,

  weekdaysLong: PropTypes.arrayOf(PropTypes.string),
  weekdaysShort: PropTypes.arrayOf(PropTypes.string),
};

Weekday.propTypes = WeekdayPropTypes;
