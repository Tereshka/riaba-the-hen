export const SET_LOCALE = 'SET_LOCALE';

export type AppState = {
  locale: string;
};

interface SetLocaleAction {
  type: typeof SET_LOCALE;
  payload: string;
}

export type AppActionTypes =
  | SetLocaleAction;
