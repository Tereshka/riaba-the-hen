import React from 'react';
import { useAppSelector } from 'store/index';
import fbt from 'fbt';
import LocaleList from '../LocaleList/LocaleList';

import image from 'assests/3544.jpg';
import './Tale.css';

const Tale = () => {
  // important import for rerendering the component after locale changed
  const locale = useAppSelector(state => state.app.locale);

  const title = 'Riaba the hen';
  const description = `There once was an old man and an old woman, they had a speckled hen. The hen laid an egg, not an ordinary one, but a golden one.\nThe old man hit it and hit it but could not break it. The old woman hit it and hit it but could not break it.\nThey both hit it and hit it but could not break it.\nA mouse ran past, waved its tail, the egg fell and broke! The old man and the old woman cried, the hen cackled:\n"Don't cry old man, don't cry old woman. I will lay you a new egg, not a golden one, but an ordinary one."`;

  return (
    <div>
      <div className="example">
        <img src={image} alt="chicken" />
        <h1>{fbt(fbt.param("text", title), "tale-title")}</h1>
        <p style={{whiteSpace: 'pre-line'}}>{fbt(fbt.param("text", description), "tale-description")}</p>
      </div>
      <ul className="languages">
        <LocaleList />
      </ul>
    </div>
  );
};

export default Tale;
