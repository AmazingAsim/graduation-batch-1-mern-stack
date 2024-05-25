import React, { useState } from 'react'
import axios from 'axios';
export default function Weather() {
    const [data,setData] = useState({});
    const  [place,setPlace] = useState('')

    let search = async()=>{
        let url = `https://api.weatherapi.com/v1/current.json?key=8d5bca67f13b43238c101826240102&q=${place}&aqi=no`
        let result = await axios.get(url);
        setData(result.data);
    }
  return (
    <div>
        <h1 className="display-2 text-primary p-2">Weather App</h1>
        <hr   size="5" color='blue' />

        <div className="w-75 m-auto mt-2 p-2 d-flex gap-1">
             <input type="text" className="form-control border border-2 border-primary" 
              onChange={(event)=>{setPlace(event.target.value)}} />
             <button className='btn btn-primary' onClick={search} >Search</button>
        </div>

        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>place: {data?.location?.name} </h2>
                    <h3>Region:{data?.location?.region}</h3>
                    <h3>Country:{data?.location?.country}</h3>
                    <h4>Temprature in celcius:{data?.current?.temp_c} degree celcius </h4>
                    <h4>Temprature in far:{data?.current?.temp_f} degree far </h4>
                </div>
            </div>
        </div>
    </div>
  )
}
