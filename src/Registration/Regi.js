import React, { useEffect, useState } from "react"; // Import React

function Regi() {
  const data = {
    name: "",
    email: "",
    number: ""
  };
  const [inputdata, setinputdata] = useState(data);
  const [run, setrun] = useState(false);
  console.log(inputdata);

  useEffect(() => {
    console.log("Registered");
  }, [run]);

  function handleForm(e) { 
    const { name, value } = e.target;
    setinputdata({ ...inputdata, [name]: value });
  }

  function change(e) {
    e.preventDefault(); 

    if (!inputdata.name || !inputdata.email || !inputdata.number) {
      alert("All fields are Mandatory");
    } else {
      setrun(true);
    }
  }

  return (
    <div>
      {
        run === true ? ( <h2>Hello {inputdata.name}, you are registered:</h2> ) : null 
      }

      <form> 
        Name <input type="text" name="name" value={inputdata.name} onChange={handleForm} /><br/>
        Email <input type="email" name="email" value={inputdata.email} onChange={handleForm} /><br/>
        Mobile <input type="number" name="number" value={inputdata.number} onChange={handleForm} /><br/>
        <button onClick={change}>Submit</button>
      </form>
    </div>
  );
}

export default Regi;
