import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin';
import Rock from './components/Rock';
import Dashboard from './components/Dashboard';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Dashboard/>}>   </Route>
              <Route path='rock' element={<Rock/>}></Route>
                <Route path='coin' element={<Coin/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
