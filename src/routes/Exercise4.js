import { useState } from "react";

function Exercise4() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>
        <p>
          Use the useState React hook to track how many times a button is
          clicked, and display the number.
        </p>
        <div className="solution-container">
          <p>{count}</p>
          <button onClick={handleIncrement}>Click</button>
        </div>
      </div>
    </div>
  );
}

export default Exercise4;
