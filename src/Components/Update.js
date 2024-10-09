import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get(`https://67065041a0e04071d2265124.mockapi.io/crudapp/${id}`)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put(`https://67065041a0e04071d2265124.mockapi.io/crudapp/${id}`, {
      name: name,
      email: email,
    })
      .then((response) => {
        navigate('/read');
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="card p-4">
      <h2>Update Record</h2>
      <form onSubmit={handleUpdate}>
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

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default Update;
