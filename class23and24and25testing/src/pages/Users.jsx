import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
export default function Users() {
    const [data,setData] = useState([]);
    
    const getData = async()=>{
        try {
            let result = await axios.get('https://jsonplaceholder.typicode.com/users');
            setData(result.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{getData()},[])
  return (
    <div>
        <Link to='/'> 	&#x2190; go to Header</Link>
         <div className='container'>
            {
                data.map(user=>(
                    <div data-testid={`user_${user.id}`} key={user.id}>
                        <h3>{user.username}</h3>
                        <p>email: {user.email}</p>
                        <hr/>
                    </div>
                ))
            }
         </div>
    </div>
  )
}
