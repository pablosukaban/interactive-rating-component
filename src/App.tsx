import { useState } from "react";
import { MarkType, Rating } from "./components/Rating";
import { Submitted } from "./components/Submitted";

function App() {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [chosenMark, setChosenMark] = useState(0)

  return (
    <div className="App">
      {!isSubmitted
        ? <Rating 
          setIsSubmitted={() => setIsSubmitted(true)} 
          chosenMark={chosenMark}
          setChosenMark={(value: number) => setChosenMark(value)}
          />
        : <Submitted chosenMark={chosenMark}/>
      }
    </div>
  );
}

export default App;
