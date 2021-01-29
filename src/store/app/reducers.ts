import {
  SET_LOCALE,
  AppActionTypes,
  AppState,
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
