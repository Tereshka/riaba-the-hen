import {
  SET_LOCALE,
} from './types';

export function setLocale (locale) {
  return {
    type: SET_LOCALE,
    payload: locale,
  };
}
