'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('./PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _Weekdays = require('./Weekdays');

var _Weekdays2 = _interopRequireDefault(_Weekdays);

var _defaultStyles = require('./defaultStyles');

var _defaultStyles2 = _interopRequireDefault(_defaultStyles);

var _Helpers = require('./Helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Month = function Month(_ref) {
  var styles = _ref.styles,
      month = _ref.month,
      months = _ref.months,
      fixedWeeks = _ref.fixedWeeks,
      captionElement = _ref.captionElement,
      weekdayElement = _ref.weekdayElement,
      locale = _ref.locale,
      localeUtils = _ref.localeUtils,
      weekdaysLong = _ref.weekdaysLong,
      weekdaysShort = _ref.weekdaysShort,
      firstDayOfWeek = _ref.firstDayOfWeek,
      onCaptionClick = _ref.onCaptionClick,
      children = _ref.children;

  var captionProps = {
    date: month,
    styles: styles,
    months: months,
    localeUtils: localeUtils,
    locale: locale,
    onClick: onCaptionClick ? function (e) {
      return onCaptionClick(month, e);
    } : undefined
  };
  var caption = _react2.default.isValidElement(captionElement) ? _react2.default.cloneElement(captionElement, captionProps) : _react2.default.createElement(captionElement, captionProps);

  var weeks = (0, _Helpers.getWeekArray)(month, firstDayOfWeek, fixedWeeks);
  return _react2.default.createElement(
    'div',
    { style: [_defaultStyles2.default.month, styles.month], role: 'grid' },
    caption,
    _react2.default.createElement(_Weekdays2.default, {
      styles: styles,
      weekdaysShort: weekdaysShort,
      weekdaysLong: weekdaysLong,
      firstDayOfWeek: firstDayOfWeek,
      locale: locale,
      localeUtils: localeUtils,
      weekdayElement: weekdayElement
    }),
    _react2.default.createElement(
      'div',
      { style: [_defaultStyles2.default.body, styles.body], role: 'rowgroup' },
      weeks.map(function (week, j) {
        return _react2.default.createElement(
          'div',
          { key: j, style: [_defaultStyles2.default.week, styles.week], role: 'gridcell' },
          week.map(function (day) {
            return children(day, month);
          })
        );
      })
    )
  );
};

exports.default = (0, _radium2.default)(Month);


Month.propTypes = {
  styles: _react.PropTypes.shape({
    month: _react.PropTypes.object,
    body: _react.PropTypes.object,
    week: _react.PropTypes.object
  }),

  month: _react.PropTypes.instanceOf(Date).isRequired,
  months: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),

  fixedWeeks: _react.PropTypes.bool,
  captionElement: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.instanceOf(_react2.default.Component)]).isRequired,
  weekdayElement: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.instanceOf(_react2.default.Component)]),

  locale: _react.PropTypes.string.isRequired,
  localeUtils: _PropTypes2.default.localeUtils.isRequired,
  weekdaysLong: _react.PropTypes.arrayOf(_react.PropTypes.string),
  weekdaysShort: _react.PropTypes.arrayOf(_react.PropTypes.string),
  firstDayOfWeek: _react.PropTypes.number.isRequired,

  onCaptionClick: _react.PropTypes.func,

  children: _react.PropTypes.func.isRequired
};
//# sourceMappingURL=Month.js.map