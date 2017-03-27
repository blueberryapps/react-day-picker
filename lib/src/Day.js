'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classNames = require('./classNames');

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint-disable jsx-a11y/no-static-element-interactions, react/forbid-prop-types */

function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  return function (e) {
    e.persist();
    handler(day, modifiers, e);
  };
}
var Day = function Day(_ref) {
  var classNames = _ref.classNames,
      interactionDisabled = _ref.interactionDisabled,
      day = _ref.day,
      tabIndex = _ref.tabIndex,
      empty = _ref.empty,
      modifiers = _ref.modifiers,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      onTouchStart = _ref.onTouchStart,
      onTouchEnd = _ref.onTouchEnd,
      onFocus = _ref.onFocus,
      ariaLabel = _ref.ariaLabel,
      ariaDisabled = _ref.ariaDisabled,
      ariaSelected = _ref.ariaSelected,
      children = _ref.children;

  var className = [classNames.day].concat(_toConsumableArray(modifiers), [interactionDisabled && classNames.interactionDisabled]);

  if (empty) {
    return _react2.default.createElement('div', { role: 'gridcell', 'aria-disabled': true, style: className });
  }

  return _react2.default.createElement(
    'div',
    {
      style: className,
      tabIndex: tabIndex,
      role: 'gridcell',
      'aria-label': ariaLabel,
      'aria-disabled': ariaDisabled.toString(),
      'aria-selected': ariaSelected.toString(),
      onClick: handleEvent(onClick, day, modifiers),
      onKeyDown: handleEvent(onKeyDown, day, modifiers),
      onMouseEnter: handleEvent(onMouseEnter, day, modifiers),
      onMouseLeave: handleEvent(onMouseLeave, day, modifiers),
      onTouchEnd: handleEvent(onTouchEnd, day, modifiers),
      onTouchStart: handleEvent(onTouchStart, day, modifiers),
      onFocus: handleEvent(onFocus, day, modifiers)
    },
    children
  );
};

exports.default = (0, _radium2.default)(Day);


Day.propTypes = {

  classNames: _react.PropTypes.shape({
    day: _react.PropTypes.object.isRequired
  }).isRequired,

  day: _react.PropTypes.instanceOf(Date).isRequired,
  children: _react.PropTypes.node.isRequired,

  ariaDisabled: _react.PropTypes.bool,
  ariaLabel: _react.PropTypes.string,
  ariaSelected: _react.PropTypes.bool,
  empty: _react.PropTypes.bool,
  modifiers: _react.PropTypes.object,
  onClick: _react.PropTypes.func,
  onKeyDown: _react.PropTypes.func,
  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onTouchEnd: _react.PropTypes.func,
  onTouchStart: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  tabIndex: _react.PropTypes.number,
  interactionDisabled: _react.PropTypes.bool
};

Day.defaultProps = {
  modifiers: {},
  empty: false
};
//# sourceMappingURL=Day.js.map