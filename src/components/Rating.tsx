import React, { useEffect, useState, useMemo } from "react";

interface RatingProps {
  setIsSubmitted: () => void;
  setChosenMark: ({ isPressed: boolean, value: number }: MarkType) => void;
}

export type MarkType = {
  value: number
  isPressed: boolean
}

export const Rating = ({ setIsSubmitted, setChosenMark }: RatingProps) => {

  const tempMarks = useMemo(() => createMarks(), [])
  const [stateMarks, setStateMarks] = useState<MarkType[]>(tempMarks)

  function createMarks() {
    let res = []
    for (let i = 1; i < 6; i++) {
      res.push({
        value: i,
        isPressed: false
      })
    }
    return res;
  }

  function handleClick(value: number) {
    const newMarks = stateMarks.map(mark => {
      if (mark.value !== value) return { ...mark, isPressed: false }
      return { ...mark, isPressed: !mark.isPressed }
    })
    setStateMarks(newMarks)
  }

  console.log(stateMarks)

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
        {stateMarks.map(mark => (
          <li
            key={mark.value}
            onClick={() => handleClick(mark.value)}
            className={mark.isPressed ? "submitted-active" : ""}
          >
            {mark.value}
          </li>
        ))}
      </ul>
      <button className="rating-button" onClick={setIsSubmitted}>
        Submit
      </button>
    </div>
  );
};
