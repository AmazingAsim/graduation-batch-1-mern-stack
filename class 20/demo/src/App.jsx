import './App.css';
import useSum from './hooks/use_sum';
import axios from 'axios';

import useFetch from './hooks/use_fetch';
function App() {
 
  let {error,data,loading} = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div className="App">
        {
          data.map(function(user){
            return(
              <div>
                <h3>{user.username}</h3>
              </div>
            )
          })
        }
    </div>
  );
}

export default App;


// stages of a component or component life cycle

// mounting stage

// updating stage

// unmounting stage