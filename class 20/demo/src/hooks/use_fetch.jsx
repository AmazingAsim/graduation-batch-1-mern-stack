import { useState,useEffect } from "react";
import axios from "axios";
export default function useFetch(url){
    let [data,setData] = useState([]);
    let [error,setError] = useState('');
    let [loading,setLoading] = useState(true);
    let getData = async()=>{
      try {
        let result = await axios.get(url);
        if(result.status == 200){
          setData(result.data);
        }
        else{
          setError(`status code ${result.status}`)
        }
      } catch (error) {
         setError(error)
      }
      finally{
        setLoading(false);
      }
    }
  
    useEffect(function(){
      getData()
    },[url])
  

    return {data,error,loading}
}