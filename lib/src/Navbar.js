'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarPropTypes = undefined;

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defaultStyles = require('./defaultStyles');

var _defaultStyles2 = _interopRequireDefault(_defaultStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(_ref) {
  var styles = _ref.styles,
      style = _ref.style,
      showPreviousButton = _ref.showPreviousButton,
      showNextButton = _ref.showNextButton,
      onPreviousClick = _ref.onPreviousClick,
      onNextClick = _ref.onNextClick,
      labels = _ref.labels,
      dir = _ref.dir;

  var previousClickHandler = dir === 'rtl' ? onNextClick : onPreviousClick;
  var nextClickHandler = dir === 'rtl' ? onPreviousClick : onNextClick;

  var previousButton = showPreviousButton && _react2.default.createElement('span', {
    role: 'button',
    'aria-label': labels.previousMonth,
    key: 'previous',
    style: [_defaultStyles2.default.navButtonPrev, styles.navButtonPrev],
    onClick: function onClick() {
      return previousClickHandler();
    }
  });

  var nextButton = showNextButton && _react2.default.createElement('span', {
    role: 'button',
    'aria-label': labels.nextMonth,
    key: 'right',
    style: [_defaultStyles2.default.navButtonNext, styles.navButtonNext],
    onClick: function onClick() {
      return nextClickHandler();
    }
  });

  return _react2.default.createElement(
    'div',
    { style: [_defaultStyles2.default.navbar, styles.navBar, style] },
    dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]
  );
};

exports.default = (0, _radium2.default)(Navbar);
var NavbarPropTypes = exports.NavbarPropTypes = {
  styles: _react.PropTypes.shape({
    navBar: _react.PropTypes.object,
    navButtonPrev: _react.PropTypes.object,
    navButtonNext: _react.PropTypes.object
  }),
  style: _react.PropTypes.object,
  showPreviousButton: _react.PropTypes.bool,
  showNextButton: _react.PropTypes.bool,
  onPreviousClick: _react.PropTypes.func,
  onNextClick: _react.PropTypes.func,
  dir: _react.PropTypes.string,
  labels: _react.PropTypes.shape({
    previousMonth: _react.PropTypes.string.isRequired,
    nextMonth: _react.PropTypes.string.isRequired
  })
};

Navbar.propTypes = NavbarPropTypes;

Navbar.defaultProps = {
  dir: 'ltr',
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  showPreviousButton: true,
  showNextButton: true
};
//# sourceMappingURL=Navbar.js.map