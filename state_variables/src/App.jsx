import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard';
import Feedback from './components/Feedback';
import Login from './components/Login';
import Signup from './components/Signup';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login></Login>}></Route>
              <Route path='/signup' element={<Signup></Signup>} > </Route>
              <Route path='/dashboard' element={<Dashboard></Dashboard>} >
                  
                  <Route path='users/:id' element={<Users></Users>}></Route>
                  <Route path='feedback' element={<Feedback></Feedback>}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
