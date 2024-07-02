import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Userlist({senderId}) {
    const [users,setUsers] = useState([])
    let workingUrl = process.env.REACT_APP_API_URL || `http://localhost:8080`
    let getAllUsers = async()=>{
        let result = await axios.get(`${workingUrl}/users`);
        setUsers(result.data)
    }

    useEffect(function(){getAllUsers()},[])
  return (
    <div>
        {
            users.map((user)=>{
                if(senderId!=user._id){
                    return(
                      <Link className='nav-link' to={`room/${senderId}/${user._id}`}>
                           <div className='bg-light d-flex justify-content-around align-items-center my-2'>
                            <div>
                            <p className='m-0'>{user.user_name}</p>
                             <i>{user.user_email}</i>
                            </div>
                            <div>
                                {
                                    user?.user_profile? <img src={''} alt='dfd' />:null
                                }
                            </div>
                        </div>
                      </Link>
                    )
                }
            })
        }
    </div>
  )
}
