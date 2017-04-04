/* eslint-disable jsx-a11y/no-static-element-interactions, react/forbid-prop-types */

import Radium from 'radium';
import React, { PropTypes } from 'react';
import defaultStyles from './defaultStyles';

function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  return (e) => {
    e.persist();
    handler(day, modifiers, e);
  };
}
const Day = ({
  classNames,
  interactionDisabled,
  day,
  tabIndex,
  empty,
  modifiers,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onKeyDown,
  onTouchStart,
  onTouchEnd,
  onFocus,
  ariaLabel,
  ariaDisabled,
  ariaSelected,
  children,
}) => {
  const className = [
    defaultStyles.day,
    classNames.day,
    modifiers.map((modifier) => [defaultStyles[modifier], classNames[modifier]]),
    interactionDisabled && defaultStyles.interactionDisabled
  ];

  const resolvedClassNames= `DayPicker--day ${modifiers.includes('outside') ? 'DayPicker--day__outside' : ''}`;

  if (empty) {
    return <div role="gridcell" aria-disabled style={ className } className={resolvedClassNames} />;
  }

  return (
    <div
      style={ className }
      tabIndex={ tabIndex }
      role="gridcell"
      className={resolvedClassNames}
      aria-label={ ariaLabel }
      aria-disabled={ ariaDisabled.toString() }
      aria-selected={ ariaSelected.toString() }
      onClick={ handleEvent(onClick, day, modifiers) }
      onKeyDown={ handleEvent(onKeyDown, day, modifiers) }
      onMouseEnter={ handleEvent(onMouseEnter, day, modifiers) }
      onMouseLeave={ handleEvent(onMouseLeave, day, modifiers) }
      onTouchEnd={ handleEvent(onTouchEnd, day, modifiers) }
      onTouchStart={ handleEvent(onTouchStart, day, modifiers) }
      onFocus={ handleEvent(onFocus, day, modifiers) }
    >
      {children}
    </div>
  );
}

export default Radium(Day);

Day.propTypes = {

  classNames: PropTypes.shape({
    day: PropTypes.object,
  }),

  day: PropTypes.instanceOf(Date).isRequired,
  children: PropTypes.node.isRequired,

  ariaDisabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaSelected: PropTypes.bool,
  empty: PropTypes.bool,
  modifiers: PropTypes.object,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchStart: PropTypes.func,
  onFocus: PropTypes.func,
  tabIndex: PropTypes.number,
  interactionDisabled: PropTypes.bool,
};

Day.defaultProps = {
  modifiers: {},
  empty: false,
};
