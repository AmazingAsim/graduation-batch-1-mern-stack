import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import UserContext from './global/userContext';

function App() {
  const [user,setUser] = useState('Asim');
  return (
    <div className="App">
      <UserContext.Provider value={{user,setUser}}>
          <Login/>
          <Dashboard/>
      </UserContext.Provider >
    </div>
  );
}

export default App;
