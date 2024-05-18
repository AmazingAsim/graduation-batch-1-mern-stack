import logo from './logo.svg';
import './App.css';
import Controlled from './components/Controlled';
import Uncontrolled from './components/Uncontrolled';
import Thirdparty from './components/Thirdparty';
function App() {
  return (
    <div className="App">
       <Controlled/>
       <hr/>
       <Uncontrolled/>
       <hr/>
       <Thirdparty/>
    </div>
  );
}

export default App;
