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

var Caption = function Caption(_ref) {
  var styles = _ref.styles,
      date = _ref.date,
      months = _ref.months,
      locale = _ref.locale,
      localeUtils = _ref.localeUtils,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'div',
    { style: [_defaultStyles2.default.caption, styles.caption], onClick: onClick, role: 'heading' },
    months ? months[date.getMonth()] + ' ' + date.getFullYear() : localeUtils.formatMonthTitle(date, locale)
  );
};

exports.default = (0, _radium2.default)(Caption);


Caption.propTypes = {
  date: _react.PropTypes.instanceOf(Date),
  months: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
  locale: _react.PropTypes.string,
  localeUtils: _PropTypes2.default.localeUtils,
  onClick: _react.PropTypes.func,
  styles: _react.PropTypes.shape({
    caption: _react.PropTypes.object
  })
};
//# sourceMappingURL=Caption.js.map