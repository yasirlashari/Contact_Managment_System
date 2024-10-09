import axios from 'axios';
import React, { useState } from 'react';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page from refreshing
    console.log("Form submitted:", name, email);

    // Make POST request using axios
    axios.post("https://67065041a0e04071d2265124.mockapi.io/crudapp", {
      name: name,
      email: email,
      header,
    })
      .then(response => {
        console.log('Data successfully submitted:', response.data);
        // You can also reset the form or display a success message here
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <>
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name} // bind value to state
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email} // bind value to state
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Create;
