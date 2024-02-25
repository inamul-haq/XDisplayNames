import { useState } from "react";
import "./styles.css";

export default function DisplayName() {
  const [fullName, setFullName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    if(firstName!='' && lastName!=''){
      setFullName('Full Name: ' +firstName + " " + lastName);}
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            
          />
        </label>
        <br/>
        <button type="submit">Submit</button>
        <br /><br />
      </form>
      {fullName}
    </div>
  );
}
