import {
  AppActionTypes,
  AppState,
  SET_LOCALE,
  SET_RATING,
} from './types';
// const {
//   GenderConst,
//   IntlVariations,
//   IntlViewerContext,
//   fbt,
//   init
// } = require("fbt");
import { IntlViewerContext } from 'fbt';
import { LOCALES } from 'i18n/locales';

const initialState: AppState = {
  locale: 'en_US',
  rating: 0,
};

export function appReducer(
  state = initialState,
  action: AppActionTypes,
): AppState {
  switch (action.type) {
    case SET_LOCALE: {
      const locale = action.payload
      IntlViewerContext.locale = locale;
      console.log(IntlViewerContext);
      setLocale(locale);
      return {
        ...state,
        locale: locale,
      };
    }
    case SET_RATING:
      return {
        ...state,
        rating: action.payload,
      }
    default:
      return state;
  }
}

const setLocale = (locale: string) => {
  const html = document.getElementsByTagName('html')[0];
  if (html != null) {
    html.lang = LOCALES[locale].bcp47;
  }
  document.body.className = LOCALES[locale].rtl ? 'rtl' : 'ltr';
};
