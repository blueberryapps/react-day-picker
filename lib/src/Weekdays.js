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

var _defaultStyles = require('./defaultStyles');

var _defaultStyles2 = _interopRequireDefault(_defaultStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Weekdays = function Weekdays(_ref) {
  var styles = _ref.styles,
      firstDayOfWeek = _ref.firstDayOfWeek,
      weekdaysLong = _ref.weekdaysLong,
      weekdaysShort = _ref.weekdaysShort,
      locale = _ref.locale,
      localeUtils = _ref.localeUtils,
      weekdayElement = _ref.weekdayElement;

  var days = [];
  for (var i = 0; i < 7; i += 1) {
    var weekday = (i + firstDayOfWeek) % 7;
    var elementProps = {
      key: i,
      style: styles.weekday,
      weekday: weekday,
      weekdaysLong: weekdaysLong,
      weekdaysShort: weekdaysShort,
      localeUtils: localeUtils,
      locale: locale
    };
    var element = _react2.default.isValidElement(weekdayElement) ? _react2.default.cloneElement(weekdayElement, elementProps) : _react2.default.createElement(weekdayElement, elementProps);
    days.push(element);
  }

  return _react2.default.createElement(
    'div',
    { style: [_defaultStyles2.default.weekdays, styles.weekdays], role: 'rowgroup' },
    _react2.default.createElement(
      'div',
      { style: [_defaultStyles2.default.weekdaysRow, styles.weekdaysRow], role: 'row' },
      days
    )
  );
};

exports.default = (0, _radium2.default)(Weekdays);


Weekdays.propTypes = {

  styles: _react.PropTypes.shape({
    weekday: _react.PropTypes.object,
    weekdays: _react.PropTypes.object,
    weekdaysRow: _react.PropTypes.object
  }),

  firstDayOfWeek: _react.PropTypes.number.isRequired,
  weekdaysLong: _react.PropTypes.arrayOf(_react.PropTypes.string),
  weekdaysShort: _react.PropTypes.arrayOf(_react.PropTypes.string),
  locale: _react.PropTypes.string.isRequired,
  localeUtils: _PropTypes2.default.localeUtils.isRequired,
  weekdayElement: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.instanceOf(_react2.default.Component)])
};
//# sourceMappingURL=Weekdays.js.map