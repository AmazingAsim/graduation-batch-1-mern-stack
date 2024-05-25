import React from 'react'
import { useEffect } from 'react'
export default function Timer() {

useEffect(function(){

 let timer = setInterval(function(){
    console.log('hello');
 },1000)

 return ()=>{
    clearInterval(timer);
 }

})

  return (
    <div>Timer</div>
  )
}
