import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  const addValue = () => {
    if (counter <= 19) {
      setCounter(counter + 1);
      setMessage("");
    } else {
      setMessage("Upper limit reached!");
    }
  };

  const removeValue = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
      setMessage("");
    } else {
      setMessage("Lower limit reached!");
    }
  };

  return (
    <div className="container">
      <h1>React Counter</h1>
      <h2>Current Value: {counter}</h2>
      <div className="button-group">
        <Button btnText="Add" onClick={addValue} />
        <Button btnText="Remove" onClick={removeValue} />
      </div>
      {message && <p className="limit-message">{message}</p>}
    </div>
  );
}

export default App;
