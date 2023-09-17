
import {useState} from "react";
import "./App.css";

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState(false);
  

  const handleClickokay=()=>{
    const fn=firstName;
    const ln=lastName;
    setMessage(!message);
    console.log(fn + ln);
  }

  const handleClickclear=()=>{
    setFirstName("");
    setLastName("");
    setMessage(false);
  }

  return (
    <div className="App">
      <h1>Greet App</h1>
      <div className="input-group">
        <span className="input-group-text">First and last name</span>
        <input onChange={(e)=>setFirstName(e.target.value)} type="text"  className="form-control" />
        <input onChange={(e)=>setLastName(e.target.value)} type="text"  className="form-control" />
      </div>
      <button type="button" class="btn btn-primary" onClick={handleClickokay}>
       Okay
      </button>
      <button type="button" class="btn btn-secondary" onClick={handleClickclear}>
        Clear
      </button>
      {message && <p>{`hello ${firstName} ${lastName}`}</p>}
    </div>
  );
}

export default App;
