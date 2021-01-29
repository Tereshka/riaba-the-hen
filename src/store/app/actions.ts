import {
  SET_LOCALE,
  AppActionTypes,
} from './types';

export function setLocale(locale: string): AppActionTypes {
  return {
    type: SET_LOCALE,
    payload: locale,
  };
}
