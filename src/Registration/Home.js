import React, { useEffect, useState } from "react";

function Home() {
  const data = {
    name: "",
    email: "",
    password: ""
  };

  const [inputdata, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  console.log(inputdata)
  console.log(flag)

  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputdata.name || !inputdata.email || !inputdata.password) {
      alert("All fields are Mandatory");
    } else {
      setFlag(true);
    }
  }

  return (
    <>
      <pre>
        {flag === true? <h2>Hello {inputdata.name}, you've registered</h2> : null}
      </pre>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Registration Form...</h1>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={inputdata.name}
            onChange={handleChange}
          />
          <br />
          Email
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={inputdata.email}
            onChange={handleChange}
          />
          <br />
          Password
          <input
            type="text"
            name="password"
            placeholder="Enter password"
            value={inputdata.password}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Home;
