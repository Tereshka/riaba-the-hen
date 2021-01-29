import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/index';
import { setRating } from 'store/app/actions';

import RatingIcon from './RatingIcon';
import './rating.css';

const Rating = () => {
  const rating = useAppSelector((state) => state.app.rating);
  const dispatch = useAppDispatch();
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index: number) => {
    setHoverRating(index);
  };

  const onMouseLeave = () => {
    setHoverRating(0);
  };

  const onSaveRating = (index: number) => {
    dispatch(setRating(index));
  };

  return (
    <div className="box">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((index) => {
          return (
            <RatingIcon
              key={index}
              index={index} 
              rating={rating} 
              hoverRating={hoverRating} 
              onMouseEnter={onMouseEnter} 
              onMouseLeave={onMouseLeave} 
              onSaveRating={onSaveRating} />
          )
        })}
      </div>
    </div>
  );
};

export default Rating;
