import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Rating } from "./components/Rating";
import { Submitted } from "./components/Submitted";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(true);
  return (
    <div className="App">
      {isSubmitted ? (
        <Submitted />
      ) : (
        <Rating setIsSubmitted={() => setIsSubmitted(true)} />
      )}
    </div>
  );
}

export default App;
