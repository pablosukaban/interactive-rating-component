import React from "react";

interface RatingProps {
  setIsSubmitted: () => void;
}

export const Rating = ({ setIsSubmitted }: RatingProps) => {
  return (
    <div className="rating-container">
      <div className="star">
        <img src="./images/icon-star.svg" />
      </div>
      <h1 className="rating-title">How did we do?</h1>
      <h3 className="rating-para">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </h3>
      <ul className="rating-list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <button className="rating-button" onClick={setIsSubmitted}>
        Submit
      </button>
    </div>
  );
};
