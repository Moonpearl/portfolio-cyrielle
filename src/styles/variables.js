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

export const MIN_WIDTH = Object.entries(BREAKPOINTS).reduce(
  (MIN_WIDTH, [sizeName, size]) => (MIN_WIDTH[sizeName] = makeMediaQuery('min-width', size), MIN_WIDTH), {}
);
