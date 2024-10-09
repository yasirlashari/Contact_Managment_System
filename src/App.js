// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './Components/Create';

function App() {
  return (

<BrowserRouter>
<Routes>
  <div className='container'>

  <Route exact path='/' element={<Create/>}></Route>
  <Route exact path='/' element={<Read/>}></Route>

  </div>
  
</Routes>
</BrowserRouter>

      );
}

export default App;
