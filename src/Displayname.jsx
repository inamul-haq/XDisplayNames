import { useState } from "react";
import "./styles.css";

export default function DisplayName() {
  const [fullName, setFullName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleNameChange = (e) => {
    e.preventDefault(); 
    if (firstName.trim() && lastName.trim()) {
      setFullName("Full Name: " + firstName + " " + lastName);
    }
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form >
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
        <button onClick={handleNameChange} type="submit">Submit</button>
      </form>
      <br />
      <div>{fullName}</div>
    </div>
  );
}
