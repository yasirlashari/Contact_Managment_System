import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import './App.css'; // Ensure this imports your CSS with animations

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <a className="navbar-brand" href="/">CRUD App</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Create</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/read">Read</a>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
