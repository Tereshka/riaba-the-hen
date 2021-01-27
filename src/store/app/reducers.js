import {
  SET_LOCALE,
} from './types';
// const {
//   GenderConst,
//   IntlVariations,
//   IntlViewerContext,
//   fbt,
//   init
// } = require("fbt");
import { IntlViewerContext } from 'fbt';
import { viewerContext } from '../../i18n/init';
import LOCALES from '../../i18n/locales';

const initialState = {
  locale: 'en_US',
};

export function appReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case SET_LOCALE: {
      const locale = action.payload
      viewerContext.locale = locale;
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

const setLocale = (locale) => {
  const html = document.getElementsByTagName('html')[0];
  if (html != null) {
    html.lang = LOCALES[locale].bcp47;
  }
  document.body.className = LOCALES[locale].rtl ? 'rtl' : 'ltr';
};