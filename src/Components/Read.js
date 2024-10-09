import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  function getData() {
    axios
      .get("https://67065041a0e04071d2265124.mockapi.io/crudapp")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function handleDelete(id) {
    axios.delete(`https://67065041a0e04071d2265124.mockapi.io/crudapp/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Records</h2>
      <div className="row">
        {data.map((eachData) => (
          <div className="col-md-4" key={eachData.id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{eachData.name}</h5>
                <p className="card-text">{eachData.email}</p>
                <button
                  className='btn btn-warning'
                  onClick={() => navigate(`/update/${eachData.id}`)}
                >
                  Edit
                </button>
                <button
                  className='btn btn-danger ms-2'
                  onClick={() => handleDelete(eachData.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
