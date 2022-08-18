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
  const [count, setCount] = useState(0)

  function createMarks() {
    let res = []
    for (let i = 1; i < 6; i++) {
      res.push({
        value: i,
        isPressed: false
      })
    }
    console.log("marks created")
    return res;
  }


  return (
    <div className="rating-container">
      <div className="star">
        <img src="./images/icon-star.svg" />
      </div>
      <h1 className="rating-title">How did we do? {count}</h1>
      <button onClick={() => setCount(prev => (prev + 1))}>Click</button>
      <h3 className="rating-para">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </h3>
      <ul className="rating-list">
        {stateMarks.map(mark => (
          <li
            key={mark.value}
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
