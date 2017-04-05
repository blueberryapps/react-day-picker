import Radium from 'radium';
import React, { PropTypes } from 'react';

import defaultStyles from './defaultStyles';

const Navbar = ({
  styles,
  style,
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
      style={[defaultStyles.navButtonPrev, styles.navButtonPrev]}
      onClick={ () => previousClickHandler() }
    />;

  const nextButton = showNextButton &&
    <span
      role="button"
      aria-label={ labels.nextMonth }
      key="right"
      style={[defaultStyles.navButtonNext, styles.navButtonNext]}
      onClick={ () => nextClickHandler() }
    />;

  return (
    <div style={[defaultStyles.navbar, styles.navBar, style]}>
      {dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]}
    </div>
  );
}

export default Radium(Navbar);

export const NavbarPropTypes = {
  styles: PropTypes.shape({
    navBar: PropTypes.object,
    navButtonPrev: PropTypes.object,
    navButtonNext: PropTypes.object,
  }),
  style: PropTypes.object,
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
  dir: 'ltr',
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month',
  },
  showPreviousButton: true,
  showNextButton: true,
};
