import React, {useState} from 'react';
import {} from 'react-native';
import {Color} from '../utils/Colors';
import StarRating from 'react-native-star-rating';

const CustomStarRating = props => {
  const [rating, setRating] = useState(0);
  return (
    <StarRating
      fullStarColor={Color.Main}
      starSize={props.starSize}
      disabled={false}
      maxStars={5}
      rating={rating}
      selectedStar={setRating}
      halfStarEnabled={true}
    />
  );
};

export default CustomStarRating;
