import { connect } from 'react-redux';

// Constants
export const LOCALES = [
  { index: 0, name: 'English', prefix: '', code: 'en' },
  { index: 1, name: 'Français', prefix: 'fr', code: 'fr' },
];

const initialState = {
  current: 0,
}

const SET_LOCALE = 'SET_LOCALE';

// Action generators
export const setLocaleGenerator = value => ({
  type: SET_LOCALE,
  value,
});

// Component wrapper
export const withLocale = Component => connect(
  state => ({ currentLocale: LOCALES[state.locale.current] }),
  dispatch => ({ setLocale: value => dispatch(setLocaleGenerator(value)) })
)(Component);

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCALE:
      return {...state, current: action.value};
    default:
      return state;
  }
};
