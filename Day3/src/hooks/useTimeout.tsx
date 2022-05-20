import React,{useState,useEffect} from 'react'

export const useTimeout = (delay: number) => {
   const [toshow,setToshow] = useState(false) 
   
    useEffect(()=>{
    let id = setTimeout(()=>{
     setToshow(true)
    },delay*2000)
    return()=>{clearTimeout(id)}
    },[])
  return (
    toshow
  )
}
