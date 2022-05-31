function handleClick() {
  alert("You cliked me. Thanks!");
}

function Exercise2() {
  return (
    <div>
      <div>
        <p>
          Add a native HTML button called "Click me". Capture the click event
          and alert the message, "You cliked me. Thanks!".
        </p>
      </div>
      <div className="solution-container">
        <button id="ex2Button" onClick={handleClick}>
          Click me!
        </button>
      </div>
    </div>
  );
}

export default Exercise2;
