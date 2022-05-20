import React,{useEffect, useState} from 'react'
import {v4 as uuid} from 'uuid'
import axios,{AxiosResponse} from 'axios'

type TodoType = {
    id:string;
    title:string;
    status:boolean;
}

export const Todos = () => {
    useEffect(()=>{
        getData()
    },[])
    const [text,setText]=useState("")
    const[Todos,setTodos] = useState<TodoType[]>([])
    const getData=()=>{
        axios.get("http://localhost:8080/todos")
        .then((response:AxiosResponse<TodoType[]>)=>{
            const {data}=response
            setTodos(data)
        })
    }
    return (
        <div>
        <input value={text} onChange={(e)=>{setText(e.target.value)}}/>{""}
        <button onClick={()=>{
            const payload={title:text,status:false}
            axios.post(`http://localhost:8080/todos`,payload).then(getData)

            // setTodos([...Todos,payload])
        }}>Add Todo</button>
        {Todos.map((todo)=>(
             <div key={todo.id}>{todo.title} - {todo.status ? "done":"Not"}</div>
        ))}
    </div>
  )
}
