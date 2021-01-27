import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLocale } from '../../store/app/actions';

import LOCALES from '../../i18n/locales';

const LocaleList = () => {
  const locale = useSelector(state => state.app.locale);
  const dispatch = useDispatch();

  return (
    <>
      {Object.keys(LOCALES).map(loc => (
        <li key={loc} value={loc}>
          <a
            href={`#${loc}`}
            className={locale === loc ? 'disabled' : ''}
            onClick={(event) => {
              event.preventDefault();
              dispatch(setLocale(loc));
            }}>
            {LOCALES[loc].displayName}
          </a>
        </li>
      ))}
    </>
  );
};

export default LocaleList;
