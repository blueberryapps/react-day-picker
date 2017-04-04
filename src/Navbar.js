import Radium from 'radium';
import React, { PropTypes } from 'react';

import defaultClassNames from './classNames';
import defaultStyles from './defaultStyles';

const Navbar = ({
  classNames,
  className,
  showPreviousButton,
  showNextButton,
  onPreviousClick,
  onNextClick,
  labels,
  dir,
}) => {
  const previousClickHandler = dir === 'rtl' ? onNextClick : onPreviousClick;
  const nextClickHandler = dir === 'rtl' ? onPreviousClick : onNextClick;

  const previousButton = showPreviousButton &&
    <span
      role="button"
      aria-label={ labels.previousMonth }
      key="previous"
      style={[defaultStyles.navButtonPrev, classNames.navButtonPrev]}
      onClick={ () => previousClickHandler() }
    />;

  const nextButton = showNextButton &&
    <span
      role="button"
      aria-label={ labels.nextMonth }
      key="right"
      style={[defaultStyles.navButtonNext, classNames.navButtonNext]}
      onClick={ () => nextClickHandler() }
    />;

  return (
    <div style={[defaultStyles.navbar, classNames.navBar, className]}>
      {dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]}
    </div>
  );
}

export default Radium(Navbar);

export const NavbarPropTypes = {
  classNames: PropTypes.shape({
    navBar: PropTypes.object.isRequired,
    navButtonPrev: PropTypes.object.isRequired,
    navButtonNext: PropTypes.object.isRequired,
  }),
  className: PropTypes.object,
  showPreviousButton: PropTypes.bool,
  showNextButton: PropTypes.bool,
  onPreviousClick: PropTypes.func,
  onNextClick: PropTypes.func,
  dir: PropTypes.string,
  labels: PropTypes.shape({
    previousMonth: PropTypes.string.isRequired,
    nextMonth: PropTypes.string.isRequired,
  }),
};

Navbar.propTypes = NavbarPropTypes;

Navbar.defaultProps = {
  classNames: defaultClassNames,
  dir: 'ltr',
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month',
  },
  showPreviousButton: true,
  showNextButton: true,
};
