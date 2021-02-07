import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RatingWrapper = styled.div`
  margin: 15px 5px 0 7px;
  display: flex;
  .stars {
    display: flex;
    color: #fb8b24;
    margin: 0 5px 0 0;
  }
`;

const Rating = ({ rating }) => {
  return (
    <RatingWrapper>
      <div className="flex mt-1 text-yellow-400 stars">
        <span>
          {rating >= 1 ? (
            <BsStarFill />
          ) : rating >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {rating >= 2 ? (
            <BsStarFill />
          ) : rating >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {rating >= 3 ? (
            <BsStarFill />
          ) : rating >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {rating >= 4 ? (
            <BsStarFill />
          ) : rating >= 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {rating >= 5 ? (
            <BsStarFill />
          ) : rating >= 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
      </div>
      <div>{rating} out of 5 stars</div>
    </RatingWrapper>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
