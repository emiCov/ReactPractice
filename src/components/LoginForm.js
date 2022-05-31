import { useState } from "react";

export default function LoginForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleLogin() {
    alert("Hello " + firstName + " " + lastName);
  }

  function handleFirstNameChange(event) {
    const username = event.target.value;
    setFirstName(username);
  }

  function handleLastNameChange(event) {
    const password = event.target.value;
    setLastName(password);
  }

  return (
    <div className="login">
      <input
        type="text"
        placeholder="Enter FirstName"
        value={firstName}
        onChange={handleFirstNameChange}
      />

      <input
        type="text"
        placeholder="Enter LastName"
        value={lastName}
        onChange={handleLastNameChange}
      />

      <button onClick={handleLogin}>Greet me</button>
    </div>
  );
}
