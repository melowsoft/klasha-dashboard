import { css } from 'styled-components';

export const deviceBreakpoints = {
  xs: '425px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xlg: '1440px',
  xxlg: '1650px',
};

export const deviceBreakpointsWithoutUnit = {
  xs: 425,
  sm: 768,
  md: 992,
  lg: 1200,
  xlg: 1440,
  xxlg: 1650,
};

// if min-width is 768px, max-width should be 767px
export const breakpoint = Object.keys(deviceBreakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${deviceBreakpointsWithoutUnit[label] - 1}px) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

export const min_breakpoint = Object.keys(deviceBreakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${deviceBreakpointsWithoutUnit[label]}px) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);