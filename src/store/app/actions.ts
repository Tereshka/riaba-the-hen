import {
  SET_LOCALE,
  SET_RATING,
  AppActionTypes,
} from './types';

export function setLocale(locale: string): AppActionTypes {
  return {
    type: SET_LOCALE,
    payload: locale,
  };
}

export function setRating(rating: number): AppActionTypes {
  return {
    type: SET_RATING,
    payload: rating,
  };
}
