import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  //setStep is the state variable
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  // const [test, setTest] = useState({ name: "jonas" });
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
    // setTest({ name: "fred" });
  }

  return (
    <div>
      <button className="close" onClick={() => setisOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1 </div>
            <div className={`${step >= 2 ? "active" : ""}`}>2 </div>
            <div className={`${step >= 3 ? "active" : ""}`}>3 </div>
          </div>

          <p className="message">
            {step}:{messages[step - 1]}
            {/* {test.name} */}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              //onMouseEnter={() => alert("test")}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
