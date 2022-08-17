import React, { useEffect, useState } from "react";

interface RatingProps {
  setIsSubmitted: () => void;
  setChosenMark: ({ isPressed: boolean, value: number }: MarkType) => void;
}

export type MarkType = {
  value: number
  isPressed: boolean
}

export const Rating = ({ setIsSubmitted, setChosenMark }: RatingProps) => {

  const createMarks = () => {
    let res = []
    for (let i = 1; i < 6; i++) {
      res.push({
        value: i,
        isPressed: false
      })
    }
    return res;
  }

  const handleClick = (value: number) => {
    let chosenMarks = marks.map(mark => {
      if (mark.value !== value) return { ...mark, isPressed: false }
      return { ...mark, isPressed: !mark.isPressed }
    })
    setMarks(chosenMarks)
  }

  const [marks, setMarks] = useState<MarkType[]>(createMarks())

  console.log(marks)

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
        {marks.map(mark => (
          <li
            key={mark.value}
            onClick={() => handleClick(mark.value)}
          >
            {mark.value}
          </li>))}
      </ul>
      <button className="rating-button" onClick={setIsSubmitted}>
        Submit
      </button>
    </div>
  );
};
