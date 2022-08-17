import React from "react";

interface RatingProps {
  setIsSubmitted: () => void;
}

export const Rating = ({ setIsSubmitted }: RatingProps) => {
  return (
    <div>
      <div className="star">
        <img src="./images/icon-star.svg" />
      </div>
      <h1>How did we do?</h1>
      <h3>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </h3>
      <div>1 2 3 4 5</div>
      <button onClick={setIsSubmitted}>Submit</button>
    </div>
  );
};
