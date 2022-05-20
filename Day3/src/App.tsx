import React,{useState} from 'react'
import axios from 'axios'

type User={
  id:number;
  login:string;
  avatar_url:string;
}
const URL="https://api.github.com/search/users"

function App() {
 const[text ,setText] =useState("")
  const [data,setData]=useState<User[]>([])
  return (
    <div>
      <input type="text" placeholder="Enter" value={text} onChange={(e)=>setText(e.target.value)}/>
       <button onClick={()=>{
        axios.get(URL,{
          params:{
            per_page:5,
            q:text,
          },
        })
        .then(({data})=>{
          setData(data.items)
          console.log(data.items)
        });
       }}>
         Search</button>
         {data.map((user)=>(
           <div key={user.id}>
             {user.login}{""}
             <img src={user.avatar_url} alt="" />
           </div>
         ))}
    </div>
  );
  }
export default App;
