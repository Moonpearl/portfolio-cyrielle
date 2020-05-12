import { connect } from 'react-redux';
import { navigate } from 'gatsby';

// Constants
export const LOCALES = [
  { index: 0, name: 'English', prefix: '', code: 'en' },
  { index: 1, name: 'Français', prefix: 'fr', code: 'fr' },
];

const initialState = {
  current: 0,
  checked: false,
}

const SET_LOCALE = 'SET_LOCALE';
const CHECK_LOCALE = 'CHECK_LOCALE';

// Action generators
export const setLocaleGenerator = (value, path = null) => ({
  type: SET_LOCALE,
  value,
  path,
});

export const checkLocaleGenerator = path => ({
  type: CHECK_LOCALE,
  path,
});

// Component wrapper
export const withLocale = Component => connect(
  state => ({ currentLocale: LOCALES[state.locale.current] }),
  dispatch => ({
    setLocale: (value, path = null) => dispatch(setLocaleGenerator(value, path)),
    checkLocale: path => dispatch(checkLocaleGenerator(path)),
  })
)(Component);

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOCALE:
      if (state.checked) {
        return state;
      }

      console.log(`Checking locale from path: ${action.path}`)

      let current = 0;
      for (let locale of LOCALES.slice(1, LOCALES.length)) {
        const pathArray = action.path.split('/');
        if (pathArray[1] === locale.prefix) {
          current = locale.index;
          break;
        }
      }

      return {...state, current, checked: true};

    case SET_LOCALE:
      console.log(`Setting locale to: ${action.value}`)

      if (action.path) {
        const basePath = action.path.replace(new RegExp(`^/${LOCALES[state.current].prefix}/?`, 'g'), '');
        const newPath = [LOCALES[action.value].prefix, basePath].join('/');
        navigate(newPath);
      }
      
      return {...state, current: action.value};

    default:
      return state;
  }
};
