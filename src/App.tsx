import { useState, useSyncExternalStore } from "react";
import { MarkType, Rating } from "./components/Rating";
import { Submitted } from "./components/Submitted";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [chosenMark, setChosenMark] = useState<MarkType>()

  console.log(chosenMark)

  return (
    <div className="App">
      {isSubmitted ? (
        <Submitted
          mark={chosenMark?.value}
        />
      ) : (
        <Rating
          setIsSubmitted={() => setIsSubmitted(true)}
          setChosenMark={(newMark) => setChosenMark(newMark)}
        />
      )}
    </div>
  );
}

export default App;
