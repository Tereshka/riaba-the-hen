export const SET_LOCALE = 'SET_LOCALE';
export const SET_RATING = 'SET_RATING';

export type AppState = {
  locale: string;
  rating: number;
};

interface SetLocaleAction {
  type: typeof SET_LOCALE;
  payload: string;
}

interface SetRatingAction {
  type: typeof SET_RATING;
  payload: number;
}

export type AppActionTypes =
  | SetLocaleAction
  | SetRatingAction;
