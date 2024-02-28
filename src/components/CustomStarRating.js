import React, {useState} from 'react';
import {} from 'react-native';
import {Color} from '../utils/Colors';
import StarRating from 'react-native-star-rating';

const CustomStarRating = props => {
  const [rating, setRating] = useState(Math.random()*5+1)
  return (
    <StarRating
      fullStarColor={Color.Main}
      starSize={props.starSize}
      disabled={true}
      maxStars={5}
      rating={rating}
      selectedStar={setRating}
      halfStarEnabled={true}
    />
  );
};

export default CustomStarRating;
