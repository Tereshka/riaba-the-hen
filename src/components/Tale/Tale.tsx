import React from 'react';
import { useAppDispatch, useAppSelector } from 'store/index';
import fbt from 'fbt';
import LocaleList from 'components/LocaleList/LocaleList';
import Rating from 'components/Rating/Rating';

import image from 'assests/3544.jpg';
import './Tale.css';

const Tale = () => {
  // important import for rerendering the component after locale changed
  const locale = useAppSelector((state) => state.app.locale);
  const rating = useAppSelector((state) => state.app.rating);

  const title = 'Riaba the hen';
  const description = `There once was an old man and an old woman, they had a speckled hen. The hen laid an egg, not an ordinary one, but a golden one.\nThe old man hit it and hit it but could not break it. The old woman hit it and hit it but could not break it.\nThey both hit it and hit it but could not break it.\nA mouse ran past, waved its tail, the egg fell and broke! The old man and the old woman cried, the hen cackled:\n"Don't cry old man, don't cry old woman. I will lay you a new egg, not a golden one, but an ordinary one."`;
  const rate = 'Rate the tale, please:';
  const rateThankYou = 'Thank you! You gave ';

  return (
    <div>
      <div className="example">
        <img src={image} alt="chicken" />
        <h1>{fbt(fbt.param("text", title), "tale-title")}</h1>
        <p style={{whiteSpace: 'pre-line'}}>{fbt(fbt.param("text", description), "tale-description")}</p>
        <div className="rating">
          <h2>{fbt(fbt.param("text", rate), "tale-rate")}</h2>
          <Rating />
          {rating > 0 && <p>
            {fbt(
              'Thank you! You gave ' +
                fbt.plural("a star", rating, {
                  name: "number of stars",
                  showCount: "ifMany",
                  many: "stars",
                }) + ' 🌟',
              "rate-thankyou",
            )
            }    
          </p>}
        </div>
      </div>
      <ul className="languages">
        <LocaleList />
      </ul>
    </div>
  );
};

export default Tale;
