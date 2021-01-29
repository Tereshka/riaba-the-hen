import React from 'react';
import StarIcon from './StarIcon';

type RatingIconProps = {
  index: number;
  rating: number;
  hoverRating: number;
  onMouseEnter: (e: number) => void;
  onMouseLeave: () => void;
  onSaveRating: (e: number) => void;
};

const COLOR_SELECTED = '#fa8d2d';

const RatingIcon = (props: RatingIconProps) => {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;

  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return COLOR_SELECTED;
    } else if (!hoverRating && rating >= index) {
      return COLOR_SELECTED;
    }
    return 'none';
  }, [rating, hoverRating, index]);

  return (
    <div 
      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)} 
      onMouseLeave={() => onMouseLeave()} 
      onClick={() => onSaveRating(index)}>
      <StarIcon fill={fill} />
    </div>
  );
};

export default RatingIcon;