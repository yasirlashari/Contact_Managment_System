import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please fill in all fields');
      return;
    }

    axios.post("https://67065041a0e04071d2265124.mockapi.io/crudapp", {
      name: name,
      email: email,
    })
      .then(response => {
        navigate('/read');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="card p-4">
      <h2>Create Record</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Create;
