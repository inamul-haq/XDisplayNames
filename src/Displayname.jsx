import { useState, useEffect } from "react";
import "./styles.css";

export default function DisplayName() {
  const [fullName, setFullName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    setFullName("Full Name: " + firstName + " " + lastName);
  }, [firstName, lastName]);

  const handleNameChange = (e) => {
    e.preventDefault(); 
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleNameChange}>
        <label>
          First Name:
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div>{fullName}</div>
    </div>
  );
}
