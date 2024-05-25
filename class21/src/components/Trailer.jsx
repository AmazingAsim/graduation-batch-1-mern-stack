import React from 'react'
import movieTrailer from 'movie-trailer'
import { useState } from 'react'
export default function Trailer() {
    const [data,setData] = useState([]);
    const [moviename,setMoviename] = useState('');

    let search = async()=>{
        let movies = await movieTrailer(moviename,{multi:true});
        movies = movies.map(function(movie){
            let pattern = /watch\?v=/;
            let newString = movie.replace(pattern,'embed/')
            return newString
        })

        setData(movies);
    }

  return (
    <div>
        <h1 className="display-2 text-danger p-2">Movie Trailer App</h1>
        <hr   size="5" color='red' />

        <div className="w-75 m-auto mt-2 p-2 d-flex gap-1">
             <input type="text" className="form-control border border-2 border-danger" 
              onChange={(event)=>{setMoviename(event.target.value)}} />
             <button className='btn btn-danger' onClick={search} >Search</button>
        </div>

        <div className="container">
            {
                data.map(url=>(
                    <div className='p-2'>
                        <iframe src={url} frameborder="0" style={{width:"100%"}}></iframe>
                    </div>
                ))
            }
        </div>

    </div>
  )
}
