import fbt, { init } from 'fbt';
import translations from '../translatedFbts.json';
import LOCALES from '../i18n/locales';

export const viewerContext = {
  locale: 'en_US',
};

init({
  translations, //: require('../../translatedFbts.json'),
  // locales: LOCALES,
  // hooks: {
  //   getViewerContext: () => viewerContext,
  // },
});
