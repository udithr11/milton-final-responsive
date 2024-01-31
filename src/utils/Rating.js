import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
  const starCount = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars > 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500 mr-1" />);
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          key="half-star"
          icon={faStar}
          className="text-yellow-500"
          style={{ width: '50%', overflow: 'hidden' }}
        />
      );
    }

    for (let i = filledStars + (hasHalfStar ? 1 : 0); i < starCount; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />);
    }

    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default Rating;
