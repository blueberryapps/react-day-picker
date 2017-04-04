import Radium from 'radium';
import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';
import defaultStyles from './defaultStyles';

const Caption = ({ classNames, date, months, locale, localeUtils, onClick }) => {
  return (
    <div style={[defaultStyles.caption, classNames.caption]} onClick={ onClick } role="heading">
      { months ?
        `${months[date.getMonth()]} ${date.getFullYear()}` :
        localeUtils.formatMonthTitle(date, locale)
      }
    </div>
  );
}

export default Radium(Caption);

Caption.propTypes = {
  date: PropTypes.instanceOf(Date),
  months: React.PropTypes.arrayOf(React.PropTypes.string),
  locale: PropTypes.string,
  localeUtils: DayPickerPropTypes.localeUtils,
  onClick: PropTypes.func,
  classNames: PropTypes.shape({
    caption: PropTypes.object.isRequired,
  }).isRequired,
};
