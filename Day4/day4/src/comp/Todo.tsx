import React,{ useState} from 'react'

type TodoType = {
    id:number;
    title:string;
    status:boolean;
}

export const Todos = () => {
    // useEffect(()=>{
    //     getData()
    // },[])
    const [text,setText]=useState("")
    const[Todos,setTodos] = useState<TodoType[]>([])
    // const getData=()=>{
    //     axios.get("http://localhost:8080/todos")
    //     .then((response:AxiosResponse<TodoType[]>)=>{
    //         const {data}=response
    //         setTodos(data)
    //     })
    // }
    return (
        <div>
        <input value={text} onChange={(e)=>{setText(e.target.value)}}/>{""}
        <button onClick={()=>{
            const payload:TodoType={id:Math.random(),title:text,status:false}
            setTodos(...Todos,payload)
        }}>Add Todo</button>
       {Todos.map((t)=>(
           <TodoItem {...t}/>
       ))}
    </div>
  )
}
