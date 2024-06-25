import './App.css'
import Header from './components/Header/Header';
import Fruit from './pages/Fruit';
import Users from './pages/Users';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
         <BrowserRouter>
           <Routes>
              <Route path="/" element={<Header/>} ></Route>
              <Route path="fruit" element={<Fruit/>} ></Route>
              <Route path="users" element={<Users/>} ></Route>
           </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
