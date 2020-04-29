export const BREAKPOINTS = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

const makeMediaQuery = (property, size) =>
  `(${property}: ${size})`
;

export const MIN_WIDTH = Object.fromEntries(
  Object.entries(BREAKPOINTS).map(
    ([sizeName, size]) => [sizeName, makeMediaQuery('min-width', size)]
  )
);
